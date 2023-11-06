import { useEffect, useState, useMemo } from "react";
import { Spin, Tabs, theme } from 'antd';
import { useVeramo } from '@veramo-community/veramo-react'
import { useQuery } from 'react-query'
import { IDIDManager, IDataStoreORM, UniqueVerifiableCredential } from "@veramo/core";
import { getIssuerDID, shortId } from "@veramo-community/agent-explorer-plugin";
import { GraphEdge, GraphNode, IIdentifierProfile } from "./types";
import { SigmaForceView } from "./SigmaForce";

export const GraphView = () => {
  const { token } = theme.useToken()
  const { agent } = useVeramo<IDataStoreORM & IDIDManager>()
  const [ profiles, setProfiles ] = useState<IIdentifierProfile[]>([])
  const [ isLoadingProfiles, setIsLoadingProfiles ] = useState<boolean>(true)

  const { data: credentials, isLoading: isLoadingCredentials } = useQuery(
    ['credentials', { agentId: agent?.context.name }],
    () =>
      agent?.dataStoreORMGetVerifiableCredentials({
        order: [{ column: 'issuanceDate', direction: 'DESC' }],
      }),
  )

  const { data: contacts, isLoading: isLoadingContacts } = useQuery(
    ['contacts', { agentId: agent?.context.id }],
    () => agent?.dataStoreORMGetIdentifiers(),
  )

  const { data: identifiers, isLoading: isLoadingIdentifiers} = 
  useQuery(
    ['identifiers', { agentId: agent?.context.id }], 
    () => agent?.didManagerFind(),
    { enabled: !!agent?.didManagerFind}
  )

  const uniqueIdentifiers = useMemo(() => {
     return [...new Set([
      ...(contacts?.map(c => c.did || '') || []),
      ...(identifiers?.map(i => i.did) || [])
    ])]
  }, [contacts, identifiers])


  useEffect(() => {

    // this could be optimized by using react-query's useQueries hook
    async function fetchProfiles() {
      setIsLoadingProfiles(true)
      const profiles = await Promise.all(
        uniqueIdentifiers.map(did => {
          return agent?.getIdentifierProfile({ did })
        })
      )
      setProfiles(profiles)
      setIsLoadingProfiles(false)
    }
    if (!isLoadingIdentifiers && !isLoadingContacts) {
      console.log('fetching profiles')
      fetchProfiles()
    }
   
  }, [uniqueIdentifiers, isLoadingIdentifiers, isLoadingContacts]);

  const isLoading = isLoadingCredentials || isLoadingContacts || isLoadingIdentifiers || isLoadingProfiles
  
  const { nodes, edges } = useMemo(() => {
    const nodes = profiles.map((profile) => {
      return {
        id: profile.did,
        label: profile.name || shortId(profile.did),
        color: token.colorPrimary,
        picture: profile.picture || undefined,
        size: 15
      }
    })


    const edges: GraphEdge[] = []
    
    credentials?.forEach((credential) => {
      nodes.push({
        id: credential.hash,
        label: getCredentialLabel(credential),
        color: token.colorPrimary,
        picture: '',
        size: 5,
      })
      edges.push({
        id: credential.hash + 'from',
        source: getIssuerDID(credential.verifiableCredential),
        target: credential.hash,
        label: 'relation',
        color: token.colorBorder,
      })
      if (credential.verifiableCredential.credentialSubject.id) {
        edges.push({
          id: credential.verifiableCredential.id,
          source: credential.hash,
          target: credential.verifiableCredential.credentialSubject.id || '',
          label: 'relation',
          color: token.colorBorder,
        })
      }
    })

    return {nodes, edges}

  }, [credentials, profiles ]);

  if (isLoading) {
    return <Spin />
  }

  return (
    <SigmaForceView nodes={nodes} edges={edges} />
  );
};

function getCredentialLabel (credential: UniqueVerifiableCredential): string {

  if (credential.verifiableCredential?.type?.includes('Kudos')) {
    return credential.verifiableCredential?.credentialSubject?.kudos || ''
  }
  if (credential.verifiableCredential?.type?.includes('BrainSharePost')) {
    return credential.verifiableCredential?.credentialSubject?.title || credential.verifiableCredential?.credentialSubject?.post || ''
  }

  return (credential.verifiableCredential?.type as string[]).join(',') || ''
}
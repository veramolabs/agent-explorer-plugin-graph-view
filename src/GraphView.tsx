import { useEffect, useState } from "react";
import { Spin, Tabs, theme } from 'antd';
import { useVeramo } from '@veramo-community/veramo-react'
import { useQuery } from 'react-query'
import { IDIDManager, IDataStoreORM } from "@veramo/core";
import { getIssuerDID, shortId } from "@veramo-community/agent-explorer-plugin";
import { SigmaCircularView } from "./SigmaCircularView";
import { GraphEdge, GraphNode, IIdentifierProfile } from "./types";

export const GraphView = () => {
  const { token } = theme.useToken()
  const { agent } = useVeramo<IDataStoreORM & IDIDManager>()
  const [ uniqueIdentifiers, setUniqueIdentifiers ] = useState<string[]>([])
  const [ profiles, setProfiles ] = useState<IIdentifierProfile[]>([])
  const [ graphNodes, setGraphNodes ] = useState<GraphNode[]>([])
  const [ graphEdges, setGraphEdges ] = useState<GraphEdge[]>([])
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
  useQuery(['identifiers', { agentId: agent?.context.id }], () =>
    agent?.didManagerFind(),
  )

  useEffect(() => {
    setUniqueIdentifiers( [...new Set([
      ...(contacts?.map(c => c.did || '') || []),
      ...(identifiers?.map(i => i.did) || [])
    ])])
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

    fetchProfiles()
   
  }, [uniqueIdentifiers]);

  const isLoading = isLoadingCredentials || isLoadingContacts || isLoadingIdentifiers || isLoadingProfiles
  
  useEffect(() => {
    const nodes = profiles.map((profile) => {
      return {
        id: profile.did,
        label: profile.name || shortId(profile.did),
        color: token.colorPrimary,
        picture: profile.picture || undefined,
      }
    })

    setGraphNodes(nodes)

    const edges = credentials?.map((credential) => {
      return {
        id: credential.verifiableCredential.id,
        source: getIssuerDID(credential.verifiableCredential),
        target: credential.verifiableCredential.credentialSubject.id || '',
        label: 'relation',
        color: '#ccc',
      }
    }) || []

    setGraphEdges(edges)

  }, [credentials, profiles, setGraphNodes, setGraphEdges ]);

  if (isLoading) {
    return <Spin />
  }

  return (
    <Tabs defaultActiveKey="1" items={[
      {
        key: '1',
        label: 'Sigma Circular',
        children: <SigmaCircularView nodes={graphNodes} edges={graphEdges} />,
      }
    ]} />
  );
};
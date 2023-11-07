import { useEffect, useState, useMemo } from "react";
import { GlobalToken, Spin, Tabs, theme } from 'antd';
import { useVeramo } from '@veramo-community/veramo-react'
import { useQuery } from 'react-query'
import { IDIDManager, IDataStore, IDataStoreORM, TAgent, UniqueVerifiableCredential } from "@veramo/core";
import { computeEntryHash } from "@veramo/utils";
import { getIssuerDID, shortId } from "@veramo-community/agent-explorer-plugin";
import { GraphEdge, GraphNode, IIdentifierProfile } from "./types";
import { SigmaForceView } from "./SigmaForce";
import { normalizeCredential } from 'did-jwt-vc'
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
    if (!agent) return {nodes: [], edges: []}

    const nodes: GraphNode[] = profiles.map((profile) => {
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
      if (nodes.find(n => n.id !== credential.hash)) {
        nodes.push(getCredentialNode(credential, token))
      }
      edges.push({
        id: credential.hash + 'from',
        source: getIssuerDID(credential.verifiableCredential),
        target: credential.hash,
        label: 'from',
        color: token.colorBorder,
      })

      const {nodes: nodes2, edges: edges2} = getNodesAndEdgesForCredential(credential, token)
      nodes2.forEach(n => {
        if (!nodes.find(n2 => n2.id === n.id)) {
          nodes.push(n)
        }
      })
      edges2.forEach(e => {
        if (!edges.find(e2 => e2.id === e.id)) {
          edges.push(e)
        }
      })
      
    })
    return {nodes, edges}
    

  }, [credentials, profiles, agent ]);


  if (isLoading) {
    return <Spin />
  }

  return (
    <SigmaForceView nodes={nodes} edges={edges} />
  );
};

function getCredentialNode (credential: UniqueVerifiableCredential, token: GlobalToken): GraphNode {
  let label = (credential.verifiableCredential?.type as string[]).join(',') || ''
  let picture = ''
  let color = token.colorPrimary
  let size = 8

  if (credential.verifiableCredential?.type?.includes('Reaction')) {
    // label = 'Reaction ' + credential.verifiableCredential?.credentialSubject?.emoji || ''
    label = 'Reaction'
    color = token.colorBgContainer
    picture = emojiToDataURL(credential.verifiableCredential?.credentialSubject?.emoji)

  }
  if (credential.verifiableCredential?.type?.includes('Profile')) {
    label = 'Profile'
    color = token.colorBgContainer
    picture = emojiToDataURL('📄')
  }
  if (credential.verifiableCredential?.type?.includes('Kudos')) {
    label = credential.verifiableCredential?.credentialSubject?.kudos || ''
    color = token.colorBgContainer
    picture = emojiToDataURL('🏆')
  }
  if (credential.verifiableCredential?.type?.includes('BrainSharePost')) {
    label = credential.verifiableCredential?.credentialSubject?.title || credential.verifiableCredential?.credentialSubject?.post.substring(0, 20) || ''
    color = token.colorBgContainer
    picture = emojiToDataURL('💬')
    size = 10
  }

  return {
    label,
    id: credential.hash,
    color,
    picture,
    size,
  }
}

function emojiToDataURL(emoji: string): string {
  const codePoint = emoji.codePointAt(0) || 0;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <text x="8" y="50" font-size="46">${String.fromCodePoint(codePoint)}</text>
  </svg>`;

  const dataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  return dataUrl;
}

function getNodesAndEdgesForCredential(credential: UniqueVerifiableCredential, token: GlobalToken): {nodes: GraphNode[], edges: GraphEdge[]} {
  const nodes: GraphNode[] = []
  const edges: GraphEdge[] = []
  if (credential.verifiableCredential?.type?.includes('BrainSharePost')) {
    const markdown = credential.verifiableCredential?.credentialSubject?.post || ''

    
    const postReferences = markdown.match(/did(.*)\/([0-9a-zA-Z]*)\b/g)
    postReferences?.forEach((postReference: string) => {
      edges.push({
        id: credential.hash + 'to',
        source: credential.hash,
        target: postReference.split('/').pop() || '',
        label: 'to',
        color: token.colorBorder,
      })
    })


    
    
  }

  if (credential.verifiableCredential.credentialSubject.id) {
    edges.push({
      id: credential.hash + 'to',
      source: credential.hash,
      target: credential.verifiableCredential.credentialSubject.id,
      label: 'to',
      color: token.colorBorder,
    })
  }
  if (credential.verifiableCredential.credentialSubject.hash) {
    edges.push({
      id: credential.hash + 'to',
      source: credential.hash,
      target: credential.verifiableCredential.credentialSubject.hash,
      label: 'to',
      color: token.colorBorder,
    })
  }


  return {nodes, edges}
}
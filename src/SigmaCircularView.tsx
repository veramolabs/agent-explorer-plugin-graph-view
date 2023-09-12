import { useEffect } from "react";
import Graph from "graphology";
import { useLayoutCircular } from "@react-sigma/layout-circular";
import { MultiDirectedGraph } from "graphology";
import "@react-sigma/core/lib/react-sigma.min.css";
import getNodeProgramImage from "sigma/rendering/webgl/programs/node.image";
import { theme } from 'antd'
import {
  SigmaContainer,
  ControlsContainer,
  ZoomControl,
  SearchControl,
  FullScreenControl,
  useLoadGraph,
} from "@react-sigma/core";
import { GraphEdge, GraphNode } from "./types";
import { useResize } from "./utils/use-resize";


export const LoadGraph = (props: { nodes: GraphNode[], edges: GraphEdge[]}) => {
  const loadGraph = useLoadGraph();
  const { assign } = useLayoutCircular();
  
  useEffect(() => {
    const graph = new Graph({ multi: true});

    try {
      for (const node of props.nodes || []) {
        graph.addNode(node.id, { x: 0, y: 0, size: 15, label: node.label, color: node.color, image: { url: node.picture } });
      }

      for (const edge of props.edges || []) {
        graph.addEdge(edge.source, edge.target);
      }
    } catch (e) {
      console.log(e)
    }

    loadGraph(graph);
    assign();

  }, [loadGraph, props.nodes, props.edges, assign]);

  return null;
};

export const SigmaCircularView = (props: { nodes: GraphNode[], edges: GraphEdge[]}) => {
  const size = useResize()
  const { token } = theme.useToken()

  return (
    <SigmaContainer 
      style={{ height: size.height - 200, backgroundColor: token.colorBgLayout }}
      graph={MultiDirectedGraph}
      settings={{
        nodeProgramClasses: { 
          //@ts-ignore
          image: getNodeProgramImage.default() 
        },
        defaultNodeType: "image",
        defaultEdgeType: "arrow",
        labelDensity: 0.07,
        labelGridCellSize: 60,
        labelRenderedSizeThreshold: 15,
        labelColor: {
          color: token.colorTextBase,
        },
        defaultEdgeColor: token.colorBorder,
        nodeHoverProgramClasses: {
          
        },
        zIndex: true,
      }}
      >
      <LoadGraph nodes={props.nodes} edges={props.edges}/>
      <ControlsContainer position={"bottom-right"}>
        <ZoomControl />
        <FullScreenControl />
      </ControlsContainer>
      <ControlsContainer position={"top-right"}>
        <SearchControl style={{ width: "200px" }} />
      </ControlsContainer>
    </SigmaContainer>
  );
};
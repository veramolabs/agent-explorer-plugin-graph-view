import { useEffect, useMemo } from "react";
import Graph from "graphology";
import { LayoutForceAtlas2Control, useLayoutForceAtlas2 } from "@react-sigma/layout-forceatlas2";
import { MultiDirectedGraph } from "graphology";
import "@react-sigma/core/lib/react-sigma.min.css";
import getNodeProgramImage from "sigma/rendering/webgl/programs/node.image";
import forceAtlas2 from 'graphology-layout-forceatlas2';
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
import { customDrawHover } from "./hoverRender";


export const LoadGraph = (props: { nodes: GraphNode[], edges: GraphEdge[]}) => {
  const loadGraph = useLoadGraph();


  const graph = useMemo(() => {
    const graph = new Graph({ multi: true});

    try {
      for (const node of props.nodes || []) {
        graph.addNode(node.id, { 
          x: Math.random() * 1, 
          y: Math.random() * 1, 
          size: node.size,
          label: node.label,
          color: node.color, 
          image: node.picture
        });
      }

      for (const edge of props.edges || []) {
        graph.addEdge(edge.source, edge.target, {size: 1.5, color: edge.color});
      }
    } catch (e) {
      console.log(e)
    }
    return graph
  }, [props.nodes, props.edges]);

  const { assign } = useLayoutForceAtlas2({iterations: 250, settings: {...forceAtlas2.inferSettings(graph), gravity: 100, scalingRatio: 0.1}});


  useEffect(() => {

    loadGraph(graph);
    assign();

  }, [loadGraph, props.nodes, props.edges, assign]);

  return null;
};

export const SigmaForceView = (props: { nodes: GraphNode[], edges: GraphEdge[]}) => {
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
        edgeLabelColor: { color: token.colorPrimary},
        labelColor: {
          color: token.colorTextBase,
        },
        edgeLabelSize: 10,
        nodeHoverProgramClasses: {
                    
        },
        //@ts-ignore
        fill: token.colorPrimary,
        //@ts-ignore
        labelBackground: token.colorBgBase,
        hoverRenderer: customDrawHover,

        zIndex: true,
      }}
      >
      <LoadGraph nodes={props.nodes} edges={props.edges}/>
      <ControlsContainer position={"bottom-right"}>
        <LayoutForceAtlas2Control autoRunFor={3000}/>
        <ZoomControl />
        <FullScreenControl />
      </ControlsContainer>
      <ControlsContainer position={"top-right"}>
        <SearchControl style={{ width: "200px" }} />
      </ControlsContainer>
    </SigmaContainer>
  );
};
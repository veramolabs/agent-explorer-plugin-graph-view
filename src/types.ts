import React from 'react';
import { MenuDataItem } from '@ant-design/pro-components';

export type RouteElement = {
  path: string;
  element: React.JSX.Element;
}

export type AgentPlugin = {
  name: string;
  description: string;
  routes: RouteElement[];
  menuItems: MenuDataItem[];
  hasCss?: boolean;
}

export interface IPlugin {
  init: () => AgentPlugin;
}

export type GraphNode = {
  id: string;
  label: string;
  color: string;
  picture?: string;
}

export type GraphEdge = {
  id?: string;
  source: string;
  target: string;
  label: string;
  color: string;
}

export type IIdentifierProfile = {
  did: string
  name?: string
  picture?: string
}
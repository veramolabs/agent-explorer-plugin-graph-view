import React from 'react';

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
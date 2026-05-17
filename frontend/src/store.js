// store.js

import { create } from "zustand";
import {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  MarkerType,
} from 'reactflow';

export const useStore = create((set, get) => ({
  nodes: [
    { id: 'customInput-1', type: 'customInput', position: { x: 100, y: 200 }, data: { id: 'customInput-1', nodeType: 'customInput' } },
    { id: 'llm-1', type: 'llm', position: { x: 450, y: 200 }, data: { id: 'llm-1', nodeType: 'llm' } },
    { id: 'customOutput-1', type: 'customOutput', position: { x: 800, y: 200 }, data: { id: 'customOutput-1', nodeType: 'customOutput' } },
  ],
  edges: [
    { id: 'e-input-llm', source: 'customInput-1', sourceHandle: 'customInput-1-value', target: 'llm-1', targetHandle: 'llm-1-system', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#c4b5fd', strokeWidth: 2 }, markerEnd: { type: MarkerType.Arrow, height: '20px', width: '20px', color: '#c4b5fd' } },
    { id: 'e-llm-output', source: 'llm-1', sourceHandle: 'llm-1-response', target: 'customOutput-1', targetHandle: 'customOutput-1-value', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#c4b5fd', strokeWidth: 2 }, markerEnd: { type: MarkerType.Arrow, height: '20px', width: '20px', color: '#c4b5fd' } },
  ],
  nodeIDs: { 'customInput': 1, 'llm': 1, 'customOutput': 1 },
  getNodeID: (type) => {
    const newIDs = { ...get().nodeIDs };
    if (newIDs[type] === undefined) {
      newIDs[type] = 0;
    }
    newIDs[type] += 1;
    set({ nodeIDs: newIDs });
    return `${type}-${newIDs[type]}`;
  },
  addNode: (node) => {
    set({
      nodes: [...get().nodes, node]
    });
  },
  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection) => {
    set({
      edges: addEdge({ ...connection, type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#c4b5fd', strokeWidth: 2 }, markerEnd: { type: MarkerType.Arrow, height: '20px', width: '20px', color: '#c4b5fd' } }, get().edges),
    });
  },
  updateNodeField: (nodeId, fieldName, fieldValue) => {
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === nodeId) {
          node.data = { ...node.data, [fieldName]: fieldValue };
        }

        return node;
      }),
    });
  },
}));

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const FetchNode = ({ id }) => {
  const [method, setMethod] = useState('GET');

  return (
    <BaseNode id={id} label="Fetch API" handles={[
      { type: 'target', position: Position.Left, id: 'url', style: { top: '33%' } },
      { type: 'target', position: Position.Left, id: 'body', style: { top: '66%' } },
      { type: 'source', position: Position.Right, id: 'response' }
    ]}>
      <label className="node-label">
        Method:
        <select className="node-input" value={method} onChange={(e) => setMethod(e.target.value)}>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
      </label>
    </BaseNode>
  );
};

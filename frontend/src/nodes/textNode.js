import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  return (
    <BaseNode id={id} label="Text" handles={[{ type: 'source', position: Position.Right, id: 'output' }]}>
      <label className="node-label">
        Text:
        <input className="node-input" type="text" value={currText} onChange={(e) => setCurrText(e.target.value)} />
      </label>
    </BaseNode>
  );
};

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const MathNode = ({ id }) => {
  const [operation, setOperation] = useState('add');

  return (
    <BaseNode id={id} label="Math Operation" handles={[
      { type: 'target', position: Position.Left, id: 'val1', style: { top: '33%' } },
      { type: 'target', position: Position.Left, id: 'val2', style: { top: '66%' } },
      { type: 'source', position: Position.Right, id: 'result' }
    ]}>
      <label className="node-label">
        Operation:
        <select className="node-input" value={operation} onChange={(e) => setOperation(e.target.value)}>
          <option value="add">Add (+)</option>
          <option value="subtract">Subtract (-)</option>
          <option value="multiply">Multiply (*)</option>
          <option value="divide">Divide (/)</option>
        </select>
      </label>
    </BaseNode>
  );
};

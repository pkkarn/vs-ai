import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TransformNode = ({ id }) => {
  const [transformType, setTransformType] = useState('uppercase');

  return (
    <BaseNode id={id} label="Transform" handles={[
      { type: 'target', position: Position.Left, id: 'input' },
      { type: 'source', position: Position.Right, id: 'output' }
    ]}>
      <label className="node-label">
        Type:
        <select className="node-input" value={transformType} onChange={(e) => setTransformType(e.target.value)}>
          <option value="uppercase">Uppercase</option>
          <option value="lowercase">Lowercase</option>
          <option value="trim">Trim</option>
        </select>
      </label>
    </BaseNode>
  );
};

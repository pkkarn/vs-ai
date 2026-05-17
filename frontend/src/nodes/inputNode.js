import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  return (
    <BaseNode id={id} label="Input" handles={[{ type: 'source', position: Position.Right, id: 'value' }]}>
      <label className="node-label">
        Name:
        <input className="node-input" type="text" value={currName} onChange={(e) => setCurrName(e.target.value)} />
      </label>
      <label className="node-label">
        Type:
        <select className="node-input" value={inputType} onChange={(e) => setInputType(e.target.value)}>
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>
    </BaseNode>
  );
};

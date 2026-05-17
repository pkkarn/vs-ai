import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  return (
    <BaseNode id={id} label="Output" handles={[{ type: 'target', position: Position.Left, id: 'value' }]}>
      <label className="node-label">
        Name:
        <input className="node-input" type="text" value={currName} onChange={(e) => setCurrName(e.target.value)} />
      </label>
      <label className="node-label">
        Type:
        <select className="node-input" value={outputType} onChange={(e) => setOutputType(e.target.value)}>
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </label>
    </BaseNode>
  );
};

// conditionNode.js

import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const ConditionNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      label="Condition"
      handles={[
        { type: 'target', position: Position.Left, id: 'input' },
        { type: 'source', position: Position.Right, id: 'true', style: { top: '33%' } },
        { type: 'source', position: Position.Right, id: 'false', style: { top: '66%' } }
      ]}
    >
      <span style={{ fontSize: '12px' }}>Branches flow based on condition.</span>
    </BaseNode>
  );
};

// timerNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TimerNode = ({ id }) => {
  const [delay, setDelay] = useState(1000);

  return (
    <BaseNode
      id={id}
      label="Timer / Delay"
      handles={[
        { type: 'target', position: Position.Left, id: 'trigger' },
        { type: 'source', position: Position.Right, id: 'done' }
      ]}
    >
      <label style={{ display: 'flex', flexDirection: 'column', fontSize: '12px' }}>
        Delay (ms):
        <input type="number" value={delay} onChange={(e) => setDelay(e.target.value)} />
      </label>
    </BaseNode>
  );
};

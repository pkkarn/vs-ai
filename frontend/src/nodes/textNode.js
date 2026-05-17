import { useState, useEffect, useRef } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const [nodeWidth, setNodeWidth] = useState(280);
  const textareaRef = useRef(null);

  // Parse variables whenever text changes
  useEffect(() => {
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const matches = [...currText.matchAll(regex)];
    const vars = matches.map(m => m[1]);
    setVariables([...new Set(vars)]);
  }, [currText]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      // Reset height to auto to get the correct scrollHeight when deleting lines
      textareaRef.current.style.height = 'auto';
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${scrollHeight}px`;
      
      // Auto-adjust width based on longest line
      const lines = currText.split('\n');
      const maxLineLength = Math.max(...lines.map(l => l.length));
      const calcWidth = Math.max(280, maxLineLength * 8 + 60); // 8px per char approx + padding
      setNodeWidth(calcWidth);
    }
  }, [currText]);

  // Generate dynamic handles
  const handles = [{ type: 'source', position: Position.Right, id: 'output' }];
  variables.forEach((variable, index) => {
    handles.push({
      type: 'target',
      position: Position.Left,
      id: variable,
      style: { top: `${((index + 1) * 100) / (variables.length + 1)}%` }
    });
  });

  return (
    <BaseNode id={id} label="Text" handles={handles} style={{ width: nodeWidth }}>
      <label className="node-label">
        Text:
        <textarea 
          ref={textareaRef}
          className="node-input" 
          value={currText} 
          onChange={(e) => setCurrText(e.target.value)} 
          style={{ 
            overflow: 'hidden', 
            resize: 'none', 
            minHeight: '40px',
            lineHeight: '1.5'
          }}
        />
      </label>
    </BaseNode>
  );
};

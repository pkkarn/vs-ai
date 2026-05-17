// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
    return (
        <div style={{ 
            padding: '15px 20px', 
            background: 'var(--glass-bg)', 
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid var(--glass-border)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            position: 'relative',
            zIndex: 10
        }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', alignItems: 'center' }}>
                <span style={{ fontWeight: 600, color: 'var(--accent-purple)', marginRight: '10px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Components</span>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='math' label='Math' />
                <DraggableNode type='timer' label='Timer' />
                <DraggableNode type='fetch' label='Fetch API' />
                <DraggableNode type='condition' label='Condition' />
                <DraggableNode type='transform' label='Transform' />
            </div>
        </div>
    );
};

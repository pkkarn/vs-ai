import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
    return (
        <div style={{
            padding: '15px 30px',
            background: 'transparent',
            position: 'relative',
            zIndex: 10
        }}>
            <div style={{ fontSize: '20px', fontWeight: '600', marginBottom: '20px' }}>
                Build Pipeline
            </div>
            <div style={{ display: 'flex', gap: '20px', color: '#c4b5fd', fontSize: '13px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '15px', marginBottom: '20px' }}>
                <span style={{ color: '#fff', cursor: 'pointer' }}>All</span>
                <span style={{ cursor: 'pointer' }}>LLMs</span>
                <span style={{ cursor: 'pointer' }}>Multimodal</span>
                <span style={{ cursor: 'pointer' }}>Data</span>
                <span style={{ cursor: 'pointer' }}>VectorDB</span>
                <span style={{ cursor: 'pointer' }}>Logic</span>
                <span style={{ cursor: 'pointer' }}>Chat</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', alignItems: 'center' }}>
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

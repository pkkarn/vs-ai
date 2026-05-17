export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className={type}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        style={{ 
          cursor: 'grab', 
          minWidth: '80px', 
          height: '32px',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          borderRadius: '6px',
          background: 'var(--node-header)',
          border: '1px solid rgba(255,255,255,0.1)',
          padding: '0 12px',
          transition: 'all 0.2s ease',
        }} 
        draggable
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--node-bg)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'var(--node-header)';
        }}
      >
          <span style={{ color: '#fff', fontSize: '12px' }}>{label}</span>
      </div>
    );
  };
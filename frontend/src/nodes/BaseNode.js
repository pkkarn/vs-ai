import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, label, children, handles = [] }) => {
  return (
    <div style={{
      width: 280,
      background: 'var(--node-bg)',
      border: '1px solid var(--glass-border)',
      boxShadow: 'var(--node-shadow)',
      borderRadius: '10px',
      color: 'var(--text-primary)',
      overflow: 'hidden'
    }}>
      {handles.map((h, i) => (
        <Handle
          key={i}
          type={h.type}
          position={h.position}
          id={`${id}-${h.id}`}
          style={{ ...h.style, background: 'var(--accent-purple)', width: '10px', height: '10px', border: '2px solid #20084a', zIndex: 10 }}
        />
      ))}
      <div style={{
        background: 'var(--node-header)',
        padding: '12px 16px',
        fontWeight: '600',
        fontSize: '14px',
        color: 'var(--text-primary)',
      }}>
        <span>{label}</span>
      </div>
      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {children}
      </div>
    </div>
  );
};

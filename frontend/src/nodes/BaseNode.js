// BaseNode.js

import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, label, children, handles = [] }) => {
  return (
    <div style={{ 
      width: 260, 
      minHeight: 80, 
      background: 'var(--node-bg)',
      backdropFilter: 'blur(16px)',
      border: '1px solid var(--glass-border)',
      boxShadow: 'var(--node-shadow)',
      borderRadius: '12px',
      padding: '16px',
      color: 'var(--text-primary)',
      transition: 'box-shadow 0.2s ease, transform 0.2s ease',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(139, 92, 246, 0.25)';
      e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.4)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = 'var(--node-shadow)';
      e.currentTarget.style.borderColor = 'var(--glass-border)';
    }}
    >
      {handles.map((h, i) => (
        <Handle
          key={i}
          type={h.type}
          position={h.position}
          id={`${id}-${h.id}`}
          style={{ ...h.style, background: 'var(--accent-purple)', width: '12px', height: '12px', border: '2px solid var(--bg-secondary)', zIndex: 10 }}
        />
      ))}
      <div style={{ 
        fontWeight: '600', 
        fontSize: '14px',
        color: 'var(--text-primary)',
        borderBottom: '1px solid var(--glass-border)', 
        paddingBottom: '10px', 
        marginBottom: '12px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
      }}>
        <span>{label}</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {children}
      </div>
    </div>
  );
};

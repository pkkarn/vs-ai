// submit.js

export const SubmitButton = () => {
    return (
        <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 100 }}>
            <button 
                type="submit"
                style={{
                    background: 'linear-gradient(135deg, var(--accent-purple), var(--accent-blue))',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '30px',
                    padding: '14px 32px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(139, 92, 246, 0.5)',
                    transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(139, 92, 246, 0.7)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(139, 92, 246, 0.5)';
                }}
            >
                Submit Pipeline
            </button>
        </div>
    );
}

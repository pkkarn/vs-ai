// submit.js
import { useStore } from './store';
import { shallow } from 'zustand/shallow';

export const SubmitButton = () => {
    const { nodes, edges } = useStore((state) => ({
        nodes: state.nodes,
        edges: state.edges
    }), shallow);

    const handleSubmit = async () => {
        try {
            const formData = new FormData();
            formData.append('pipeline', JSON.stringify({ nodes, edges }));

            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const data = await response.json();
                alert(`Pipeline Analysis:\n\nNumber of Nodes: ${data.num_nodes}\nNumber of Edges: ${data.num_edges}\nIs a valid DAG: ${data.is_dag}`);
            } else {
                alert('Error submitting pipeline. Ensure backend is running on port 8000.');
            }
        } catch (error) {
            console.error(error);
            alert('Failed to connect to the backend. Is it running?');
        }
    };

    return (
        <div style={{ position: 'fixed', top: '20px', right: '30px', zIndex: 100 }}>
            <button
                type="submit"
                onClick={handleSubmit}
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

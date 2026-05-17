from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: str = Form(...)):
    try:
        data = json.loads(pipeline)
        nodes = data.get('nodes', [])
        edges = data.get('edges', [])
        
        num_nodes = len(nodes)
        num_edges = len(edges)
        
        # Kahn's Algorithm for DAG detection
        in_degree = {node['id']: 0 for node in nodes}
        adj_list = {node['id']: [] for node in nodes}
        
        # Build adjacency list and in-degrees
        for edge in edges:
            source = edge.get('source')
            target = edge.get('target')
            
            # Prevent KeyErrors if edge connects to a node not strictly in the list
            if source not in adj_list:
                adj_list[source] = []
            if target not in in_degree:
                in_degree[target] = 0
                
            adj_list[source].append(target)
            in_degree[target] += 1
                
        # Queue for nodes with 0 in-degree
        queue = [node_id for node_id, degree in in_degree.items() if degree == 0]
        visited_count = 0
        
        while queue:
            current = queue.pop(0)
            visited_count += 1
            
            for neighbor in adj_list.get(current, []):
                in_degree[neighbor] -= 1
                if in_degree[neighbor] == 0:
                    queue.append(neighbor)
                    
        is_dag = (visited_count == len(in_degree))
        
        return {
            'num_nodes': num_nodes,
            'num_edges': num_edges,
            'is_dag': is_dag
        }
    except Exception as e:
        return {'error': str(e)}

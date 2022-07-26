const API_URL = "http://localhost:8080";

export default function sendTasks({tasks, id}) {
    fetch(`${API_URL}/api/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tasks)
    });
}
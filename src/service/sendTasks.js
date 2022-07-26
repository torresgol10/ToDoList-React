import {API_URL} from './settings';

export default function sendTasks({tasks, id}) {
    fetch(`${API_URL}/api/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tasks)
    });
}
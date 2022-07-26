import {API_URL} from './settings';

export default function getTaskById(id) {
    return fetch(`${API_URL}/api/${id}`)
        .then(response => {
            if (response.status !== 200) return [];
            return response.json()
        })
}
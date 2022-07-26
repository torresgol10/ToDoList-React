const API_URL = "http://localhost:8080";

export default function getTaskById(id) {
    return fetch(`${API_URL}/api/${id}`)
        .then(response => {
            if (response.status !== 200) return [];
            return response.json()
        })
}
export function fetchData(endpoint) {
    return fetch(`http://localhost:3001/api/v1/reservations/${endpoint}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to fetch ${endpoint}`)
        }
        return response.json()
    })
    .catch(error => {
        console.log(`Error fetching ${endpoint}:`, error);
        throw error; 
    });
}

export function postData(endpoint, content) {
    return fetch(`http://localhost:3001/api/v1/reservations/${endpoint}`, {
        method: "POST",
		headers: {"Content-Type": "application/json"},
        body: JSON.stringify(content)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to post ${endpoint}`)
        }
        return response.json()
    })
    .catch(error => console.log(`Error posting ${endpoint}:`, error))
}


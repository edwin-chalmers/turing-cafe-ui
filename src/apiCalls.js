function fetchData(endpoint) {
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

export {fetchData}
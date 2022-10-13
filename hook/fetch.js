const create = data => {
	fetch('http://localhost:5000/api/user', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
		.then(response => response.json())
		.then(data => {
			console.log('Success:', data)
		})
		.catch(error => {
			console.error('Error:', error)
		})
}

export { create }

async function postData(url = '', data = {}) {
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		referrerPolicy: 'no-referrer',
		body: JSON.stringify(data),
	});
	return response.json();
}

export { postData };

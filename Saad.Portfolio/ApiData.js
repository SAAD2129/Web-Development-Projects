const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'be487ed4f3msha494da9de2dd7b5p1aac4ajsn02f6a00d3bed',
		'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
	},
};

fetch('https://shazam.p.rapidapi.com/search?term=kiss%20the%20rain&locale=en-US&offset=0&limit=5', options)
	.then((response) => response.json())
	.then((response) => console.log(response))
	.catch((err) => console.error(err));

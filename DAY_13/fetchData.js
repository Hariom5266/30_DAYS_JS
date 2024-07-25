// fetchData.js
const axios = require('axios');

axios.get('https://api.github.com/users/octocat')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

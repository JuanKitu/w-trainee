const axios = require('axios');

const weet = {};
weet.get = axios.get('https://geek-jokes.sameerkumar.website/api?format=json');

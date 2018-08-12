let bodyParser = require('body-parser');
let express = require('express');

let getLanguageController = require('./controllers/getLanguage');
let getLanguagesController = require('./controllers/getLanguages');

let app = express();

// This makes it easier to handle posted JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(3003, () => console.log('turtle-auth listening on port 3003!'));

app.set('etag', false);

app.get('/api/languages', getLanguagesController);
app.get('/api/languages/:language', getLanguageController);
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const db = require('./models');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const hbs = exphbs.create();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', (req, res) => res.send('Hello World!'));

db.sequelize.authenicate().then(() => {



app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
})
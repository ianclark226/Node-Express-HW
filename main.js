const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const apiRouter = require('./routes/apiRoutes');
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

app.use('/api', apiRouter);
app.get('/', async(req, res) => {
    const burgers = await db.Burger.findAll();
    res.render('home', {burgers: burgers});
});

db.sequelize.sync().then(() => {

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
})
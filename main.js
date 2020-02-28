const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const apiRouter = require('./routes/apiRoutes');
 const Burger = require('./models/burger');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const hbs = exphbs.create();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use('/api', apiRouter);
app.get('/', async(req, res) => {
    // const burgers = await db.Burger.findAll({
    //     raw: true
    // });
    const burgers = await Burger.findAll();
    const burgersData = burgers.map(burger => {
        return {
            "id": burger.dataValues.id,
            "burger_name": burger.dataValues.burger_name,
            "isDevoured": burger.dataValues.isDevoured
        }
    });
    console.log(burgersData);
    res.render('home', {burgers: burgersData});
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
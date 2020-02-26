const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const apiRouter = require('./routes/apiRoutes');
 const db = require('./models');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const hbs = exphbs.create();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//app.use(express.static('public'));

app.use('/api', apiRouter);
app.get('/', async(req, res) => {
    // const burgers = await db.Burger.findAll({
    //     raw: true
    // });
    const burgers = await db.burger.findAll();
    res.render('home', {burgers});
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`));

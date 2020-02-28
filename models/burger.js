const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js")

const Burger = sequelize.define('Burger', {
    burger_name: Sequelize.STRING,
    isDevoured: Sequelize.BOOLEAN
});
Burger.sync();
module.exports = Burger;

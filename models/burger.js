'use strict';
module.exports = (sequelize, DataType) => {
    const Burger = sequelize.define('burger', {
        burger_name: DataType.STRING,
        isDevoured: DataType.BOOLEAN
    }, {});

    Burger.associate = function(models) {
        
    }
    return Burger;
};

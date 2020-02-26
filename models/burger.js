'use strict';
module.exports = (sequelize, DataTypes) => {
    const Burger = sequelize.define('burger', {
        burger_name: DataTypes.STRING,
        isDevoured: DataTypes.BOOLEAN
    }, {});

    Burger.associate = function(models) {
        
    }
    return Burger;
};

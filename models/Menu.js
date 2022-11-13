const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Menu extends Model {}

Menu.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        menuTitle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        appetizer_name: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        appetizer_description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        appetizer_picture: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        main_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        main_description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        main_picture: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        drink_name: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        drink_description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        drink_picture: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        dessert_name: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        dessert_description: {
            type: DataTypes.TEXT,
            allowNull: false 
        },
        dessert_picture: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        event_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'event',
                key: 'id' 
            }
        }
    }, 
    {
        sequelize,
        timestamp: false,
        freezeTableName: true,
        underscored: true, // turning camel case into underscore in the database
        modelName: 'menu' 
    }
);


module.exports = Menu;
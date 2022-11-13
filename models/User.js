const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

// importing bcrypt package to protect the password
const bcrypt = require('bcrypt');

class User extends Model {
    // password validator for logging in - comparing the password saved in db(this.password) against the password provided by user(loginPassword)
    checkPassword(loginPassword) {
        return bcrypt.compareSync(loginPassword, this.password);
    }
}

// user table will have the following columns: id, first_name, last_name, username, email, password
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true 
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true  
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {isEmail: true} 
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [5] }
        }
    },
    {
        hooks: {
            // setting up the hooks before creating a user and before updating user so the plain password won't be visible even during testing
            async beforeCreate(newUser) {
                newUser.password = await bcrypt.hash(newUser.password, 10);
                return newUser;
            },

            async beforeUpdate(updatedUser) {
                updatedUser.password = await bcrypt.hash(updatedUser.password, 10);
                return updatedUser;
            }
        },

        sequelize,
        timestamp: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user' 
    }
);


module.exports = User;


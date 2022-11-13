const sequelize = require('../config/connection');
const seedMenu = require('./menu-seeds');
const seedEvent = require('./event-seeds');

const seedData = async() => {
    await sequelize.sync({force: true});
    
    await seedEvent();
    await seedMenu();
    process.exit(0);
}

seedData();
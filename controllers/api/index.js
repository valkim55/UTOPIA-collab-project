// this file serves as a collector of all API routes 
const router = require('express').Router();
const userRoutes = require('./user-routes');
const eventRoutes = require('./event-routes');
const menuRoutes = require('./menu-routes');

router.use('/menu', menuRoutes);
router.use('/users', userRoutes);
router.use('/events', eventRoutes);

module.exports = router;
// this file file collects the packaged group of model-specific API endpoints and adds the prefix '/api'
// also, if user makes a request to an endpoint that doesn't exist, the correct error code (404) will pop up 
const router = require('express').Router();
const apiRoutes = require('./api/');

// homepage route
const homepageRoutes = require('./home-routes.js');
router.use('/', homepageRoutes);


router.use('/api', apiRoutes);


router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;
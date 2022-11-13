const router = require('express').Router();
const {Menu, Event, User} = require('../../models');

// GET all dishes info
router.get('/', (req, res) => {
    Menu.findAll({
        attributes: ['id', 'menuTitle', 'appetizer_name', 'appetizer_description', 'main_name', 'main_description', 'drink_name', 'drink_description', 'dessert_name', 'dessert_description'],
        include: [
            {
                model: Event,
                attributes: ['event_title', 'event_description', 'event_location', 'created_at']
            }
        ]
    }).then(dbMenuData => {
        if(!dbMenuData) {
            return res.status(400).json({message: 'no menu info found'});
        }
        //res.json(dbMenuData);
        const allMenuInfo = dbMenuData.map(menu => menu.get({plain: true}));
        res.render('single-event', {allMenuInfo});
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


// GET a single menu for a single event
router.get('/:id', (req, res) => {
    Menu.findOne({
        where: {id: req.params.id},
        include: [
            {
                model: Event,
                attributes: ['event_title', 'event_description', 'event_location', 'Created_at']
            }
        ]
    }).then(dbMenuData => {
        if(!dbMenuData) {
            return res.status(400).json({message: 'no items found with this id'});
        }
        //res.json(dbMenuData); // - for testing
        const menuInfo = dbMenuData.get({plain: true});
        res.render('single-event', {menuInfo}); // - access this from handlebars
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// since the menu items will be seeded into the 'seeds' file we don't need to have post/update/delete routes

module.exports = router;
const sequelize = require('../config/connection');
const {User, Event, Menu} = require('../models');


const router = require('express').Router();

// making all events info accessible on HOMEPAGE
router.get('/', (req, res) => {
    console.log(req.session);
    Event.findAll({
        attributes: [ 'id', 'event_title', 'event_description', 'event_location', 'event_date', 'event_picture' ]
    }).then(allEvents => {
        const events = allEvents.map(event => event.get({ plain: true }));
        res.render('homepage', {events});
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get a single event by id
router.get('/events/:id', (req, res) => {
    Event.findOne({
        where: {id: req.params.id},
        attributes: [ 'id', 'event_title', 'event_description', 'event_location', 'event_date', 'event_picture' ],
        include: [
            {
                association: 'attendants',
                attributes: ['first_name', 'last_name', 'username']
            }, 
            {
                model: Menu,
                attributes: ['menuTitle', 'appetizer_name', 'appetizer_description', 'appetizer_picture', 'main_name', 'main_description', 'main_picture', 'drink_name', 'drink_description', 'drink_picture', 'dessert_name', 'dessert_description', 'dessert_picture']
            }
        ]
    }).then(allEvents => {
        if(!allEvents) {
            res.status(400).json({message: 'no event found with this id'});
            return;
        }
        const event = allEvents.get({plain: true});
        res.render('single-event', {event});
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// access login/signup page from the homepage
router.get('/login', (req, res) => {
    //check for a session and redirect to the homepage once the user is logged in
    if(req.session.loggedIn) {
        res.redirect('/');
        return
    }
    res.render('login')
})


module.exports = router;
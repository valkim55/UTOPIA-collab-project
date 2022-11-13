const router = require('express').Router();
const {User, Event} = require('../../models');

// ===== GET all users info -> /api/users - FOR SERVER-SIDE TESTING
router.get('/', (req, res) => {
    // SELECT * FROM users table
    User.findAll({
        attributes: {exclude: ['password']}
    }).then(dbUserData => {
        return res.json(dbUserData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// ===== GET a single user info by ID -> /api/users/id - FOR USER PROFILE
router.get('/:id', (req, res) => {
    // SELECT * FROM users WHERE id = ?
    User.findOne({
        attributes: {exclude: ['password']},
        where: {id: req.params.id},
        include: [
            {
                model: Event,
                attributes: ['event_title']
            }
        ] 
    }).then(dbUserData => {
        if(!dbUserData) {
            res.status(400).json({message: 'No user found with specified ID. Please try again'});
            return;
        }
        const userInfo = dbUserData.get({plain: true});
        res.render('user-profile', userInfo);
        // res.json(dbUserData);
    }).catch(err => {
        console.log(`cannot get user info because ${err}`);
        res.status(500).json(err);
    });
});

// ===== POST a new user -> /api/users
router.post('/', (req, res) => {
    // INSERT INTO users (first_name, last_name, username, email, password) VALUES ()
    User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password 
    }).then(dbUserData => 
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.email = dbUserData.email;
            req.session.loggedIn = true;
            res.json(dbUserData);
            console.log('user created');
       })).catch(err => {
        console.log(`cannot get user info because ${err}`);
        res.status(500).json(err);
    })
})

// ===== LOGIN route
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            username: req.body.username,
            email: req.body.email 
        }
    }).then(dbUserData => {
        if(!dbUserData) {
            res.status(400).json({message: 'User not found with specified username/email'});
            return;
        }
        const validPw = dbUserData.checkPassword(req.body.password);
        if(!validPw) {
            res.status(400).json({message: 'Wrong password! Please try again!'});
            return;
        }
        req.session.save(() => {
            req.session.user_id = dbUserData.id,
            req.session.username = dbUserData.username,
            req.session.loggedIn = true;        
        });
        return res.json({ user: dbUserData, message: 'Login successful!' });
    });
});

// ===== LOGOUT = destroy the current session
router.post('/logout', (req, res) => {
    if(req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
            res.json({message: 'logged out'});

        });
    } else {
        res.status(404).end();
    }
});

// ===== PUT /api/users - so users can update their info 
router.put('/:id', (req, res) => {
    // UPDATE users SET first_name = '', last_name = '', username = '', email = '', password = '' WHERE id = ?
    User.update(req.body, {
        individualHooks: true, 
        where: {id: req.params.id} 
    }).then(dbUserData => {
        if(!dbUserData) {
            res.status(400).json({message: 'No user found with specified ID. Please try again'});
            return;
        }
        res.render('user-profile')
        res.json(dbUserData);
    }).catch(err => {
        console.log(`cannot get user info because ${err}`);
        res.status(500).json(err);
    })
})

// ===== DELETE /api/users - for future dev. when the profile page is ready
router.delete('/:id', (req, res) => {
    // DELETE FROM users WHERE id=?
    User.destroy({
        where: {id: req.params.id} 
    }).then(dbUserData => {
        if(!dbUserData) {
            res.status(400).json({message: 'No user found with specified ID. Please try again'});
            return;
        }
        res.json(dbUserData);
    }).catch(err => {
        console.log(`cannot get user info because ${err}`);
        res.status(500).json(err);
    })
})


module.exports = router;
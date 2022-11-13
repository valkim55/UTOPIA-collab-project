const express = require('express');
const controllers = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');

// import sessions library
const session = require('express-session');
const app = express();
const SequelizeStore = require('connect-session-sequelize')(session.Store);


//middleware for front end
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded( {extended: true} ));

// session middleware
const sess = {
    secret: 'secretMessage',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({db:sequelize})
};

app.use(session(sess));

// turn on controllers
app.use(controllers);

const exhbs = require('express-handlebars');
const hbs = exhbs.create({});

//handlebars middleware
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


//connect server to the database
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('now listening on the port'));
});
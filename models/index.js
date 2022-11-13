// this file is importing the models and exporting them as Object's property
// connection and associations between tables will go here
const User = require('./User');
const Event = require('./Event');
const Menu = require('./Menu');

// associations between User and Event tables
User.belongsToMany(Event, {
    through: 'eventAttendants',
    as: 'RSVPevents'  // use this string as a name when 'include' in the routes
});

Event.belongsToMany(User, {
    through: 'eventAttendants',
    as: 'attendants'
});

Menu.belongsTo(Event, {
    foreignKey: 'event_id',
    onDelete: "CASCADE"
});

Event.hasOne(Menu, {
    foreignKey: 'event_id',
    onDelete: "CASCADE"
});


module.exports = {User, Event, Menu};

module.exports = {User, Event, Menu};
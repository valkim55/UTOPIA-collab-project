const {Event} = require('../models');

const eventData = [
    {
        event_title: "Indian Escape",
        event_description: "Let us take you through the bold spices and flavors of India in this tasting experience!",
        event_location: "Utopia Restaurant, 123 Anywhere Lane",
        event_date: "2022-12-16",
        event_picture: "indian-food.jpg"
    },
    {
        event_title: "Parisian Nights",
        event_description: "Travel to an evening in France with its rich and classical flavors!",
        event_location: "Utopia Restaurant, 123 Anywhere Lane",
        event_date: "2023-01-13",
        event_picture: "french-food.jpg"
    },
    {
        event_title: "Midnight In Tokyo",
        event_description: "Find the beauty in simplicity and tradition as you take your journey through Japan!",
        event_location: "Utopia Restaurant, 123 Anywhere Lane",
        event_date: "2023-02-10",
        event_picture: "japanese-food.jpg"
    },
    {
        event_title: "Latin Explosion",
        event_description: "Dance the night away through the zesty and bold flavors of Spain!",
        event_location: "Utopia Restaurant, 123 Anywhere Lane",
        event_date: "2023-03-10",
        event_picture: "spanish-food.jpg"
    }
]

const seedEvent = () => Event.bulkCreate(eventData);
module.exports = seedEvent;
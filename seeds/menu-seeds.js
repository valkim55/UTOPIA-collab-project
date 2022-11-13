const {Menu} = require('../models');

const menuData = [
    {
        menuTitle: "Indian cuisine tasting experience",
        appetizer_name: "Matar Kachori",
        appetizer_description: "Matar (fresh green peas) are the center of these flaky deep-fried snacks. These particular kachoris (can have many different fillings) are typically made when green peas are in season during winter and spring. The filling is lightly spiced; you don’t want to smother the taste of the green peas, just enhance it", 
        appetizer_picture: "indian1.jpeg",
        main_name: "Baingan Bharta",
        main_description: "This smoky roasted eggplant served as a main course, as part of a selection of dishes in a thali. Different versions are made in various parts of the country, but this Punjabi recipe is the most popular. The best flavor and smokiness come from roasting the eggplant on a direct flame or grill. It is not recommended to add dried spices to baingan bharta to really taste the smoky eggplant with sweetness from the onions, tang from the tomatoes, a little heat from the green chiles and a burst of freshness from the cilantro. It’s precisely this combination of flavors that makes this dish so amazing!",
        main_picture: "indian4.jpeg",
        drink_name: "Thandai",
        drink_description: "Thandai is a rich and aromatic drink primarily made with almonds, white poppy seeds and melon seeds; flavored with cardamom, fennel, pepper, saffron and rose petals. Thandai is traditionally made with cow's milk, but it’s equally delectable with almond milk. Not bad with a shot of vodka either!",
        drink_picture: "indian3.jpeg",
        dessert_name: "Gulab Jamun",
        dessert_description: "Decadent, sweet and delicious, a Gulab Jamun is a fried dough ball soaked in an aromatic simple syrup flavored with essence of rose (gulab) and infused with spices such as cardamom and saffron. It is then garnished with roasted nuts. Unconventional as it may seem, the addition of alcohol in the syrup makes for a slightly less sweet syrup that is so delicious that you can't stop yourself from licking the spoon!",
        dessert_picture: "indian2.jpeg",
        event_id: 1
    },
    {
        menuTitle: "French cuisine tasting experience",
        appetizer_name: "Tarte au Camembert w/Raspberry Preserves",
        appetizer_description: "A small bite filled with creamy Camembert cheese paired with the tartness of homemade raspberry preserves enveloped in the flakiness of Parisian pastry dough!", 
        appetizer_picture: "french1.jpg",
        main_name: "Classic Duck a l'Orange",
        main_description: "A fork tender pan-seared golden duck breast with a carefully poured spiced Valencia orange sauce that will have you saying 'Oui, oui!' at the end of the night!",
        main_picture: "french3.jpg",
        drink_name: "Veuve Clicquot Brut Yellow Label",
        drink_description: "Feel as though you are among the bourgeoise, letting delicate bubbles tickle your nose as you sip on a cold glass of this famous champange!",
        drink_picture: "french2.jpg",
        dessert_name: "Mille Feuille with Dark Chocolate and Pistachio Cream",
        dessert_description: "Layers of flaky pastry dough and velvety pistachio chantilly cream with chopped pistachios carefully folded in, drizzled with a rich dark chocolate for a ending that is très magnifique! ",
        dessert_picture: "french4.jpg",
        event_id: 2
    },
    {
        menuTitle: "Japanese cuisine tasting experience",
        appetizer_name: "Scallion Pork Potstickers w/ Black Garlic Dipping Sauce",
        appetizer_description: "Start the night with crispy golden brown pan fried potstickers filled with pork and scallion that melts on the pallette and paired with a fragrant black garlic dipping sauce", 
        appetizer_picture: "japanese1.png",
        main_name: "Alaskan Salmon Sushi",
        main_description: "Fresh cut Alaskan salmon resting on top a bed of sticky sushi rice that has beeen lightly kissed with rice wine vinegar, sea salt, and nori.",
        main_picture: "japanese2.png",
        drink_name: "Moonstones Cold Sake",
        drink_description: "One of our house specials, this delicate rice wine tickles the senses with the whispers of the essence of Asian pear!",
        drink_picture: "japanese3.png",
        dessert_name: "Tahitian Vanilla Bean Mochi w/ Red Bean Filling",
        dessert_description: "End the night watching our artisan creating a handmade Mochi dough before your eyes encasing a sweetened red bean filling!",
        dessert_picture: "japanese4.png",
        event_id: 3
    },
    {
        menuTitle: "Spanish cuisine tasting experience",
        appetizer_name: "Patatas Bravas w/ Spicy Cherry Tomato Salsa",
        appetizer_description: "White potatoes cut into wide cubes, fried to perfection, and served with a warm and spicy sauce made with chopped tomatoes that dance along your tongue with bursts of flavor!", 
        appetizer_picture: "spanish1.png",
        main_name: "Seafood Paella",
        main_description: "A classic Spanish dish made with rice, saffron, and high quality seafood treasures found in the depths of the Spanish seas - all served in one pan to lovingly share!",
        main_picture: "spanish2.png",
        drink_name: "Gin & Tonic w/ Blood Orange",
        drink_description: "The perfect refreshing sipper filled with aromatics, gin, and high quality tonic, sunkissed with the tang and playfulness of blood oranges!",
        drink_picture: "spanish3.png",
        dessert_name: "Tres Leches w/ Spiced Whipped Cream",
        dessert_description: "A delicious sponge cake soaked in three kinds of rich, creamy, milks, and topped with sweet whipped cream spiced with cinnamon, nutmeg, and clove for the perfect ending on this Spanish adventure!",
        dessert_picture: "spanish4.png",
        event_id: 4
    }
]

const seedMenu = () => Menu.bulkCreate(menuData);
module.exports = seedMenu;
"use strict";
//------------------------------QUESTION 44----------------------------
function make_sandwich(...items) {
    console.log(`Making a sandwich with: ${items.join(', ')}.`);
}
make_sandwich("mayo", "cheese");
make_sandwich("onion", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");

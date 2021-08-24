// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Lee Ta" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = 0   // [lta add:08/24/2021] Total of all item

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// [lta add:08/24/2021] GINGER BREAD SECTION
//
// Event listener for clicks on the "+" button for Ginger Bread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    //console.log('Ginger bread + button was clicked!')

    // TODO: [lta:- DONE 8/24/2021] Write the code to be run when the "+" button for "Ginger Bread" is clicked
    // [lta:- add count to gb and total]
    gb += 1;
    total += 1;

    // [lta:- display to ui]
    document.getElementById('qty-gb').textContent = gb;
    document.getElementById('qty-total').textContent = total;

})

document.getElementById('minus-gb').addEventListener('click', function() {
    //[lta:- check to make sure that gb is not subtract to less than 0]
    if (gb > 0) {
        gb -= 1;
        total -=1;
    } else {
        gb = 0;
        total = total;
    }

    // [lta:- display to ui]
    document.getElementById('qty-gb').textContent = gb
    document.getElementById('qty-total').textContent = total
})

// TODO: [lta:- DONE 8/24/2021] Hook up event listeners for the rest of the buttons

// [lta add:08/24/2021] CHOCOLATE CHIP SECTION
//
// Event listener for clicks on the "+" button for Chocolate Chip cookies
document.getElementById('add-cc').addEventListener('click', function() {
    // [lta:- add count to gb and total]
    cc += 1;
    total += 1;

    // [lta:- display to ui]
    document.getElementById('qty-cc').textContent = cc;
    document.getElementById('qty-total').textContent = total;
})

document.getElementById('minus-cc').addEventListener('click', function() {
    //[lta:- check to make sure that gb is not subtract to less than 0]
    if (cc > 0) {
        cc -= 1;
        total -=1;
    } else {
        cc = 0;
        total = total;
    }

    // [lta:- display to ui]
    document.getElementById('qty-cc').textContent = cc
    document.getElementById('qty-total').textContent = total
})

// [lta add:08/24/2021] SUGAR SPRINKLE SECTION
//
// Event listener for clicks on the "+" button for Sugar Sprinkle cookies
document.getElementById('add-sugar').addEventListener('click', function() {
    // [lta:- add count to gb and total]
    sugar += 1;
    total += 1;

    // [lta:- display to ui]
    document.getElementById('qty-sugar').textContent = sugar;
    document.getElementById('qty-total').textContent = total;
})

document.getElementById('minus-sugar').addEventListener('click', function() {
    //[lta:- check to make sure that gb is not subtract to less than 0]
    if (sugar > 0) {
        sugar -= 1;
        total -=1;
    } else {
        sugar = 0;
        total = total;
    }
    
    // [lta:- display to ui]
    document.getElementById('qty-sugar').textContent = sugar;
    document.getElementById('qty-total').textContent = total;
})
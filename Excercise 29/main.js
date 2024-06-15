/* Question #29; Favorite Fruit:
               Make a array of your favorite fruits, and then write a series of independent if statements
               that check for certain fruits in your array.
         • Make a array of your three favorite fruits and call it favorite_fruits.
         • Write five if statements. Each should check whether a certain kind of fruit is in your array.
          If the fruit is in your array, the if block should print a statement, such as You really like bananas!
          
*/ let favorite_fruit = ["Apple", "Melon", "Banana", "Mango", "Grapes"];
function favorite_fruits() {
    let favorite_fruit = ["Apple", "Mango", "Grapes"];
    console.log(favorite_fruit);
}
favorite_fruits();
if (favorite_fruit[0] === "Apple") {
    console.log("You really like Apples!\n");
}
if (favorite_fruit[1] === "Banana") {
    console.log("You really like Bananas!\n");
}
if (favorite_fruit[2] === "melon") {
    console.log("You really like melon!\n");
}
if (favorite_fruit[3] === "Mango!") {
    console.log("You really like Mango\n");
}
if (favorite_fruit[4] === "Grapes!") {
    console.log("You really like Grapes\n");
}
;
export {};

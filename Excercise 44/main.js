/*
Question #44; Sandwiches:
         Write a function that accepts a array of items a person wants on a sandwich. The function should have
         one parameter that collects as many items as the function call provides, and it should print a summary
         of the sandwich that is being ordered. Call the function three times, using a different number of
         arguments each time.
*/
function sandwich_order(...items) {
    console.log("Ordered Items\n");
    for (let index = 0; index < items.length; index++) {
        console.log(items[index]);
    }
    console.log("Enjoy The Meal!! \n");
}
sandwich_order("2X Cheese sandwich", "1X Mayo Sandwich");
sandwich_order("3X Chicken Sandwich");
sandwich_order("1X Grilled Cheese Sandwich", "1X Club Sandwich", "2X Italian Sandwich");
export {};

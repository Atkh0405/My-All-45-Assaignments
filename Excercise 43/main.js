/*
Question #43;Unchanged Magicians:
        Start with your work from Exercise 40. Call the function make_great() with a copy of the array of
        magicians’ names. Because the original array will be unchanged, return the new array and store it
        in a separate array. Call show_magicians() with each array to show that you have one array of the
        original names and one array with the Great added to each magician’s name.
*/
let magician = ["David Blaine", "Derren Brown", "Harry Houdini"];
function arrayCopy(arr) {
    return [...arr];
}
function make_great(Magicians) {
    for (let index = 0; index < Magicians.length; index++) {
        Magicians[index] = "The Great" + " " + Magicians[index];
    }
}
function show_magicians(magicians) {
    magicians.forEach((element) => {
        console.log(element);
    });
}
let copyMagicianArray = arrayCopy(magician);
make_great(copyMagicianArray);
console.log("\n\nThis is my original Array.");
show_magicians(magician);
console.log("\n\nThis is my modified copy of the Array.");
show_magicians(copyMagicianArray);
export {};

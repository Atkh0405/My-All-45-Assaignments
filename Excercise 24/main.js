/* Question #24; More Conditional Tests:
                 You don’t have to limit the number of tests you create to 10. If you want to try more
                 comparisons, write more tests. Have at least one True and one False result for each
                  of the following:
            • Tests for equality and inequality with strings

            • Tests using the lower case function

            • Numerical tests involving equality and inequality, greater than and less than, greater
             than or equal to, and less than or equal to

            • Tests using "and" and "or" operators

            • Test whether an item is in a array

            • Test whether an item is not in a array
*/
// Equality and inequality with strings.
console.log("Testing equality with strings.");
// console.log("Hassaan" == "hassaan");// false
console.log("Sarim" === "Sarim"); // True
// test using lower case function.
console.log("test using lower case function.");
console.log("Abrar".toLowerCase() == "Abrar"); // false
console.log("Abrar".toLowerCase() == "abrar"); // true
//  Numerical Tests.
console.log("equality and inequality in numericals");
// console.log(5==4); false
console.log(8 == 8); // True
// greater than and less than.
console.log("Numerical test");
console.log(8 > 4); // true
console.log(8 < 4); //false
// greater than or equal to & less than equal to.
console.log("Numerical test");
console.log(10 >= 11); // false
console.log(10 <= 12); // true
// test using "and" and "or" operators.
console.log("test using && and || operators");
console.log(true && false); // false
console.log(true || false); // true
// test whether an item is in array.
let array = ["keyboard", "mouse", "PC"];
console.log(`Is CPU in array?`, array.includes("PC")); // true
// /test whethe an item is not include in array.
console.log("is CPU not in array", array.includes("CPU")); // false
export {};

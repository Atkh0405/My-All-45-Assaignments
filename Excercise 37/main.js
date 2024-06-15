"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Qquestion #37;Large Shirts:
               Modify the make_shirt() function so that shirts are large by default with a message that reads
               I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt
               of any size with a different message.
*/
function make_shirt(size = "large", msg = "I love Typescript.") {
    console.log(`Making a ${size} T-Shirt with a massage "${msg}" printed on it.`);
}
make_shirt(); // default   message
make_shirt("medium"); // default message
make_shirt("small", "Errors lover"); // With different message

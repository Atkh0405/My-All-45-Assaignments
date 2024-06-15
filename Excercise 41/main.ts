/* 
Question #41;Magicians: 
        Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the
        name of each magician in the array.
*/

let magicianname = ["David Blaine", "Derren Brown", "Harry Houdini"];
function show_magicians(magician: string[]) {
  for (let index = 0; index < magician.length; index++) {
    console.log(magician[index]);
  }
}
show_magicians(magicianname);
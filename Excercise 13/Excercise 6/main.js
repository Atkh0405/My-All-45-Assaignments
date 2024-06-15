/* Question #6 ; Stripping Names:
Store a person's name,and include some whitespaces characters at the beginning and end of the
name. Make sure you use each  character combination,"\t" and "\n" at least once. print the name once,
so the whitespaces around the name is displayed.Then print the name after stripping the white spaces. */
let personName = "Atif Ullah Khan";
// adding whitespaces to person name.
let whitespacedpersonname = `\t${personName}\n`;
// printing whitespaced person name.
console.log(whitespacedpersonname);
// stripping whitespaces in personname. 
let strippedpersonname = whitespacedpersonname.trim();
// now printing stripped person name.
console.log(strippedpersonname);
export {};

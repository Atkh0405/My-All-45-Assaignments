/* Question#17; Shrinking Guest List: 
                You just found out that your new dinner table won’t arrive in time for the dinner,
                 and you have space for only two guests.
               • Start with your program from Exercise 16. Add a new line that prints a message 
                 saying that you can invite only two people for dinner.

               • Remove guests from your list one at a time until only two names remain in your list.
                 Each time you pop a name from your list, print a message to that person letting them 
                 know you’re sorry you can’t invite them to dinner.

               • Print a message to each of the two people still on your list, letting them know they’re 
                still invited.

               • Remove the last two names from your list, so you have an empty list. Print your list to 
                 make sure you actually have an empty list at the end of your program.
*/
// Question 16;
let guests :string[]= ["Sir Zia","Sir Hamza ","Sir Ameen Alam"];
console.log("Better News!!   I just found a bigger dinner Table.");
guests.unshift("Sir Daniyal");
guests.splice(2,0,"Sir Asharib");
guests.push("Sir Usama");

guests.forEach(guests=> {console.log (`${guests},
   You are invited for a delightful dinner gathering on  5yh of May 2024 at 
    at House:no:A39,street 10,Karachi.
        Regards "Atif"`);
});
// Question 17.
console.log("alert! I just  found that the new dinner table will not arrive in time,so I can only Invite 2 people for dinner.");
while (guests.length>2) {let removedguests=guests.pop();
  console.log(`very sorry! ${removedguests},  I cannot invite you for dinner.`);
}
guests.forEach((guests)=>{console.log(`${guests},You are still invited for dinner`)});
guests.pop();
guests.pop();
console.log(guests);
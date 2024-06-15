/* Question#16; More Guests:
                You just found a bigger dinner table, so now more space is available. Think of three
                more guests to invite to dinner.
            •   Start with your program from Exercise 15. Add a print statement to the end of your program
                informing people that you found a bigger dinner table.
            •   Add one new guest to the beginning of your array.
            •   Add one new guest to the middle of your array.
            •   Use append() to add one new guest to the end
                of your list.
            •   Print a new set of invitation messages, one for each person in your list.
 */
let guests = ["Sir Zia", "Sir Hamza", "Sir Ameen Alam"];
console.log("Better News!!   I just found a bigger dinner Table.");
guests.unshift("Sir Asharib");
guests.splice(2, 0, "Miss Hina");
guests.push("Sir Usama");
guests.forEach((guests) => {
    console.log(`${guests},
            you are invited to a delightful dinner gathering on 5th of May 2024
            at House:no:1/7,street 10,Karachi.
              Regards "Atif"`);
});
export {};

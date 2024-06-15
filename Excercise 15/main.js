/* Question#15; Changing Guest List.
                you just heard that one of your guests cannot make the dinner,so you
                need to send out a new set of invitations.You will have to think of
                someone else to invite.

            ... start with your program from exerrcise 14.Add a print statement at the
                end of your program stating the name of the guest who cannot make it.

            ... Modify your list,replacing the name of the guest who cannot make it with
                the name of the new person you are inviting.

            ... Print a second set of invitation messages,one for each person who is still
                in your list.
*/
let invited_person_list = ["Sir Zia", "Sir Daniyal", "Sir Ameen"];
invited_person_list.forEach((invited_person_list) => {
    console.log(`Dear ${invited_person_list},
       You are invited to a delightful dinner gathering on 8th of April 2024
       at House:no:1/7 ,street 10,Karachi.
         Regards"Atif"`);
});
// Guest who cannot make it
console.log(`${invited_person_list[1]} cannot make it to dinner.`);
// replacing the guest.
let cannotattend = `${invited_person_list[1]}`;
let newguest = "Sir Hamza";
invited_person_list[invited_person_list.indexOf(cannotattend)] = newguest;
// // printing new Guests list.
invited_person_list.forEach((invited_person_list) => {
    console.log(`Dear ${invited_person_list},
      you are invited to a delightful dinner gathering on 5th of May 2024
      at House:no:1/7,street 10,Karachi.
        Regards "Atif"`);
});
export {};

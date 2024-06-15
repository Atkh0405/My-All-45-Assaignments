/* Question#14; Guest List:
                If you could invite anyone,living or deceased,to dinner,who
                would you invite?Make a list that includes at least three people
                you would like to invite to dinner.Then use your list to print a 
                message to each person,inviting them to dinner.
 */
                let invited_people_list: string[] = ["Sir Zia", "Sir Daniyal", "Sir Ameen"];

                invited_people_list.forEach((invited_people_list)=> 
                {
                    console.log(`Dear ${invited_people_list}, 
                       You are invited to a delightful dinner gathering on 5th of May 2024
                 at House:no:1/7 street 10 Karachi.
                      Regards "Atif"`);
                });
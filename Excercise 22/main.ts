//Question 22:Intentional Error:
//  If you haven’t received an array index error in one of your programs yet, try to make
//  one happen. Change an index in one of your programs to produce an index error. Make
//   sure you correct the error before closing the program.

let foodMenu: string[] = ["Biryani", "Burger", "Pizza", "Chicken Karahi"];

console.log(foodMenu[4]); //Intentional Error:Arrays are zero-indexed, so index 4 is out of Array.

console.log(foodMenu[3]); // Error corrected by accessing the valid index.
// Write a for loop that will log the numbers 1 through 20.
for (let i=1; i<=20; i++) {
    //  console.log(i);
  }

// Write a for loop that will log only the even numbers in 0 through 200.
for (let i=0; i<=200; i+=2) {
    // console.log(i);
}

// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
for (let i=1; i<=20; i++) {
    // console.log("Love me, pet me! HSSSSSS!");
}
// For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
var array = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away...", "...why does the red dot always get away..."];
for (let i=1; i<=20; i++) {
    let newArray = Math.floor(Math.random()) * array.length;
    //  console.log(newArray);
}

// Fizz Buzz

// Write a javascript application that logs all numbers from 1 - 100
// If a number is divisible by 3 log "Fizz" instead of the number.
// If a number is divisible by 5 log "Buzz" instead of the number.
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

for (let i=1; i<=100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        // console.log("FizzBuzz");
    } else if(i % 3 === 0) {
        // console.log("Fizz");
    } else if(i % 5 === 0) {
        // console.log("Buzz");
    }else {
        // console.log(i);
    }
}

const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];
// Jim Clark decides that Kenny can't be named "Kenny" anymore. Remove "Kenny" from the kenny array and replace it with "Gameboy".
kenny[0] = "Gameboy";

// Jim Clark just had his birthday; change jimClark's array to reflect him being a year older. Don't just hard code 187--pretend that you didn't already know that his age is 186, and write your code to just make him a year older than whatever age he was.
jimClark[1] = 187;

// GO back later
for (let i=0; i>=jimClark[1]; i++) {
	if(!isNaN) {
	// console.log(jimClark[1]);
	jimClark[1]++;
}
}

// Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".
ryan[0] = "Robin";

// Reuben left Durham 5 years ago to come to Chicago. First, remove "Durham" from Reuben's array, and then add "Chicago". (Note: remove and then add is different from simply changing the value at that index.)
reuben.pop();
reuben[2] = "Chicago";

// Jim Haff could be literally anywhere in the world. Remove "All cities" from his array, then pick any 3 cities you like, and add them to Jim's array. If you did it in 3 lines of code that's fine, but see if you can do it in one line of code
jimHaff.pop();
jimHaff.push(['LA', 'NY', 'Hong Kong']);

// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
// Use a for loop to call .toUpperCase() on each of them and print out the result.
for (let i=0; i<=ninjaTurtles.length; i++) {
    // console.log(ninjaTurtles.toUpperCase());
}

// Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. Use that variable to add Kristyn's lost shoe to Thom's accessories array.
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  let kristynsShoe = kristynsCloset.shift();
//   console.log(kristynsCloset);
  thomsCloset[2].push(kristynsShoe);
//   console.log(thomsCloset);

// Modify your code to put together 3 separate outfits for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!
for (let i=0; i<=2; i++) {
    kristynThomOutfit = Math.floor((Math.random() * (kristynsCloset.length)));
    // console.log('Kristyn and Thoms outfits are: ' + kristynsCloset[kristynThomOutfit]);
}

// Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.
for (let i=0; i<kristynsCloset.length; i++) {
    // console.log("WHIRR: Now washing " + kristynsCloset[i] + " for each item in the array");
}

// Thom wants to do inventory on his closet. Using bracket notation, log the arrays (not the elements in the arrays) containing all of Thom's shirts, pants, and accessories.
console.log([0]);
console.log([1]);
console.log([2]);

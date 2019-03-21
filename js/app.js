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
        console.log("FizzBuzz");
    } else if(i % 3 === 0) {
        console.log("Fizz");
    } else if(i % 5 === 0) {
        console.log("Buzz");
    }else {
        // console.log(i);
    }
}


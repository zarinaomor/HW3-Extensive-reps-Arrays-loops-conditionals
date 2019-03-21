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
     console.log(newArray);
}

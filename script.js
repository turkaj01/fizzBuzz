for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");  // Multiples of both 3 and 5
    } else if (i % 3 === 0) {
        console.log("Fizz");  // Multiples of 3
    } else if (i % 5 === 0) {
        console.log("Buzz");  // Multiples of 5
    } else {
        console.log(i);  // For all other numbers
    }
}

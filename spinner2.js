let delay = 100;
let array = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   '];
let count = 0;

for (let j = 0; j < 5; j++) { //we don't need j, just need it to go through 5 times
  for (let i = 0; i < array.length; i++) {
    setTimeout(() => {
      process.stdout.write(array[i]);
    }, delay);
    delay += 200;
    count++;
    if (count === 8) {
      count = 0;
    }
  }
}
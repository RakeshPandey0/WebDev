/*
Promise is an object representing the eventual completion or failure of an asynchronous operation.

It has 3 stages:
a. Pending: still waiting for the result.
b. Fulfilled/Resolved: operation completed successfully
c. Rejected: operation failed.
*/

//basic promise example

const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Something went wrong.");
  }
});

myPromise
  .then((result) => console.log(result)) //if resolved
  .catch((error) => console.error(error)); //if rejected

//simulate async behaviour using timeout

function delayedPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolved after 2 seconds.");
    }, 2000);
  });
}

delayedPromise()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

//error handling in promises
new Promise((resolve, reject) => {
  throw new Error("Oops.");
})
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

/*
small task:

Try writing a function getNumber() that returns a promise which:
a. Resolves with a number after 1 second if the number is even.
b. Rejects if the number is odd.
*/

function getNumber(n) {
  return new Promise((resolve, reject) => {
    n % 2 === 0
      ? resolve("You provided even number. Resolved.")
      : reject("You provided odd number. Rejected.");
  });
}

getNumber(4)
  .then((msg) => console.log("Success:", msg))
  .catch((err) => console.error("Error:", err));

getNumber(5)
  .then((msg) => console.log("Success:", msg))
  .catch((err) => console.error("Error:", err));

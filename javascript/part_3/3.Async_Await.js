//Cleaner and more readable way to work with asynchronous code in JavaScript compared to .then() chains.

//async functions
//Declaring a function as async allows you to use await inside it.
//An async function always returns a promise.

async function greet() {
  return "Hello!";
}

greet().then((result) => console.log(result));

//await keyword
// can be used inside an async function
// it pauses the execution until the promise is resolved, and then returns the result.

async function example() {
  const result = await Promise.resolve("Done!");
  console.log(result);
}

example();

//Example exercise:
//Let's convert the previous promise chain into async/await

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: 1, name: "Alice" }), 1000);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Post1", "Post2", "Post3"]), 1500);
  });
}

function fetchComments(post) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Comments for ${post}`), 1000);
  });
}

async function displayUserData() {
  try {
    const user = await fetchUser();
    console.log("User:", user);

    const posts = await fetchPosts(user.id);
    console.log("Posts:", posts);

    for (const post of posts) {
      console.log("post:", post);
      const comment = await fetchComments(post);
      console.log("Comment:", comment);
    }
  } catch (err) {
    console.error(err);
  }
}

displayUserData();
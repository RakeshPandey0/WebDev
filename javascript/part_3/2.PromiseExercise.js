//You are given a fake API function that simulates delays.
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

/*
Task:
Use Promise chaining to:

1. Fetch the user.
2. Fetch their posts using the user ID.
3. Fetch comments for each post and print them.

Make sure if any step fails, an appropriate error is caught and displayed.
*/

fetchUser()
  .then((user) => {
    console.log("User:", user);
    return fetchPosts(user.id);
  })
  .then((posts) => {
    console.log("Posts:", posts);
    return Promise.all(
      posts.map((post) => {
        console.log("Post:", post);
        return fetchComments(post);
      })
    );
  })
  .then((comments) => {
    comments.forEach((comment) => {
      console.log("Comment:", comment);
    });
  })
  .catch((err) => {
    console.error("Error:", err);
  });

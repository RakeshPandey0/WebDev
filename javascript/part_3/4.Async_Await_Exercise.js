/**

You are to implement an asynchronous function loadBlogData() that:

1. Fetches a user using fetchUser().
2. Then fetches all their posts using fetchPosts(user.id).
3. Then fetches all comments for all posts in parallel.
4. Logs everything in this format:

User: {username}
Post: {post title}
Comment: {comment text}
Comment: {comment text}
...

*/

//Provided Simulated Functions

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, username: "techie_user" });
    }, 500);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 101, title: "JavaScript Basics" },
        { id: 102, title: "Understanding Promises" },
      ]);
    }, 500);
  });
}

function fetchComments(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { text: `Comment 1 on ${post.title}` },
        { text: `Comment 2 on ${post.title}` },
      ]);
    }, 500);
  });
}

/**
Write an async function loadBlogData() using await, try/catch, and Promise.all() to parallelize comment fetching. Log the output in the structure above.
*/

async function loadBlogData() {
  try {
    //fetch user
    const user = await fetchUser();
    console.log("User:", user.username);

    //fetch posts
    const posts = await fetchPosts(user.id);

    //combined the fetched post and their corresponding comments into a single object.
    const postComment = posts.map(async (post) => {
      return { post: post.title, comments: await fetchComments(post) };
    });

    //fetch the new combined object at once.
    const results = await Promise.all(postComment);

    //map to the output using forEach() method.
    results.forEach((item) => {
      console.log("Post:", item.post);
      const comments = item.comments;
      comments.forEach((comment) => {
        console.log(comment.text);
      });
    });
  } catch (err) {
    console.error("Error loading blog data", err);
  }
}

loadBlogData();

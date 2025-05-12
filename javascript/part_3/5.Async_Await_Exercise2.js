/*
Fetch a list of posts from JSONPlaceholder, then for each post, fetch its comments. Log the post title followed by its comments.

Steps to follow:
1. Fetch the first 5 posts from:
        https://jsonplaceholder.typicode.com/posts?_limit=5

2. For each post, fetch comments from:
        https://jsonplaceholder.typicode.com/posts/{postId}/comments

Combine each post with its comments and log them as:

Post: {post.title}
- {comment1.name}
- {comment2.name}
...

Task:
Write an async function called loadPostData() that does this.
*/

async function loadPostData() {
  try {
    const posts = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    const postData = await posts.json();

    const data = postData.map(async (post) => {
      const comments = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
      );
      const commentsData = await comments.json();
      return { title: post.title, comments: commentsData };
    });

    const postComments = await Promise.all(data);

    postComments.forEach((data) => {
      console.log(`Post: ${data.title}`);
      data.comments.forEach((comment) => {
        console.log(`- ${comment.name}`);
      });
    });
  } catch (err) {
    console.log("Error loading data:", err);
  }
}

loadPostData();

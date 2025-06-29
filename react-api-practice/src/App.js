import { useEffect, useState } from "react";
import "./App.css";
import { getPosts, getRandomUser } from "./api";
import PostCard from "./components/PostCard";
import UserCard from "./components/UserCard";

function App() {
  const [posts, setPosts] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch posts only once on mount
    getPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);

  const fetchRandomUser = () => {
    getRandomUser().then((user) => {
      setUser(user.results[0]);
    });
  };

  useEffect(() => {
    // Fetch initial user
    fetchRandomUser();
  }, []);

  return (
    <div className="App">
      {user ? (
        <>
          <UserCard data={user} />
          <button onClick={fetchRandomUser}>Refresh</button>
        </>
      ) : (
        <p>Loading user...</p>
      )}

      {posts ? (
        posts.map((post) => <PostCard post={post} key={post.id} />)
      ) : (
        <p>Loading posts...</p>
      )}
    </div>
  );
}

export default App;

import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );



  return (
    <div>
      {posts.map((posts) => (
        <Post
          key={posts.id}
          id={posts.id}
          username={posts.data().username}
          userImg={posts.data().profileImg}
          img={posts.data().image}
          caption={posts.data().caption}
        />
      ))}
    </div>
  );
}

export default Posts;

import { useState, useEffect } from "react";

function History() {
  const API_URL =
    "https://6246de2e8cb09b0702be5441--teal-haupia-29b48f.netlify.app/.netlify/functions/api";
  const [posts, setPosts] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((res) => {
        setPosts([...JSON.parse(JSON.stringify(res))]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="">
      {posts
        ? posts.map((item) => {
            return <div key={item._id} className="">{item.recipient}</div>;
          })
        : "Loading..."}
    </div>
  );
}

export default History;

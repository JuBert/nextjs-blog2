import React, { useEffect, useState } from "react";
import utilStyles from "../styles/utils.module.css"

const axios = require("axios");

export default function Apiposts() {
  const [posts, setPosts] = useState([]);
//   const getRandomUsers = () => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => {
//         console.log(response);
//         setPosts(response.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            console.log(response);
            setPosts(response.data);
        })
        .catch((err) => {
            console.log(err)
        })
    })
  

  return (
    <div>
      <ul className={utilStyles.list}>
        {posts.map((post) => (
          <li className={utilStyles.listItem} key={post.id}>
            {post.title}<br />
            {post.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

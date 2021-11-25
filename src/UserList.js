import React, { useState, useEffect } from "react";
import axios from "axios";

function UserList() {
  const [listOfUSer, setlistOfUSer] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        setlistOfUSer(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <ul>
        {listOfUSer.map((post) => (
          <li key={post.id}>{post.username}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;

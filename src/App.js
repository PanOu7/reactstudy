import React, { useState } from "react";
//hook
const App = () => {
  // let name="Hi React Developer";

  let [name, setName] = useState("Hi React Developer"); //[getter,setterFunction]

  let [posts, setPosts] = useState([
    {
      id: 1,
      title: "First Post",
    },
    {
      id: 2,
      title: "Second Post",
    },
    {
      id: 3,
      title: "Third Post",
    },
  ]);

  let changeName = () => {
    // name="Nice to meet You";
    setName("Nice to meet You"); //100mis
    console.log(name); //
  };

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changeName}>change</button>

      <h1>Posts</h1>
      <ul>
      {posts.map((post)=>(
        <li key={post.id}>{post.title}</li>//loop use key because where update virtual DOM
      ))}
        
      </ul>
    </div>
  );
};

export default App;

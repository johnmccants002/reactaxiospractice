import axios from "axios"
import React from "react"

const baseURL = "https://jsonplaceholder.typicode.com/posts";
function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data)
    });
  }, []);

  function createPost() {
    axios
      .post(baseURL, {
        title: "Hello World",
        body: "This is a new post"
      })
      .then((response) => {
        console.log("Response: ", response.data)
        setPost(response.data)
      })
  }

  if (!post) return null;
  return (
    <div className="App">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>Create Post</button>
    </div>
  );
}

export default App;

import axios from "axios"
import React from "react"
import {useAxios} from "use-axios-client";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
const baseURL = "https://jsonplaceholder.typicode.com/posts";
function OriginalPage() {
  const [post, setPost] = React.useState(null);
  const [error, setError] = React.useState(null);
  // const {data, error, loading} = useAxios({
  //   url: baseURL + "/1"
  // });
  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data)
    }).catch(error => {
      setError(error)
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
      }).catch(error => {
        setError(error);
      })
  }

  function updatePost() {
    axios
      .put(`${baseURL}/1`, {
        title: "Hello World!",
        body: "This is an updated post"
      })
      .then((response) => {
        setPost(response.data)
      }).catch(error => {
        setError(error.message);
      })
  }

  function deletePost() {
    axios
      .delete(`${baseURL}/1`)
      .then(() => {
        alert("Post deleted!")
        setPost(null)
      });
  }


  if (!post) return null;
  return (
    <div className="App">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>Create Post</button>
      <button onClick={updatePost}>Update Post</button>
      <button onClick={deletePost}>Delete Post</button>
    </div>
  );
}

export default OriginalPage;
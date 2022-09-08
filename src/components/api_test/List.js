import React, {useEffect, useState} from 'react';
import axios from 'axios';

function List(props) {

  // const url = "https://jsonplaceholder.typicode.com/posts"

  // const [post, setPost] = useState(null);

  // useEffect(()=>{
  //   axios.get(url).then((response) =>{
  //     setPost(response.data);
  //   })
  // }, [])

  // if(!post) return null;

  // const[post, setPost] = useState(null);

  // useEffect(()=>{
  //   axios.get(`${url}/1`).then((response)=>{
  //     setPost(response.data);
  //   });
  // }, []);

  // const createPost = () =>{
  //   axios.post(url, {
  //     title: `i'm a software developer`,
  //     body: `i solve critical problems and instances both left and right`,
  //   }).then((response)=>{
  //     setPost(response.data);
  //   })
  // }

  // if (!post) return "no post";

  // const [post, setPost] = useState(null);

  // useEffect(()=>{
  //   axios.get(`${url}/1`).then((response)=>{
  //     setPost(response.data);
  //   });
  // }, []);

  // const updatePost = () =>{
  //   axios.put(`${url}/1`, {
  //     title: `A software developer`,
  //     body: `Hello world, this is an update post`,
  //   }).then((response)=>{
  //     setPost(response.data)
  //   })
  // }

  // if (!post) return 'no post'

  // const [post, setPost] = useState(null);

  // useEffect(()=>{
  //   axios.get(`${url}/1`).then((response)=>{
  //     setPost(response.data);
  //   });
  // }, []);

  // const deletePost = () =>{
  //   axios.delete(`${url}/1`).then(()=>{
  //     setPost(null);
  //     alert('delete successful')
  //   })
  // }

  // if(!post) return 'no post'


  //Error Handling in with Axios and React

  // const [post, setPost] = useState(null);
  // const [error, setError] = useState(null);

  // useEffect(()=>{
  //   axios.get(`${url}/asdf`).then((response)=>{
  //     setPost(response.data);
  //   }).catch((error) => {
  //     setError(error);
  //   })
  // }, [])

  // if (error) return `Error ${error.message}`;
  // if (!post) return 'no post';

  //Create an Axios Instance

  // const client = axios.create({
  //   baseURL:  "https://jsonplaceholder.typicode.com/posts"
  // });

  // const [post, setPost] = useState(null);

  // useEffect(()=>{
  //   client.get('/1').then((response)=>{
  //     setPost(response.data);
  //   });
  // }, []);


  // const deleteAxiosInstance = () =>{
  //   client.delete('/1').then(() => {
  //     alert('deleted successfully');
  //     setPost(null)
  //   })
  // }

  // if(!post) return 'no post';


  //Async await syntax with axios

  const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts"
  })

  const [post, setPost] = useState(null);

  useEffect(()=>{
    async function getData(){
      const response = await client.get("/1");
      setPost(response.data);
    }
    getData();
  }, [])

  async function deletePost(){
    const response = await client.delete("/1");
    alert('post delete successfully');
    setPost(null);
  }

  if(!post) return 'no post available'
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button onClick={deletePost}> Delete Post</button>
    </div>
  );

}

export default List;

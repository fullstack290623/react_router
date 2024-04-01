import { Component, useState, useEffect } from "react";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import axios from 'axios'

//const Post extends Component ...
const Post = () => {

    // state = {
    //     post: null
    //      x: 0
    // }
    const [post, setPost] = useState(null)
    const [x, setX] = useState(0)
    let { id } = useParams();

    // componentDidMount() ...
    useEffect(() => {
        (async () => {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            console.log(res);
            setPost(res.data)
        })()

        // cleanup
        return () => {

        }
    }, [])

    const display_post = post ? (
        <div className="post">
            <h4 className="center">{post.title}</h4>
            <p>{post.body}</p>
        </div>) : (
        <div className="center">Loading post...</div>
    )

    return (
        <div className="container">
            {display_post}
        </div>)
}

export default Post;
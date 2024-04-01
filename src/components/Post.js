import { Component } from "react";
import {
    useLocation,
    useNavigate,
    useParams,
  } from "react-router-dom";
  
class Post extends Component {
    state = {
        post: null
    }
    render() {
        const post = this.state.post ? (
            <div className="post">
                <h4 className="center">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>) : (
                <div className="center">Loading post...</div>
            )
        
        return (
                <div className="container">
                    {post}
                </div>)
    }
    componentDidMount() {
        let { id } = useParams();
        // axios
    }
}
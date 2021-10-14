import React, {useEffect, useState} from "react";
import axios from "axios";
import SinglePost from "../components/SinglePost"

const Post = (props) => {
    const [post, setPost] = useState(null);
    
    useEffect(() => {
        axios.get("http://localhost:5000/api/posts/" + props.id)
        .then((res) => {
            setPost(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [props.id]);

    if (post === null) {
        return "Loading...";
    }
    return <div>
        <h2>Single Post View</h2>
        <SinglePost post={post}/>;
    </div>;
    
};

export default Post;
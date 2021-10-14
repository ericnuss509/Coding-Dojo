const SinglePost = (props) => {
    return (
    <div style ={{ display: "inline-block", padding: "20px"}}>
        <h2>{props.post.title}</h2>
        <p>{props.post.description}</p>
        <small>Categories:{props.post.primaryCategory},
        {props.post.secondaryCategory}</small>
        <img src={props.post.impUrl} alt={props.post.title} width="100%"/>
    </div>
    );
};

export default SinglePost;
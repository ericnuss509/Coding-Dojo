import React, {useState} from "react";

const NewPost = (props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [primaryCategory, setPrimaryCategory] = useState("");
    const [imgUrl, setImgUrl] = useState("");

    return <form>
        <div>
            <label>Title: </label>
            <input onChange={(e) => {
                setTitle(e.target.value);
            }}
            type="text"
            />
        </div>

        <div>
            <label>Description: </label>
            <input onChange={(e) => {
                setDescription(e.target.value);
            }}
            type="text"
            />
        </div>
    </form>
};

export default NewPost;
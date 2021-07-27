import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const NewProduct = (props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [errors, setErrors] = useState(null);

    const handleNewProductSubmit = (event) => {
        event.preventDefault();
        const newProduct = {
        title: title,
        description: description,
        price: price
        };

        axios
        .post("http://localhost:5000/api/products", newProduct)
        .then((res) => {
            navigate("/products/" + res.data._id);
        })
        .catch((err) => {
            // This .catch only happens if the controller uses
            // res.status(400).json(err)
            console.log(err);
            setErrors(err.response?.data?.errors);
        });
    };

    return (
        <form
        onSubmit={(e) => {
            handleNewProductSubmit(e);
        }}
        >
        <div>
            <label>Title: </label>
            {errors?.title && (
            <span style={{ color: "red" }}>{errors.title.message}</span>
            )}
            <input
            onChange={(e) => {
                setTitle(e.target.value);
            }}
            type="text"
            />
        </div>

        <div>
            <label>Description: </label>
            {errors?.description && (
            <span style={{ color: "red" }}>{errors.description.message}</span>
            )}
            <textarea
            onChange={(e) => {
                setDescription(e.target.value);
            }}
            type="text"
            ></textarea>
        </div>

        <div>
            <label>Primary Category: </label>
            {errors?.primaryCategory && (
            <span style={{ color: "red" }}>{errors.primaryCategory.message}</span>
            )}
            <input
            onChange={(e) => {
                setPrimaryCategory(e.target.value);
            }}
            type="text"
            />
        </div>

        <div>
            <label>Secondary Category: </label>
            {errors?.secondaryCategory && (
            <span style={{ color: "red" }}>
                {errors.secondaryCategory.message}
            </span>
            )}
            <input
            onChange={(e) => {
                setSecondaryCategory(e.target.value);
            }}
            type="text"
            />
        </div>

        <div>
            <label>Image Url: </label>
            {errors?.imgUrl && (
            <span style={{ color: "red" }}>{errors.imgUrl.message}</span>
            )}
            <input
            onChange={(e) => {
                setImgUrl(e.target.value);
            }}
            type="text"
            />
        </div>
        <button>Submit</button>
        </form>
    );
    };

    export default NewProduct;
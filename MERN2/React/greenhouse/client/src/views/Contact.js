import React, { useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import Button from '@material-ui/core/Button';
import { Grid, TextField, Paper } from '@material-ui/core'


const paperStyle = { padding: 33, width: 333, margin: "33px auto" }
const buttonStyle = { margin: "33px auto" }

const Contact = (props) => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [help, setHelp] = useState("");
    const [errors, setErrors] = useState({})

    const handleContact = (e) => {
        e.preventDefault();
        const newInfo = {
            username,
            email,
            help,
        };
        axios.post('http://localhost:8000/api/greenHouse', newInfo, {
            withCredentials: true,
        })
            .then(res => {
                console.log(".then error")
                navigate("/")

            })
            .catch(err => {
                setErrors(err.resopnse.data.errors)
                console.log(err)
            })
        console.log("you have a dot then bug")
        navigate("/")
    };

    return (
        <div>
            <div className="bg-image parallax" style={
                {
                    backgroundImage: "url(/IMG_5712.jpg",
                    height: "80vh",
                    width: "100%",
                }}
            ></div>

            <h1>Contact</h1>
            <Grid>
                <Paper style={paperStyle}>
                    <form onSubmit={handleContact}>
                        <TextField fullWidth label='full name' placeholder="Enter your name" required={true} onChange={(event) => setUserName(event.target.value)} />
                        {errors.username ? (
                            <p style={{ color: "red" }}>{errors.username.message}</p>
                        ) : (
                            ""
                        )}
                        <TextField fullWidth label='email' placeholder="Enter your email" required={true} onChange={(event) => setEmail(event.target.value)} />
                        {errors.email ? (
                            <p style={{ color: "red" }}>{errors.email.message}</p>
                        ) : (
                            ""
                        )}
                        <TextField fullWidth label='What can we help you with?' placeholder="What can we help you with?" required={true} onChange={(event) => setHelp(event.target.value)} />
                        {errors.help ? (
                            <p style={{ color: "red" }}>{errors.help.message}</p>
                        ) : (
                            ""
                        )}

                        <Button style={buttonStyle} type='submit' variant='contained' color='primary'>Send it</Button>
                    </form>
                </Paper>
            </Grid>
            <Button class="CircleButton"
                size="small"
                variant="contained"
                color="secondary"
            ><Link to="/">
                    Return to Home
                </Link>
            </Button>
        </div>
    );
};

export default Contact
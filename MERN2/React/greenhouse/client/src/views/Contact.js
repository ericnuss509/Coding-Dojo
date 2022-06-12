import React, {useState} from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router';
import Button from '@material-ui/core/Button';
import { Grid, TextField, Paper }  from '@material-ui/core'


const paperStyle = { padding: 33, width: 333, margin: "33px auto" }
const buttonStyle = {margin: "33px auto"}

const Contact= (props) =>{
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [help, setHelp] = useState("");
    const [errors, setErrors] = useState("")





    const handleContact = (e) =>{
        e.preventDefault();
        const newInfo = {
            username,
            email,
            help,
        };
        axios.post('http://localhost:8000/api/greenHouse', newInfo, {
            withCredentials: true,
        })
            .then(res=>{
            navigate("/dashboard")
                
            })
            .catch(err=>{
                console.log(err)
            })
        };





    return(
        
        <div>
    <div className="bg-image parallax"  style={
                { 
                backgroundImage: "url(/contact.png", 
                height: "70vh", 
                width: "100%", 
                backgroundSize: "contain", 
                // backgroundRepeat: "no-repeat",
                display: 'block', 
                margin: "auto",
                backgroundAttachment: 'fixed',
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                }}
                ></div>





            <h1>Contact</h1>
            <Grid>
                {/* <Paper style={paperStyle}>
                    <form onSubmit={handleContact}>
                        <TextField fullWidth label='full name' placeholder="Enter your name" onChange={(event) => setUserName(event.target.value)} />
                            {errors?.username && (
                                <p style={{ color: "red" }}>{errors.username.message}</p>
                            )}
                        <TextField fullWidth label='email' placeholder="Enter your email" onChange={(event) => setEmail(event.target.value)}/>
                            {errors?.email && (
                                <p style={{ color: "red" }}>{errors.email.message}</p>
                            )}
                        <TextField fullWidth label='What can we help you with?' placeholder="What can we help you with?" onChange={(event) => setHelp(event.target.value)}/>
                            {errors?.help && (
                                <p style={{ color: "red" }}>{errors.help.message}</p>
                            )} */}


                        {/* <div className="form-group">
                            <label>Full Name</label> 
                            <input type="text" className="form-control" name="username" onChange={changehandler}/>
                            {errors.username? <p className= "text-danger">{errors.username.message}</p>:""}
                        </div> */}
                        {/* <div className="form-group">
                            <label>Email</label> 
                            <input type="text" className="form-control" name="email" onChange={changehandler}/>
                            {errors.email? <p className= "text-danger">{errors.email.message}</p>:""}
                        </div>
                        <div className="form-group">
                            <label>Inquire</label> 
                            <input type="text" className="form-control" name="password" onChange={changehandler}/>
                            {errors.password? <p className= "text-danger">{errors.password.message}</p>:""}
                        </div> */}
{/* from here down */}

                        {/* <Button style ={buttonStyle} type='submit' variant='contained' color='primary'>Send it</Button>
                    </form>
                </Paper> */}

            </Grid>
                <Button size = "small"
                            variant ="contained" 
                            color = "secondary">
                            
                            <Link to="/">
                            Return to Home
                            </Link>
                </Button>
        </div>
        );
    };

export default Contact




        //////////////////////////////////////////////
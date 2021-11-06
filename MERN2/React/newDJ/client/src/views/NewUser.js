import React, {useState} from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router';
import Button from '@material-ui/core/Button';
import { Grid, TextField, Paper }  from '@material-ui/core'


const paperStyle = { padding: 20, width: 300, margin: "30px auto" }
const buttonStyle = {margin: "10px auto"}

const NewUser= (props) =>{
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [help, setHelp] = useState("");
    const [errors, setErrors] = useState(null)





    const handleNewUser = (e) =>{
        e.preventDefault();
        const newInfo = {
            username: username,
            email: email,
            help: help,
        };
        // axios.post('http://localhost:5000/api/djs', newInfo)
        //     .then(res=>{
        //         console.log(res)
        //         if(res.data.errors){
        //             setErrors(res.data.errors)
        //         }else{
        //             navigate('/dashboard')
        //         }
        //     })
        //     .catch(err=>{
        //         console.log(err)
        //     })


        //////////////////////////////////////////////



    //     const Form = (props) =>{
    //         const {username, setUsername, email, setEmail, help, setHelp} = props;
        
    //         const submitHandler = (e) =>{
    //             e.preventDefault()
    //             let usernameArr = [...email]
    //             usernameArr.push(username)
    //             setEmail(usernameArr)
    //     //setting username input back to a blank input.
    //             setUsername("")
    //         }
        
    //         const changeHandler = (e) =>{
    //             setUsername(e.target.value)
    //         }
    //         return(
    //             <div>
    //                 <form onSubmit = {submitHandler}>
    //                     <label htmlFor="addcolor">Write a color to add to the email</label>
    //                     <input type="text" name="addcolor" onChange = {changeHandler} value = {color}/>
    //                     <input type="submit" name="submitHandler"/>
    //                 </form>
    //             </div>
    //         )
            
    //     }
        
    //     export default Form


    // }



///////////////////////////////////////////////////////




    return(
        <div>
    
            <h1>Contact</h1>
            <Grid>
                <Paper style={paperStyle}>
                    <form onSubmit={handleNewUser}>
                        <TextField fullWidth label='full name' placeholder="Enter your name" />
                            {errors?.username && (
                                <p style={{ color: "red" }}>{errors.username.message}</p>
                            )}
                        <TextField fullWidth label='email' placeholder="Enter your email" />
                            {errors?.email && (
                                <p style={{ color: "red" }}>{errors.email.message}</p>
                            )}
                        <TextField fullWidth label='What can we help you with?' placeholder="What can we help you with?" />
                            {errors?.help && (
                                <p style={{ color: "red" }}>{errors.help.message}</p>
                            )}
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
                        <Button style ={buttonStyle} type='submit' variant='contained' color='primary'>Send it</Button>
                    </form>
                </Paper>
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

export default NewUser;

import React, {useState} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';
import {Avatar, stringAvatar} from '@material-ui/core';
import Button from '@material-ui/core/Button';





const Register = () => {
    const [formInfo, setFormInfo] = useState({
        username:"",
        email:"",
        password:"",
        confirm:""
    })

    const [errors, setErrors] = useState({

    })
    const changehandler = (e) =>{
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }

    const register = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/register', formInfo, {withCredentials:true})
            .then(res=>{
                console.log(res)
                if(res.data.errors){
                    setErrors(res.data.errors)
                }else{
                    navigate('/dashboard')
                }
            })
            .catch(err=>{
                console.log(err)
            })

    }
    return(
        <div>
            {/* <Avatar {...stringAvatar('Kent Dodds')} />
            <Avatar {...stringAvatar('Jed Watson')} />
            <Avatar {...stringAvatar('Tim Neutkens')} /> */}
            <h1>Contact</h1>
            <form onSubmit={register}>
                <div className="form-group">
                    <label>Full Name</label> 
                    <input type="text" className="form-control" name="username" onChange={changehandler}/>
                    {errors.username? <p className= "text-danger">{errors.username.message}</p>:""}
                </div>
                <div className="form-group">
                    <label>Email</label> 
                    <input type="text" className="form-control" name="email" onChange={changehandler}/>
                    {errors.email? <p className= "text-danger">{errors.email.message}</p>:""}
                </div>
                <div className="form-group">
                    <label>Inquire</label> 
                    <input type="text" className="form-control" name="password" onChange={changehandler}/>
                    {errors.password? <p className= "text-danger">{errors.password.message}</p>:""}
                </div>
                
            </form>
            <Button 
                        a href="/"
                        size = "small"
                        variant ="contained" 
                        color = "secondary">
                        Return to Home
                    </Button>
        </div>
    );
};

export default Register;

import React, {useState} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';


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
            <h1>Register</h1>
            <form onSubmit={register}>
                <div className="form-group">
                    <label>Username</label> 
                    <input type="text" className="form-control" name="username" onChange={changehandler}/>
                </div>
                <div className="form-group">
                    <label>Email</label> 
                    <input type="text" className="form-control" name="email" onChange={changehandler}/>
                </div>
                <div className="form-group">
                    <label>Password</label> 
                    <input type="password" className="form-control" name="password" onChange={changehandler}/>
                </div>
                <div className="form-group">
                    <label>Confirm Password</label> 
                    <input type="password" className="form-control" name="confirm" onChange={changehandler}/>
                </div>
                <input type="submit" value="Sign up" className="btn btn-primary"/>
            </form>
        </div>
    );
};

export default Register;
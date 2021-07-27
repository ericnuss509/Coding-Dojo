import React from "react";

const Register = props => {
    const{ inputs, setInputs } = props;
    
        
    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });

    };
    return (
    <form>
        <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input onChange={onChange} type= "text" name="firstName"/>
            {
                inputs.firstName.length > 0 && inputs.firstName.length < 2 ?
                <p style={{color:'red'}}>First Name must be at least 2 characters</p>:
                ""
            }
            
        </div>
        <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input onChange={onChange} type= "text" name="lastName"/>
            {
                inputs.lastName.length > 0 && inputs.lastName.length < 2 ?
                <p style={{color:'green'}}>Last Name must be at least 2 characters</p>:
                    ""
                
            }
        </div>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input onChange={onChange} type= "text" name="email"/>
            {
                inputs.email.length > 0 && inputs.email.length < 5 ?
                <p style={{color:'yellow'}}>Email must be at least 5 characters</p>:
                ""
            }
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input onChange={onChange} type= "password" name="password"/>
            {
                inputs.password !== inputs.confirmPassword ?
                <p style={{color:'blue'}}>Your password and confirm password must be the same.</p>:
                ""
            }
            {
                inputs.password.length >0 && inputs.password.length < 8 ?
                <p style={{color:'orange'}}>Password must be at least 8 characters</p>:
                ""
            }
            
        </div>
        <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input onChange={onChange} type= "password" name="confirmPassword"/>
            {
                inputs.password !== inputs.confirmPassword ?
                <p style={{color:'purple'}}>Your password and confirm password must be the same.</p>:
                ""
            }
            
        </div>
    </form>
        );
};

export default Form;
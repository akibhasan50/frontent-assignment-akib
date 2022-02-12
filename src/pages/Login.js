import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom';

export default function Login() {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [username, setUsername] = useState('');
   const [paswords, setPaswords] = useState('');


    const userData = localStorage.getItem('usename');
 

    const database = [
        {
          username: "user1",
          password: "pass1"
        },
        {
          username: "user2",
          password: "pass2"
        }
      ];
      const errors = {
        uname: "invalid username",
        pass: "invalid password"
      };

      const handleSubmit = (event) => {


        //Prevent page reload
        event.preventDefault();
    var uname = username && username
    var pass = paswords && paswords

        // Find user login info
        const userData = database.find((user) => user.username === uname);
    
        // Compare user info
        if (userData) {
          if (userData.password !== pass) {
            // Invalid password
            setErrorMessages({ name: "pass", message: errors.pass });
          } else {
            setIsSubmitted(true);

            localStorage.setItem('usename', userData.username);
          }
        } else {
          // Username not found
          setErrorMessages({ name: "uname", message: errors.uname });
        }
      };

        // Generate JSX code for error message
  const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );
     // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" onChange={(e) =>setUsername(e.target.value)} value={username} required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" onChange={(e) =>setPaswords(e.target.value)} value={paswords} required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );


  if(userData == null){
    return (
      
        <div className="app-login">
        <div className="login-form">
          <div className="title">Sign In</div>
          {isSubmitted ? <Redirect to="/" /> : renderForm}
        </div>
      </div>
      )
  }else{
      return(

        <Redirect to="/" />
      )
  }
 
}


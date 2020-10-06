import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import logo from '../../logos/Group 1329.png';
import google from '../../logos/google.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import firebaseConfig from './firebase.config';
firebase.initializeApp(firebaseConfig);
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    const handleClick = () =>{
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
        .then(result => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            // var token = result.credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // console.log(user);
            const {displayName, email, photoURL, emailVerified} = user;
            const signedInUser = {
                name: displayName,
                email: email,
                photoURL: photoURL,
                emailVerified: emailVerified
            }
            setLoggedInUser(signedInUser);
            history.replace(from);

          })
          .catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage,loggedInUser);
          });
    }
    return (
        <div className='jumbotron text-center full-page'>
            <img className='logo-img' src={logo} alt=""/>
            <div action="" className='form-control login-form'>
                <h5>Login With</h5> 
                <button onClick={handleClick} type="submit" className='btn btn-outline-warning circled'><img src={google} className='google-logo' alt=""/><span className='continue-google'>Continue with Google</span></button>
                <p>Don't have an account? <Link to='/create-account' className='text-primary'>Create an account</Link></p>
            </div>
        </div>
    );
};

export default Login;
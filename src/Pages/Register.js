import React from 'react'

//import the stylesheet
import './Register.css'

//import ECStore Icon from Icon folder
import ECSIcon from './../Icon/ECSIcon.png'

// import Link from react
import {Link} from 'react-router-dom'

function Register(){

    return(
        <div className="register">
                <Link to="/">
                    <img className="register__ECSIcon" src={ECSIcon} alt="Logo"/>
                </Link>
            <div className="register__container">
                <h1> Registration</h1>
                <form>
                    <h5>Username</h5>
                    <input type="text"></input>
                    <h5>E-mail</h5>
                    <input type="email"></input>
                    <button type="submit" className="register__registerButton">Register</button>
                </form>
                <p>The above fields are mandatory to track users order</p>
            </div>
        </div>
    )
}

export default Register
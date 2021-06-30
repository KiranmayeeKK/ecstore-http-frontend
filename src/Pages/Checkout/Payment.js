import React from 'react'

//import {Redirect} from 'react-router-dom'
//import the stylesheet
import './Payment.css'


function Payment( ){

   /* if(!verificationstatus) {
        return <Redirect to="/" />
    }*/
    return(
        <div className="payment">

            <div className="payment__container">
                <h1> Here you can do payment</h1>
            </div>
        </div>
    )
}

export default Payment
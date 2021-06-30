import React from 'react'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from './../../Reducer/StateProvider'  
import axios from 'axios'
//import { ClosedCaptionOutlined } from '@material-ui/icons'
import './Subtotal.css'
//import { Redirect } from 'react-router-dom'
import {useHistory} from  'react-router-dom'

function Subtotal(){
  let history = useHistory()
    //calculating cart total price
    const getCartTotal = (basket) =>
    basket?.reduce((amount,item) => item.price + amount, 0);
    const [{basket, isVerified, selectedCredentialFile, setErrorMessage}, dispatch] = useStateValue();
    let flagAgeLimit = 0

    //To read file content synchronously
    function readFileAsync(file) {
        return new Promise((resolve, reject) => {
          let reader = new FileReader();
      
          reader.onload = () => {
            resolve(reader.result);
          };     
          reader.onerror = reject;
          reader.readAsText(file);
        })
      }
    //check basket items for the age limit flag.
    basket.map(item => item.hasAgeLimit =="true"? flagAgeLimit= flagAgeLimit+1 : <p></p>)

      //triggered when a file is selected, write the file information to selectedCredentialFile state variable
      const selectFile =async(event) => {      
        dispatch({
            type: 'SELECT_FILE',
            file: event.target.files[0]
        })
    }
     const uploadCredentialFile = async() => {
    //to erase previos state of isVerified variable 
      dispatch({
        type: 'SET_IS_VERIFIED',
        value: false
    }        )
         
      /* Read file contents and upload it to server. 
      Content type in the header is set to application/json. In this version of client application only json files are allowed
      JSON.parse returns a JSON object which is passed as post request body
      */
            console.log("uploading to server");
            let fileObj =  await readFileAsync(selectedCredentialFile);
            const headers = {
                'Content-Type': 'application/json',
              }
             let formData = JSON.parse(fileObj);
            console.log(formData);
          // Read the server url from .env file
        const server_url = process.env.REACT_APP_SERVER_URL;
        axios.post(server_url, formData, { headers : headers
           // receive two  parameters - endpoint url ,form data and optional headers 
       })
     .then(res => { 
        console.log("Response from server" + res.data)
        /* If response from the server is vaalid, 
        then the isVerified state variable is set to true and correspondingly the page elements are rendered
      */
        res.data == "valid" && 
        dispatch({
            type: 'SET_IS_VERIFIED',
            value: true
        }        )
      //  return  <Redirect to="/payment" />;  
      })
      .catch(error => {
             /* If response from the server has Response type of 4XX, 
             then the setErrorMessage is set and correspondingly the page elements are rendered
      */
        console.log("error response from ssi server" + error.response);
        dispatch({
          type: 'SET_ERROR_MESSAGE',
          value: error.response.data
      }        )
    });
     }

    return(<div className="subtotal">
        {/* computing total price for all the items in the cart*/}
        <CurrencyFormat
        renderText = {(value) => (
            <p className="subtotal_credentialFields" >
                Subtotal({basket.length} items) : <strong>{value}</strong>
            </p>
        )}
        decimalScale={2}
        value ={getCartTotal(basket)}
        displayType = {"text"}
        thousandSeperator ={true}
        prefix= {"€"}
        />
        {/*  If any items in the cart has age limit, 
        the flagAgeLimit value is set and file upload option is enabled for customer to upload credential file  */}
        {
             flagAgeLimit > 0 &&  
            <div className="subtotal_credentialFields">           
                 <input type="file" name="credentialFile" onChange={selectFile}/>
               <button onClick={uploadCredentialFile}>Upload Identity</button> 
             </div>
        }
        {/*  If customer credential verification is success, then isVerified is set to true and a success message displayed  */}
        {
              (isVerified == true) && <div className="successText"> <p>Credential verification success, proceed to Checkout</p></div>
        }
       {/*  If there are no age limit prosucts in the cart or customer credential verification is success, 
       then proceed to checkout button is displayed and on click the customer is redirected to payment page*/}
        {
              (flagAgeLimit == 0 || isVerified == true) && <div className="proceedButton"> <button onClick={() => {history.push("/payment");}}>Proceed to Checkout</button></div>
        }
       {/*  If customer credential verification is not success, then the error message received from the server is rendered on the page */}
        {
              (setErrorMessage!=null ) &&  <div className="errorMessage" >{setErrorMessage}</div>
        }
    </div>
    )
}

export default Subtotal;
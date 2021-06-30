import React from 'react'
import { useStateValue } from '../Reducer/StateProvider'


import './Product.css'

function Product({id, title, image, price, rating, hasAgeLimit}){
    const [{basket}, dispatch] = useStateValue()
    console.log('basket content', basket)
 //   let history = useHistory()
    const addToBasket = () => {
       /* //check if this is the first item added to the cart, if so redirect to registration page
        if(basket.length == 0) {
            history.push("/register");
        }
        //otherwise add the items to the cart
        else { */
        /* adds all the information about the selected product to the basket array*/
        dispatch({
        type: 'ADD_TO_BASKET',
        item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
            hasAgeLimit: hasAgeLimit
        }
        })
     //   }
    }
    {/* renders the necessary information about the item on the home page, information like id and agelimit are skipped*/}
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>€</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <p>*</p>
                        ))
                    }
                </div>
            </div>  
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Product;
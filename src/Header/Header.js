import React from 'react'
import SearchIcon from '@material-ui/icons/Search'

import {Link} from 'react-router-dom'

import './Header.css'

import ECSIcon from './../Icon/ECSIcon.png'

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from '../Reducer/StateProvider'

function Header(){

    const[{basket}] = useStateValue();

    return(
        <nav className="header">
                <Link to="/">
                    <img className="header__ECSIcon" src={ECSIcon} alt="Logo"/>
                </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <Link to="/register" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Register</span>
                </div>
            </Link>
            {/*basket icon with number of items*/}
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header__productCount">{basket?.length}</span>
                </div>
            
            </Link>
        </nav>
    )
}

export default Header;
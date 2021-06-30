
import Product from './Product'

import './Home.css'
function Home(){
    return (
        <div className="home">
        <div className="home__products">
            <Product
                id="1"
                title="Magazine: Fashion stories"
                price={10.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/51khgHvjRqS._SX381_BO1,204,203,200_.jpg"
                hasAgeLimit="false"
                />
            <Product
                id="2"
                title="E-Cigarette"
                price={35.99}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/51OsG-Eez0L._AC_SY450_.jpg"
                hasAgeLimit="true"
                />
            <Product
                id="3"
                title="Beverages: Redbull(24 pack)"
                price={15.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71nJLdSw0cL._SX522_.jpg"
                hasAgeLimit="false"
                />
        </div>
        <div className="home__products">
            <Product
            id="4"
            title="Beverages: Whisky"
            price={70.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61Y%2BD%2BmawFL._AC_SX679_.jpg"
            hasAgeLimit="true"
            />
         </div>
        </div>

    )
}

export default Home


import React, { useContext } from 'react'
import { BasketContext } from '../../context/basket'
import "./basket.scss"
function Basket(){
    const { basket } = useContext(BasketContext) || {};
    console.log(basket)
    return (
        <div className='ourBasket'>{basket && basket.map((item) => (
            <div className='ourCardBasket' key={item._id}>
                <div className='ourImageBasket'>
                    <img className='ourImgBasket' src={item.image} alt="" />
                </div>
                <div className='ourNameBasket'>
                    <h3>{item.name}</h3>
                </div>
                <div className='ourTitleBasket'>
                    <p>{item.title}</p>
                </div>

            </div>
        ))}
        </div>
    )
}

export default Basket
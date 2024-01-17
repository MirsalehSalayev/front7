import React, { useContext, useEffect, useState } from 'react'
import "./our.scss"
import { BasketContext } from '../../context/basket';
import { NavLink } from 'react-router-dom';
function OurProducts() {
const {AddBasket} = useContext(BasketContext)
    const [data, setData] = useState([])
    useEffect(()=>{
        const FetchData = async ()=>{
            const  response = await fetch("http://localhost:3100/services")
            const api = await response.json()
            setData(api)
        }
        FetchData()
    })
  return (

    <div className='ourSection'>{data.map((item)=>{
        return(
            <div key={item._id} className='ourCard'>
                <div className='ourImage'>
                    <img className='ourImg' src={item.image} alt="" />
                </div>
                <div className='ourName'>
                    <h3>{item.name}</h3>
                </div>
                <div className='ourTitle'>
                    <p>{item.title}</p>
                </div>
                <div className='ourButtons'>
                    <button className='ourButton' onClick={()=>AddBasket(item)}>Cart</button>
                    <NavLink to={/detail/+item._id}><button className='ourButton'>View</button></NavLink>
                </div>
            </div>
        )
    })}
       
    </div>
  )
}

export default OurProducts
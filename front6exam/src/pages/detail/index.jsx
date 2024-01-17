import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import "./detail.scss"
function Detail() {
    const { id } = useParams()
    const [data, setData] = useState([])
    useEffect(() => {
        const FetchData = async () => {
            const response = await fetch("http://localhost:3100/services/" + id)
            const api = await response.json()
            setData(api)
        }
        FetchData()
    })

    return (
        <>

            <Helmet>
                <title>detail</title>
            </Helmet>
            <div  className='ourCardDetail'>
                <div className='ourImageDetail'>
                    <img className='ourImgDetail' src={data.image} alt="" />
                </div>
                <div className='ourNameDetail'>
                    <h3>{data.name}</h3>
                </div>
                <div className='ourTitleDetail'>
                    <p>{data.title}</p>
                </div>
                
            </div>
        </>
    )
}

export default Detail
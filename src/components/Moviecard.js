import React from 'react'
import ReactStars from "react-rating-stars-component";
import {Link} from 'react-router-dom'


function Moviecard({el}) {
    return (
        <div   className="card" >
            <h1>{el.title}</h1>
            <p>{el.description} </p>
            <img src={el.posterUrl} alt=""/>
            <ReactStars count={5} value={el.rate} size={24} activeColor="#ffd700" />
            <button><Link to={`/trailer/${el.id}`}>watch trailer</Link></button>

        </div>
    )
}

export default Moviecard
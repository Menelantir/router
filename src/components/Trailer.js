import React from 'react'


export default function Trailer (props) {
    const movieTrailer = props.movies.find ((el) => el.id == props.match.params.id ) ; 

    return (
        <div className="trailer">
            <h1>{movieTrailer.title}</h1>
            <p>{movieTrailer.description}</p>
            <iframe   width="700" height="300" src={movieTrailer.trailer} ></iframe><br></br>
            <button  onClick={()=>props.history.push("/")}>HOME</button>
            
        </div>
    )
}

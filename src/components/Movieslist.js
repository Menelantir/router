import React from 'react'
import Moviecard from './Moviecard'


function Movieslist({movies,search,searchRate}) {
    return (
        <div  className='container'  >
            {
            movies.filter(el=>el.title.toUpperCase().includes(search.toUpperCase().trim()) && el.rate <= searchRate).map(el=><Moviecard el= {el} />)
            }
        </div>
    )
}

export default Movieslist
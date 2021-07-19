import React, { useState, useEffect } from 'react'
import axios from '../axios'


function Row({ title, fetchUrl }) {

    const [movies, setMovies] = useState([])

    //Code Snippet which runs based on a specific conditions
    useEffect(() => {
        // if [], run once when the component load, and dont'r run it again.
        async function fetchData() {
         const request = await axios.get(fetchUrl)
         console.log(request);
         return request;
        }
        fetchData()
    }, [])

    return (
        <div>
            <h2>{title}</h2>
        </div>
    )
}

export default Row

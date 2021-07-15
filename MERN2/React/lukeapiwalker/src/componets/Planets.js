import React,{ useState, useEffect } from 'react';
import axios from 'axios';



const Planets = (props) => {
    const {id} = props
    const [planets, setPlanets] = useState({})
    const [data, setData] = useState()



    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then(response=>{
            console.log(response)
            setPlanets(response.data)}, 
            setData(""))
        .catch(()=>setData("https://im-01.forfun.com/fetch/w295-ch400-preview/ab/ab4d164a4fc0fbe885783d977abc4899.jpeg"))
    },[id])

    if (data) {
        return (
            <div>
                <p>This are not the droids you are looking for!</p>
                <img src={data} />
            </div>
        )
    } else {
        
        return (
            <div>
                <h1>Name:{planets.name}</h1>
                <p>Gravity:{planets.gravity}</p>
                <p>Population:{planets.population}</p>
                <p>Terrain:{planets.terrain}</p>
                <p>Diameter:{planets.diameter}</p>
                <img src= {data}/>
            </div>
        )
}
}
export default Planets

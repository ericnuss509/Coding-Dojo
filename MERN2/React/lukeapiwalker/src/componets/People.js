import React,{ useState, useEffect } from 'react';
import axios from 'axios';

const People = (props) => {
    const {id} = props
    const [person, setPerson] = useState({})
    const [data, setData] = useState()

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(response=>{
            console.log(response)
            setPerson(response.data)},
            setData(""))
        .catch(() => setData("https://im-01.forfun.com/fetch/w295-ch400-preview/ab/ab4d164a4fc0fbe885783d977abc4899.jpeg"))
            
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
            <h1>{person.name}</h1>
            <p>Height:{person.height}</p>
            <p>Skin Color:{person.skin_color}</p>
            <p>Gender:{person.gender}</p>
            <p>Eye Color{person.eye_color}</p>
            <img src= {data}/>
        </div>
        
        )

    }
    }
    
    export default People
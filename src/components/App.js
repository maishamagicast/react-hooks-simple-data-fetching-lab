// create your App component here
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
    const[dogPics,setDogPics]= useState(null);

    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(r=>r.json())
        .then(data=> setDogPics(data.message))

    },[])

    if (!dogPics){
        return <p>Loading...</p>
    }
    return(
        <div>
            <img src={dogPics} alt='A Random Dog' title='dog-pic'></img>
        </div>
    )
}

export default App;
import React from 'react'
import DogDetails from './DogDetails'
const DogList = ({dog}) => {
    return (
            <>
            {dog.dogs.map(dogs => 
                <div>
               <h1>{dogs.name}</h1>   
               <h1>{dogs.age}</h1>   
               <img src={dogs.src}></img>  
                <h3>{dogs.facts}</h3> 
                </div>
               )}
               </>
        
    )
}

export default DogList
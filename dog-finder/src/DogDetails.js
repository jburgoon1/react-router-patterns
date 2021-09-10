import React from 'react'
import {useParams} from 'react-router-dom'

const DogDetails = ({dog}) => {
const {dogname} = useParams()


const currentDog = dog.dogs.filter(puppy => {
    if(puppy.name === dogname){
        return puppy
    }
})
console.log(currentDog)
    return (
        <div>
         <h1>{currentDog[0].name}</h1>   
         <h1>{currentDog[0].age}</h1>   
         <img src={currentDog[0].src}></img>   
         <h1>{currentDog[0].facts}</h1>   
        </div>
    )
}

export default DogDetails
import React from 'react'
import {useParams} from 'react-router-dom'


const ColorPage = () =>{
const {color} = useParams()

return (
    <div style={{backgroundColor:color}}>
        <h1>Isnt {color} NICE!?</h1>
    </div>
)
}
export default ColorPage;
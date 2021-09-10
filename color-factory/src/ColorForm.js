import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

const ColorForm = ({add}) =>{
    const history = useHistory()
    const [formData, setFormData] = useState({})

    const handleChange =(e) =>{
        const {name, value} = e.target
        setFormData(fData =>({...fData, value}))

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        add(formData)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} name="color" value={formData.color}></input>
            <button>Add new Color</button>
        </form>
    )



}
export default ColorForm;
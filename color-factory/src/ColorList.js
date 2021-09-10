import React, {useState} from 'react'
import NavBar from './Colorformnav'
import {Link, NavLink} from 'react-router-dom'
import ColorForm from './ColorForm'


const ColorList = () =>{
const [color, setColor] = useState([])

const addColor = (colors) =>{
setColor(c => [...c, colors])
}

return (
    <div>
    {console.log(color)}
    <NavBar add={addColor}/>
    <ColorForm add={addColor}/>
    <ul>
    {color.map(c =>(
       <li><Link to="/colors/:color" value={c.value}>{c.value}</Link></li>
    ))}
</ul>
    </div>
)

}
export default ColorList;

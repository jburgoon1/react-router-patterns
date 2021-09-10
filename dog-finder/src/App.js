import logo from './logo.svg';
import './App.css';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom'
import duke from './duke.jpg'
import perry from './perry.jpg'
import tubby from './tubby.jpg'
import whiskey from './whiskey.jpg'
import DogList from './DogList'
import DogDetails from './DogDetails'
import Navbar from './Navbar'


function App() {
  App.defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Duke",
        age: 3,
        src: duke,
        facts: [
          "Duke believes that ball is life.",
          "Duke likes snow.",
          "Duke enjoys pawing other dogs."
        ]
      },
      {
        name: "Perry",
        age: 4,
        src: perry,
        facts: [
          "Perry loves all humans.",
          "Perry demolishes all snacks.",
          "Perry hates the rain."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is really stupid.",
          "Tubby does not like walks.",
          "Angelina used to hate Tubby, but claims not to anymore."
        ]
      }
    ]
  }
  return (
    <BrowserRouter>
    {App.defaultProps.dogs.map(dogs => <Navbar dog = {dogs.name}/>)}
    
    <Switch>
      <Route exact path="/dogs" >
        <DogList dog = {App.defaultProps}/> 
      </Route>
      <Route path="/dogs/:dogname" >
        <DogDetails dog = {App.defaultProps}/> 
      </Route>
      <Redirect to="/dogs" />
    </Switch>
    </BrowserRouter>
  );
}

export default App;

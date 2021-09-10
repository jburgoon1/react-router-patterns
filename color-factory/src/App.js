import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect}from 'react-router-dom'
import ColorList from './ColorList'

import ColorPage from './ColorPage'
import ColorForm from './ColorForm'
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Switch>
     <Route exact path='/colors/new'>
    <ColorForm/>
    </Route>
    <Route exact path='/colors/:color'>
    <ColorPage/>
    </Route>
    <Route exact path='/colors'>
      <ColorList/>
    </Route>
    
    
   
    <Redirect to="/colors"/>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;

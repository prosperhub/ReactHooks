import {BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import Card from './COMPONENTS/Card.jsx'
// import './App.css'
import Join from './COMPONENTS/Join.jsx';
import Test from './COMPONENTS/Test.jsx';
import { useState } from 'react';

function App() {

let [item, setItems] = useState("");
const school = "she can code";
let arrayInit = [1,2,3];


let manageState = () =>{
  // let arrayUpdated = [...arrayInit,4,5];
  // [1,2,3,4,5]
  // console.log("updated", arrayUpdated)
  console.log("item is:",item);
}


  return (
    <>
    {/* <Test />
    <Card /> */}
    <Router>
      <Switch>
       <Route exact path="/" render={() => <Card />}/>
       <Route path='/join'
        render={() => <Join item={item} setItems={setItems} manageState={manageState} 
        />}/>
      </Switch>

    </Router>

    </>
  )
}

export default App

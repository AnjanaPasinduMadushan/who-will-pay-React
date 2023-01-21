import React, {useContext} from "react";

import { Mybill } from "./context";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './style/app.css'

import Stage1 from "./components/stage-1";
import Stage2 from "./components/stage-2";

const App = () =>{

  const context = useContext(Mybill)

  //console.log(context)

  return(
    <div className="wrapper">
      <div  className="center-wrapper">
      <h1>Who Pays the bill ?</h1>
      {context.state.stage===1 ?
     <Stage1/>
     :
     <Stage2/>
      }
      </div>
      
    </div>
  )

}


export default App;
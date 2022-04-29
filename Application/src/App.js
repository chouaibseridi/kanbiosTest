import Employees from "./pages/Employees";
import Employee from "./pages/Employee";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {  
  return (
    <Router>
      <Routes>
        <Route exact path='/' element ={< Home/>}></Route>
        <Route exact path='/employees' element ={< Employees />}></Route>
        <Route exact path='/employee/:id' element ={< Employee />}></Route>
      </Routes>
    </Router>
  )
}

export default App;

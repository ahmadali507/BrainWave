
import About from "./Pages/About";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
          <Route path = "/" element = {Home()}></Route>
          <Route path = "/About" element = {About()}></Route>
      </Routes>
    </Router>
    
  </>
  ); 
}

export default App; 

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbarx from "./Components/Navb";
import Bisection from "./Ncode/Bisection";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import FalsePosition from './Ncode/Falseposition';
import Onepoint from './Ncode/Onepoint';
import NewtonRap from './Ncode/NewtonRap';
import Secant from './Ncode/Secant';

function App() {
  return (
    
        <BrowserRouter>
            <Navbarx/>
            <Routes >
              <Route path="Bisection" element={<Bisection />} />
              <Route path="FalsePosition" element={<FalsePosition />}/>
              <Route path="Onepoint" element = {<Onepoint />}/>
              <Route path="NewtonRap" element = {<NewtonRap />}/>
              <Route path="Secant" element = {<Secant />}/>
            </Routes>
        
        </BrowserRouter>

    
    
  );
}

export default App;

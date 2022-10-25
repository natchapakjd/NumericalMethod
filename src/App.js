import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbarx from "./Components/Navb";
import Bisection from "./Ncode/Bisection";
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  const handleSelect = (eventKey) => alert(`${eventKey}`);

  return (
   <BrowserRouter>
      <Navbarx/>
      <Routes>
        <Route path="Bisection" element={<Bisection />} />
      </Routes>
   </BrowserRouter>
    
  );
}

export default App;

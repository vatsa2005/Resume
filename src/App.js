import './App.css';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Hobbies from './Components/Hobbies';
import Contact from './Components/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/skills' element={<Skills />}></Route>
        <Route path='/hobbies' element={<Hobbies />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

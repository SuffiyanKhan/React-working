import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About"
import Contact from "./Components/Contant/Contantus"
import Login from "./Components/Login/Login"
import Home from "./Components/Home/Home"
import PageNotFound from "./Components/Result/Result"



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
    </div>
    <Routes>
    <Route path='*' element={<PageNotFound/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

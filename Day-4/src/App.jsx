import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import Booking from './pages/Booking';
import NavAdmin from './body/navadmin';
import Signup from './pages/Signup';
import Academy from './pages/Academy';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
              
               <Route path="/login" element={<Login/>}></Route>
                <Route path="/home" element={<Home/>}></Route> 
                <Route path="/booking" element={<Booking/>}></Route>  
                <Route path="/navadmin" element={<NavAdmin/>}></Route>  
               <Route path="/signup"element={<Signup/>}></Route>
               <Route path="/Academy" element={<Academy/>}></Route>
             
             
              
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
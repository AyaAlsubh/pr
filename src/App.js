import React from 'react'
import './App.css';
import './index.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Contactt from './components/Contactt';
import Server from './components/Server';
import Servers from './components/Servers';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
  <div className="App">
            <BrowserRouter>
               <Navbar/>
                <div className="pages">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path='/contactt' element={<Contactt/>}/>
                        <Route path="/server" element={<Server/>} />
                        <Route path="/servers" element={<Servers/>} />
                       
                
                        
                        
     
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    </>
  );
}

export default App;

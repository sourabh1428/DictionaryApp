import React from 'react';
import './App.css';
import { Route,Routes } from 'react-router';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import History from './Components/History';
import Meaning from './Components/Meaning';
import NewBookPage from './Components/NewBookPage';




function App() {
  return (
    <div>
    <NavBar/>      
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/history' element={<History/>}/>
    <Route path='/info/:bookName' element={<NewBookPage/>} />
    </Routes>

    </div>
  );
}

export default App;

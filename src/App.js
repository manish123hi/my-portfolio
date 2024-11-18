import React from 'react';
import Header from './components/Header';
import About from './components/About'
import Contact from './components/Contact'
import Project from './components/Project'
import Phot from './components/Phot';
import './App.css'
const App = () => {
  return (
    <div>
     <Header/>
     <Phot/>
     <About/>
    
     <Project/>
     <Contact/>

    </div>
  )
}

export default App
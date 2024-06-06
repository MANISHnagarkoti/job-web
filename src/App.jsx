import { useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './component/Footer';
import Navbar from './Home component/Navbar';

function App() {


  return (
    <>
      <Router>
        <Navbar/>

        <Routes>
          <Route exact path="/" element={<Home />} />

        </Routes>
        <Footer />


      </Router>


    </>
  )
}

export default App

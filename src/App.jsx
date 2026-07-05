import { useState } from 'react'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Navigation from './components/Navbar'
import Home from './components/Home'
import Menu from './components/Menu'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <div className="app">
    <BrowserRouter>
      <Navigation />
       <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </main>
      <Footer />
    </BrowserRouter>
    </div>

  );
}

export default App

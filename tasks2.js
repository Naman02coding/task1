import React from "react"
import{ BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from "./pages/Header"

export default function Task2() {
    return(
        <div>
            <Router>
                <Header/>
            <Routes>
                
                <Route path="/Home" element={<Home />} /> 
                
                <Route path="/About" element={<About />} />
                
                <Route path="/Contact" element={<Contact/>} />
                
            </Routes>
            </Router>
        </div>
    )
}
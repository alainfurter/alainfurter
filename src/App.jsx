import {  Routes, Route, useNavigate} from 'react-router-dom'

import './App.css'
import Header from './components/Header'
import Socials from './components/Socials'
import Home from './components/Home'
import Projects from './components/Projects'

function App() {

  return (
    <>
      <Header />
      <Socials />
      <div className='sections-container'>
        <Routes>
          
          <Route 
              index
              element={<Home />}>
          </Route>
          <Route 
              path='/projects/*' 
              element={<Projects />}>
          </Route> 
        </Routes>
      </div>
    </>
  )
}

export default App

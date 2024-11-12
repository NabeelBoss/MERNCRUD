import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Form from './Pages/Form'
import Read from './Pages/Read';
import Update from './Pages/Update';
import Error from './Pages/Error';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path="/" element={<Form/>}/>
            <Route path="/read" element={<Read/>}/>
            <Route path="/update" element={<Update/>}/>
            <Route path="*" element={<Error />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
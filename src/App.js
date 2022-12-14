import Register from './Register';
import Login from './Login';
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
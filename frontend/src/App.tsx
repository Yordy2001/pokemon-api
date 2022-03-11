import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'

import Login from './Router/login/login';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Login /> }></Route>
      </Routes>
      {/* <nav>
        <Link to='/login'>Login</Link>
      </nav> */}
    </div>
  );
}

export default App;

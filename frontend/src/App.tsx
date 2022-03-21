import { Routes, Route, Link } from 'react-router-dom'
import Home from './Router/home/home';

import Login from './Router/login/login';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home />} > </Route>
        <Route path='/login' element={ <Login /> }></Route>
      </Routes>
      {/* <nav>
        <Link to='/login'>Login</Link>
      </nav> */}
    </div>
  );
}

export default App;

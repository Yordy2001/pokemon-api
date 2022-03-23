import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'

import Home from './Router/home/home';
import Login from './Router/login/login';
import PrivateRouter from './components/protectedRouter';



function App() {

  let user:any =  localStorage.getItem('isAuthenticate')
  let isAuth = JSON.parse(user)
  console.log(isAuth)
  return (
    <div className="App">

        <Routes>
          <Route path='/login' element={ <Login /> }></Route>
          <Route
            path='home'
            element={
              <PrivateRouter isAuth={isAuth}>
                <Home />
              </PrivateRouter>
            } 
          /> 
        </Routes>

      {/* <nav>
        <Link to='/login'>Login</Link>
      </nav> */}
    </div>
  );
}

export default App;

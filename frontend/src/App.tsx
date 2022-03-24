import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'

import Home from './Router/home/home';
import Login from './Router/login/login';
import PrivateRouter from './components/protectedRouter';


function App() {

  const user:any =  localStorage.getItem('isAuthenticate')
  const isAuth = JSON.parse(user)


  return (
    <div className="App">

      <Routes>
      <Route
          path='/'
          element={
            <PrivateRouter isAuth={isAuth}>
              <Home />
            </PrivateRouter>
          } 
        /> 
        <Route path='/login' element={ <Login /> }></Route>
        
        <Route path='*' element={ <p>There's nothing here: 404!</p> } />
      </Routes>

    </div>
  );
}

export default App;
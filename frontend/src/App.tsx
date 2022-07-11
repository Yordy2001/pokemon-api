
import { Routes, Route } from 'react-router-dom'
import PokeProfile from './Router/profile/pokemon_profile';

import Home from './Router/home/home';
import Login from './Router/login/login';
import Register from './Router/register/register';
import PrivateRouter from './utils/protectedRouter';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path='/pokemon'>
          <Route
            path=':pokeId'
            element={<PokeProfile />}
          />
        </Route>

        <Route
          path='/'
          element={
            <PrivateRouter>
              <Home />
            </PrivateRouter>
          }
        />


        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>

        <Route path='*' element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </div>
  );
}

export default App;

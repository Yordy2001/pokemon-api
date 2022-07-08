import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';

import Home from './Router/home/home';
import Login from './Router/login/login';
import Register from './Router/register/register';
import PrivateRouter from './utils/protectedRouter';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRouter>
              <Home />
            </PrivateRouter>
          }
        />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </div>
  );
}

export default App;

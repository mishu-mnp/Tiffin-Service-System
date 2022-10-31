import './App.css';
import TiffinAvailable from './components/TiffinAvailable/TiffinAvailable';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import OrderFood from './components/OrderFood/OrderFood';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Tiffin from './components/Tiffin/Tiffin';



function App() {
  // const classes = useStyles();

  return (
    <div className='App'>
      {/* <h1 className={classes.head}>Tiffin Service</h1> */}
      <Router>
        <Routes>
          <Route path='/'
            element={<>
              <Header />
              <Home />
              <OrderFood />
              <TiffinAvailable />
            </>}
          >
          </Route>
          <Route path='/register' element={<>
            <Header />
            <Register />
          </>}>
          </Route>
          <Route path='/login' element={<>
            <Header />
            <Login />
          </>}>
          </Route>
          <Route path='/view' element={<>
            <Header />
            <Tiffin />
          </>}>
          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;

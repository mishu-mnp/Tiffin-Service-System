import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import OrderFood from './components/OrderFood/OrderFood';
// import { useStyles } from './components/style'



function App() {
  // const classes = useStyles();

  return (
    <div className='App'>
      {/* <h1 className={classes.head}>Tiffin Service</h1> */}
      <Header />
      <Home />
      <OrderFood />
    </div>
  );
}

export default App;

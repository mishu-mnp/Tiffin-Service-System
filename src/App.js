import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
// import { useStyles } from './components/style'



function App() {
  // const classes = useStyles();

  return (
    <div className='App'>
      {/* <h1 className={classes.head}>Tiffin Service</h1> */}
      <Header />
      <Home />
    </div>
  );
}

export default App;

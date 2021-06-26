// import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/Nav'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import Youtube from './Components/Youtube/Youtube'
import Iphone from './Pages/Iphone/Iphone'
import productPage from './Pages/Productpage/Productpage'
import Four04 from './Pages/Four04/Four04'
import Mac from './Pages/Mac/Mac'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'


function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Switch>
<Route path="/" exact component={Main} />
        <Route path="/iphones" exact component={Iphone} />
        <Route path="/iphones/:pid" exact component={productPage} />
        <Route path="/mac" exact component={Mac} />
        <Route path="/" exact component={Four04} />
        </Switch>
        <Youtube />
      <Footer/>
      </div>
      </Router>
  );
}

export default App;

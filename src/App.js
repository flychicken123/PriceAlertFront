import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
import Home from './components/Home.jsx';
import ContactUs from './components/Contactus.jsx';
import Login from './components/Login';
import Signup from './components/Signup';
import Agreement from './components/Privacy.jsx';
import Term from './components/TermConditions.jsx';
const App = () => {
  return (

    <Router>
      <TopNavbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/contactus' component={ContactUs} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/agreement' component={Agreement} />
        <Route exact path='/term' component={Term} />
      </Switch>
    </Router>
  )
}

export default App;

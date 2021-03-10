import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
import Home from './components/Home.jsx';
import ContactUs from './components/Contactus.jsx';
const App = () => {
  return (

    <Router>
      <TopNavbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/contactus' component={ContactUs} />
      </Switch>
    </Router>
  )
}

export default App;

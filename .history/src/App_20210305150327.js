import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
const App = () => {
  return (
    <Router>
      <TopNavbar />
      <Switch>
        <Route path='/' />
      </Switch>
    </Router>
  )
}

export default App;

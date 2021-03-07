import logo from './logo.svg';
import './App.css';
import TopNavbar from './components/header';
const app=()=>{
  return(
    <Router>
      <TopNavbar/>
      <Switch>
        <Route path='/'/>
      </Switch>
    </Router>
  )
}

export default App;

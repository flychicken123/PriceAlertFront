import logo from './logo.svg';
import './App.css';
import TopNavbar from './components/TopNavbar';
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

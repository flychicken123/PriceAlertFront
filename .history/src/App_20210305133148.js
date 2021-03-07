import logo from './logo.svg';
import './App.css';

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

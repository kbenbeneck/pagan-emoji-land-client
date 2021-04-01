import './App.css';
import GameContainer from './containers/GameContainer';
import APIContainer from './containers/APIContainer';
import HowToPlay from './components/rules/HowToPlay'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link 
} from 'react-router-dom'

function App() {
  return (
    
      <Router>
        <div className="App"> 

          <nav>
            <Link to="/">Home</Link><br></br>
            
            <Link to="/games">Scores</Link><br></br>
            <Link to="/play">Game</Link><br></br> 
          </nav>

          <Switch>
            <Route path="/games"><APIContainer/></Route>
            <Route path="/play"><GameContainer/></Route>
            <Route path="/"><HowToPlay/></Route>
          </Switch>

        </div>

      </Router>

  );
}

export default App;

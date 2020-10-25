import './App.css';
import { Router } from "@reach/router";
import { NewForm } from './pages/NewForm';
import { Home } from './pages/Home';
import { ShowOne } from './pages/ShowOne';


function App() {
  return (
    <div className="App">
      <Router>
        <NewForm path="/pirate/new" />
        <Home path="/pirates" />
        <ShowOne path="/pirate/:id" />
      </Router>
    </div>
  );
}

export default App;

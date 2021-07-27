import logo from './logo.svg';
import './App.css';
import {Router} from '@reach/router';
import SignIn from './components/SignIn'

function App() {
  return (
    <div className="App">
      <Router>
        <SignIn path = "/"></SignIn>
      </Router>
    </div>
  );
}

export default App;

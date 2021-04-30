import './App.css';
import { Button } from 'reactstrap';
import Navigation from './components/Navigation'
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Button color="danger">Danger!</Button>
    </div>
  );
}

export default App;

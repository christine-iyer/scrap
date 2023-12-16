import spiral from './spiral.png'
import './App.css';
import StepA from './components/StepA';
import StepB from './components/StepB';
import StepC from './components/StepC';
import StepD from './components/StepD';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={spiral} className="App-logo" alt="logo" />

        <div className='container'>
        <StepA/>
        <StepB />
        <StepC/>
        <StepD />

        </div>

      </header>
    </div>
  );
}

export default App;

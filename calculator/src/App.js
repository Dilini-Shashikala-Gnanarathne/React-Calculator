import './App.css';
import bgPng from './assets/orange.png';
import Calculator from './components/Calculator';

function App() {
  const sciKey = ['cos', 'sin', 'ln', 'e', 'log', 'tan', 'pi', '^', '!', '√'];
  const basicKey = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '=', 'C', '.', '±', '%'];
  
  return (
    <div className="App">
      <div className="row">
        <div>
          hi
        </div>
        <div className="sci-keys">
          {sciKey.map(key => (
            <button key={key}>{key}</button>
          ))}
        </div>
      </div>
      
      <p>Developed by 👩‍💻 <span>Dilini Gnanarathne</span></p>
    </div>
  );
}

export default App;

import React from 'react';
import '../App.css';

const Keywindows = () => {
  const sciKey = ['cos', 'sin', 'ln', 'e', 'log', 'tan', 'pi', '^', '!', '√'];
  const basicKey = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '=', 'C', '.', '±', '%'];

  return (
    <div className="keywindows-container">
      <div className="scientific-keys">
        <h2>Scientific Keys</h2>
        <div className="keys">
          {sciKey.map(key => (
            <button key={key} className="key-button">
              {key}
            </button>
          ))}
        </div>
      </div>
      <div className="basic-keys">
        <h2>Basic Keys</h2>
        <div className="keys">
          {basicKey.map(key => (
            <button key={key} className="key-button">
              {key}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Keywindows;

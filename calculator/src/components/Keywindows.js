import React from 'react';

const Keywindows = () => {
  const sciKey = ['cos', 'sin', 'ln', 'e', 'log', 'tan', 'pi', '^', '!', '√'];
  const basicKey = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '=', 'C', '.', '±', '%'];

  return (
    <div>
      <div>
        <h2>Scientific Keys</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {sciKey.map(key => (
            <button key={key} style={{ margin: '5px' }}>
              {key}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h2>Basic Keys</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {basicKey.map(key => (
            <button key={key} style={{ margin: '5px' }}>
              {key}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Keywindows;

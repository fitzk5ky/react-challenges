import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);
  
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '20px' }}>
      <h1>Counter: {count}</h1>
      <div style={{ margin: '20px' }}>
        <button 
          onClick={() => {
            if (count < 100) {
              setCount(count + 1);
              setHistory([...history, "Increment"]);
            }
          }}
          style={{ 
            margin: '5px', 
            padding: '10px 15px', 
            fontSize: '16px' }}
        >
          Increment
        </button>
        <button 
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
              setHistory([...history, "Decrement"]);
            }
          }}
          style={{ 
            margin: '5px', 
            padding: '10px 15px', 
            fontSize: '16px' }}
        >
          Decrement
        </button>
        <button 
          onClick={() => {
            if (count * 2 <= 100) {
              setCount(count * 2);
              setHistory([...history, "Double"]);
            }
          }}
          style={{ 
            margin: '5px', 
            padding: '10px 15px', 
            fontSize: '16px' }}
        >
          Double
        </button>
        <button 
          onClick={() => setCount(0)}
          style={{ 
            margin: '5px', 
            padding: '10px 15px', 
            fontSize: '16px' }}
        >
          Reset
        </button>
              <div style={{ 
                marginTop: '30px', 
                padding: '20px', 
                backgroundColor: '#f5f5f5', 
                borderRadius: '8px' }}>
        <h3>History (Last 5 operations):</h3>
        {history.length === 0 ? (
          <p>No operations yet</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {history.slice(-5).map((operation, index) => (
              <li key={index} style={{ margin: '5px 0' }}>
                {operation}
              </li>
            ))}
          </ul>
        )}
      </div>
      </div>
    </div>
  );
}

export default Counter;
import logo from './logo.svg';
import world from './world.svg';
import './App.css';

const App2 = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <img src={world} className="App-logo"/>
      </header>
    </div>
  );
}
// function App1() {
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//     </div>
//   );
// }
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App2;

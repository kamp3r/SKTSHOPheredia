import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ya editado <code>src/App.js</code> espero que sea el inicio de un proyecto fructifero.
          sktShop en su prehistoria
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprendiendo React
        </a>
      </header>
    </div>
  );
}

export default App;

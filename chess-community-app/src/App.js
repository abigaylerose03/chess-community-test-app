import logo from './logo.svg';
import './App.css';
// Remove the import statement for ChessCommunity
// import ChessCommunity from './ChessCommunity';

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
      {/* Remove the ChessCommunity component */}
    </div>
  );
}

export default App;

import logo from './fgAppIcon.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>formgroup.io</h2>
        <p>Plattform for innovative solutions.</p>
        <p>This site is under constructions.</p>

        <a
          className="App-link"
          href="mailto:info@formgorup.io"
        >
          Contact
        </a>
      </header>
    </div>
  );
}

export default App;

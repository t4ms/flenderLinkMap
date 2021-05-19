import icon from './image/svg/fgAppIcon.svg';
import logo from './image/svg/formgroupLogo.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={icon} className="App-icon" alt="formgroup Icon" />
        <h2>Welcome to </h2><img src={logo} className="App-logo" alt="formgroup Logo"></img>
        <br></br>
        <p>Plattform for innovative solutions.</p>
        <p>This site is under constructions.</p>
        <br></br>
        <a
          className="App-link"
          href="mailto:info@formgorup.io"
        >
          Contact
        </a>
        <br></br>
        
      </header>
    </div>
  );
}

export default App;

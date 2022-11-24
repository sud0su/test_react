import logo from './logo.svg';
import './App.css';
import Store from './store';
import UserAvatar from './components/UserAvatar';

function App() {
  return (
    <Store>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <b>Test</b>
          <div className='container'>
            <UserAvatar name='Razinal Rahmat'/>
          </div>
        </header>
      </div>
    </Store>
  );
}

export default App;

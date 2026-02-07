import './App.css';
import logo from './assets/holberton-logo.jpg';

import Notifications from './Notifications';
import { getCurrentYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <div className="root-notifications">
        <Notifications />
      </div>

      <header className="App-header">
        <img src={logo} alt="holberton logo" />
        <h1>School dashboard</h1>
      </header>

      <main className="App-body">
        <p>Login to access the full dashboard</p>

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" />

        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" />

        <button>OK</button>
      </main>

      <footer className="App-footer">
        <p>
          <em>
            Copyright {getCurrentYear()} - {getFooterCopy(true)}
          </em>
        </p>
      </footer>
    </div>
  );
}

export default App;

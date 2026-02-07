import './App.css';
import logo from './assets/holberton-logo.jpg';

import Notifications from './Notifications';
import { getCurrentYear, getFooterCopy } from './utils';

export default function App() {
  return (
    <div className="App">
      <div className="root-notifications">
        <Notifications />
      </div>

      <header className="App-header">
        <img src={logo} alt="holberton logo" className="logo" />
        <h1>School dashboard</h1>
      </header>

      <main className="App-body">
        <p>Login to access the full dashboard</p>

        <form className="Login-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" />

          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" />

          <button type="submit">OK</button>
        </form>
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

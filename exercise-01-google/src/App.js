import React from "react";
import appIcon from "./app-icon.svg";
import logo from "./logo.png";
import "./App.css";

const App = () => (
  <div className="App">
    <header>
      <ul>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Store</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="">Gmail</a>
        </li>
        <li>
          <a href="">Images</a>
        </li>
        <li>
          <a href="" className="google-app-icon" title="Google apps">
            <img src={appIcon} alt="Google apps" width="14" height="14" />
          </a>
        </li>
        <li>
          <a className="cta" href="">
            Sign In
          </a>
        </li>
      </ul>
    </header>
    <main>
      <img src={logo} alt="Google" />
      <form className="search">
        <input />
        <div className="search-buttons">
          <button type="submit">Google Search</button>
          <button type="submit">I'm Feeling Lucky</button>
        </div>
      </form>
    </main>
    <footer>
      <ul>
        <li>
          <a href="">Advertising</a>
        </li>
        <li>
          <a href="">Business</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="">Privacy</a>
        </li>
        <li>
          <a href="">Terms</a>
        </li>
        <li>
          <a href="">Settings</a>
        </li>
      </ul>
    </footer>
  </div>
);

export default App;

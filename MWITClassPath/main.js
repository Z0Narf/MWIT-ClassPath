import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './style.css';
import javascriptLogo from './javascript.svg';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <div className="card">
        <button id="counter" type="button"></button>
      </div>
      <div className="card">
        <Link to="/page1">Go to page 1</Link>
      </div>
    </div>
  );
}

function Page1() {
  const url = 'https://youtu.be/62_osPKmIIg';

  return (
    <div>
      <h2>Page 1</h2>
      <div className="card">
        <button id="url" type="button" onClick={() => window.location.href = url}>Go to YouTube</button>
      </div>
      <div className="card">
        <Link to="/page2">Go to page 2</Link>
      </div>
    </div>
  );
}

function Page2() {
  const url = 'https://www.example.com/';

  return (
    <div>
      <h2>Page 2</h2>
      <div className="card">
        <button id="url" type="button" onClick={() => window.location.href = url}>Go to Example</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page1">Page 1</Link>
            </li>
            <li>
              <Link to="/page2">Page 2</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/page1">
            <Page1 />
          </Route>
          <Route path="/page2">
            <Page2 />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));



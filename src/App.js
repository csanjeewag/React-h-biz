import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link
} from "react-router-dom";
import Home from './component/Demo';
import './App.css';


function BlogPost() {
  let { slug } = useParams();
  return <div>Now showing post {slug}</div>;
}

function App() {
  return (
    <div className="App">


      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            
            <Link className="navbar-brand" to="/">Hsenid Biz</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ssoDemo">ssoDemo</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/config/:slug">Config</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Switch>
          <Route exact path="/React-h-biz">
            <Home />
          </Route>
          <Route exact path="/React-h-biz/ssoDemo">
            <Home />
          </Route>
          <Route path="config/:slug">
            <BlogPost />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

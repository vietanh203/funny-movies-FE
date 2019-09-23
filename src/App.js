import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Icon } from 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon/home'
import MoviesList from "./components/list-movies.component";
import Signin from "./components/signin.component";


class App extends Component {  
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#"><Icon size={40} icon={home}></Icon></a>
          <Link to="/" ><h1> Funny Movies</h1></Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            </ul>
            <Signin/>
          </div>
        </nav>
        <hr/>
        <div className="container-fluid">
          <div id="center-block">
              <MoviesList />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
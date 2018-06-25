import React, { Component } from "react";
import bagIcon from "./images/bag-icon.svg";
import logo from "./images/logo.svg";
import searchIcon from "./images/search-icon.svg";
import iPad from "./images/ipad.jpg";
import iPhoneX from "./images/iphone-x.jpg";
import macOS from "./images/macos.jpg";
import watchOS from "./images/watchos.jpg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <a href="" title="Home">
              <img src={logo} alt="Apple Logo" />
            </a>
            <a href="">Mac</a>
            <a href="">iPad</a>
            <a href="">iPhone</a>
            <a href="">Watch</a>
            <a href="">TV</a>
            <a href="">Music</a>
            <a href="">Support</a>
            <a href="" title="Search">
              <img src={searchIcon} alt="Search" />
            </a>
            <a href="" title="Shop">
              <img src={bagIcon} alt="Shop" />
            </a>
          </nav>
        </header>
        <main className="container-fluid">
          <div className="row gutter-12">
            <div className="col-xs-12">
              <div className="iphone-content">
                <h1>iPhone X</h1>
                <h2>Say hello to the future</h2>
                <img className="img-responsive" src={iPhoneX} alt="iPhone X" />
              </div>
            </div>
            <div className="col-xs-12">
              <div className="ipad-content">
                <h1>iPad</h1>
                <h2>Like a computer. Unlike any computer.</h2>
                <img className="img-responsive" src={iPad} alt="iPad" />
              </div>
            </div>
            <div className="col-sm-6 col-xs-12">
              <div
                className="macos-content half-content"
                style={{ backgroundImage: `url('${macOS}')` }}
              >
                <h3>macOS Mojave</h3>
                <h4>Simply powerful.</h4>
              </div>
            </div>
            <div className="col-sm-6 col-xs-12">
              <div
                className="watchos-content half-content"
                style={{ backgroundImage: `url('${watchOS}')` }}
              >
                <h3>watchOS 5</h3>
                <h4>Be more active. Stay better connected.</h4>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;

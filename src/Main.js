import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./Home";
  import Earrings from "./Earrings.js";
  import Rings from "./Rings";
  import Candles from "./Candles.js";
  import Necklace from "./Necklace";
  import Anklets from "./Anklets.js";
 
class Main extends Component {
  render() {
    return (
    <HashRouter>
        <div>
          <ul className="header">   
          <button className="register" type="button">Sign in</button>
          <button className="register" type="button">Register</button>
          <img src="/images/Iconlogo.jpg"alt=" "/>
          <h1>Dadirri Crystal<input type="text" id="search" placeholder="Search..." /></h1>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/Earrings">Earrings</NavLink></li>
            <li><NavLink to="/Rings">Rings</NavLink></li>
            <li><NavLink to="/Candles">Candles</NavLink></li>
            <li><NavLink to="/Necklace">Necklace</NavLink></li>
            <li><NavLink to="/Anklets">Anklets</NavLink></li>
          </ul>
          <div className="split1">
            <div className="line"></div>
          </div>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/earrings" component={Earrings}/>
            <Route path="/rings" component={Rings}/>
            <Route path="/candles" component={Candles}/>
            <Route path="/necklace" component={Necklace}/>
            <Route path="/anklets" component={Anklets}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;

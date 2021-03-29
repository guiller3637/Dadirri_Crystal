import React, { Component } from "react";
import banner from "./Images/DisscountsBanner.jpg";
import "./products.css";
import SelfLove from "./Images/self-Love.jpg";
import Prosperity from "./Images/Prosperry-candle.jpg";
import Joy from "./Images/joyCandle.jpg";
import Peace from "./Images/peaceCandle.jpg";
import bag from "./Images/bag.jpg";

 
class Candles extends Component {
  render() {
    return (
   <div className="contentEarrings">
    <img className='banner' src={banner}alt=" "/>
    <div className = "table">
    <ul className="earringProducts">
        <li><img className="product"src={SelfLove}alt=" "/><a>Self-Love Candle</a>
       <ul className="descriptionProduct">
       <p3>  $25.00   </p3>
           <li className="button"><img className="bag"src={bag}alt=" "/>
           <button className="addCart" type="button">ADD CART</button>
           </li>
      </ul>
        </li>
        <li><img className="product"src={Prosperity}alt=" "/><a>Prosperity Candle</a>
        <ul className="descriptionProduct">
        <p3>  $25.00   </p3>
           <li className="button"><img className="bag"src={bag}alt=" "/>
           <button className="addCart" type="button">ADD CART</button>
           </li>
      </ul>
      </li>
      
        <li><img className="product"src={Joy}alt=" "/><a>Joy Candle</a>
        <ul className="descriptionProduct">
        <p3>  $25.00   </p3>
           <li className="button"><img className="bag"src={bag}alt=" "/>
           <button className="addCart" type="button">ADD CART</button>
           </li>
      </ul>
      </li>
        <li><img className="product"src={Peace}alt=" "/><a>Peace Candle</a>
        <ul className="descriptionProduct">
        <p3>  $25.00   </p3>
           <li className="button"><img className="bag"src={bag}alt=" "/>
           <button className="addCart" type="button">ADD CART</button>
           </li>
      </ul>
      </li>
    </ul>
</div>

<div className="footer">
<div className="line3"></div>
<ul className="resources">
<li>Quick Links</li>
<li>Stone Meaning</li>
<li>Purifying Crystals</li>
<li>About Us</li>
<li>Contact Us</li>
</ul>
</div>
</div>
    );
  }
}

export default Candles;
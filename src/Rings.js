import React, { Component } from "react";
import banner from "./Images/DisscountsBanner.jpg";
import "./products.css";
import Design from "./Images/ringDesigns.jpg";
import Healing from "./Images/healing-crystals.jpg";
import bag from "./Images/bag.jpg";

 
class Rings extends Component {
  render() {
    return (
   <div className="contentEarrings">
    <img className='banner' src={banner}alt=" "/>
    <div className = "table">
    <ul className="earringProducts">
        <li><img className="product"src={Design}alt=" "/><a>Rings with Design</a>
       <ul className="descriptionProduct">
       <p3>  $85.00   </p3>
           <li className="button"><img className="bag"src={bag}alt=" "/>
           <button className="addCart" type="button">ADD CART</button>
           </li>
      </ul>
        </li>
        <li><img className="product"src={Healing}alt=" "/><a>Healing Crystal Rings</a>
        <ul className="descriptionProduct">
        <p3>  $95.99   </p3>
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

export default Rings;
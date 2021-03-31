import React, { Component } from "react";
import "./products.css";
import banner from "./Images/DisscountsBanner.jpg";
import earringGold from "./Images/Earring-gold.jpg";
import earringSilver from "./Images/Earring-silver.jpg";
import earringSpiral from "./Images/spiralEarring.jpg";
import earringMoon from "./Images/moonLove.jpg";
import bag from "./Images/bag.jpg";

 
class Earrings extends Component {
  render() {
    return (
   <div className="contentEarrings">
    <img className='banner' src={banner}alt=" "/>
    <div className = "table">
    <ul className="earringProducts">
        <li><img className="product"src={earringGold}alt=" "/><a>Small Spiral Earring - Gold</a>
       <ul className="descriptionProduct">
            <p3>  $45.99   </p3>
           <li className="button"><img className="bag"src={bag}alt=" "/>
           <button className="addCart" type="button">ADD CART</button>
           </li>
      </ul>
        </li>
        <li><img className="product"src={earringSilver}alt=" "/><a>Small Spiral Earrings - Silver</a>
        <ul className="descriptionProduct">
        <p3>  $49.99   </p3>
           <li className="button"><img className="bag"src={bag}alt=" "/>
           <button className="addCart" type="button">ADD CART</button>
           </li>
      </ul>
      </li>
        <li><img className="product"src={earringSpiral}alt=" "/><a>Spiral Earings</a>
        <ul className="descriptionProduct">
        <p3>  $65.00   </p3>
           <li className="button"><img className="bag"src={bag}alt=" "/>
           <button className="addCart" type="button">ADD CART</button>
           </li>
      </ul>
      </li>
        <li><img className="product"src={earringMoon}alt=" "/><a>Moon Love</a>
        <ul className="descriptionProduct">
        <p3>  $95.00   </p3>
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

export default Earrings;
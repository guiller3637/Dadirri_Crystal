import React, { Component } from "react";
import banner from "./Images/DisscountsBanner.jpg";
import "./products.css";
import Rose from "./Images/Rose-quartz.jpg";
import Amenthyst from "./Images/amenthys-rose.jpg";
import Circle from "./Images/circle.jpg";
import MoonStone from "./Images/moonstone.jpg";
import Zodiac from "./Images/zoodiact.jpg";
import bag from "./Images/bag.jpg";

 
class Necklace extends Component {
  render() {
    return (
   <div className="contentEarrings">
    <img className='banner' src={banner}alt=" "/>
    <div className = "table">
    <ul className="earringProducts">
        <li><img className="product"src={Rose}alt=" "/><a>Rose Quartz Necklace</a>
       <ul className="descriptionProduct">
       <p3>  $95.99   </p3>
           <li className="button"><img className="bag"src={bag}alt=" "/>
           <button className="addCart" type="button">ADD CART</button>
           </li>
      </ul>
        </li>
        <li><img className="product"src={Amenthyst}alt=" "/><a>Amethyst/Rose Quartz necklace</a>
        <ul className="descriptionProduct">
        <p3>  $150.00   </p3>
           <li className="button"><img className="bag"src={bag}alt=" "/>
           <button className="addCart" type="button">ADD CART</button>
           </li>
      </ul>
      </li>
      <li><img className="product"src={Circle}alt=" "/><a>Circle Necklace</a>
        <ul className="descriptionProduct">
        <p3>  $79.99   </p3>
           <li className="button"><img className="bag"src={bag}alt=" "/>
           <button className="addCart" type="button">ADD CART</button>
           </li>
      </ul>
      </li>
        <li><img className="product"src={MoonStone}alt=" "/><a>Moonstone Necklace</a>
        <ul className="descriptionProduct">
        <p3>  $105.00   </p3>
           <li className="button"><img className="bag"src={bag}alt=" "/>
           <button className="addCart" type="button">ADD CART</button>
           </li>
      </ul>
      </li>
        <li><img className="product"src={Zodiac}alt=" "/><a>Zodiac Sign Necklaces</a>
        <ul className="descriptionProduct">
        <p3>  $85.00   </p3>
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

export default Necklace;
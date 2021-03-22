import React, { Component } from "react";
import {
    NavLink,
    HashRouter
  } from "react-router-dom";
 
class Home extends Component {
  render() {
    return (
    <HashRouter>
      <div> 
<img className='background' src="/images/backgroundimage.jpg"alt=" "/>
<div className="line2"></div>
<h2>SHOP FOR</h2> 
<button className="moreCategories" type="button">More Categories -------&gt; </button>
<ul className="shopFor"> 
<li><img className="menu"src="/images/newDesigns.jpg"alt=" "/><NavLink to="/New">New Designs</NavLink></li>
<li><img className="menu" src="/images/earrings.jpg"alt=" "/><NavLink to="/Earrings">Earrings</NavLink></li>
<li><img className="menu" src="/images/rings.jpg"alt=" "/><NavLink to="/Rings">Rings</NavLink></li>
<li><img className="menu" src="/images/necklace.jpg"alt=" "/><NavLink to="/Necklace">Necklace</NavLink></li>
</ul>
<div className="line3"></div>
<div className="aboutus">
<h2>ABOUT US</h2>
<p> We believe it's magical when Mother Earth creates her own jewelry. "Crystals are the earth's DNA, a chemical
     imprint of evolution." Each Crystal is filled with their own healing properties for the mind, body and soul.
      The more we understand about crystals, the more powerful they are. "Crystals are efficient absorbers and 
      transmitters of energy." (Judy Hall) When we carefully wear crystals It can magically transform its surroundings 
      guarding us against any harm, boosts our energy, cleanse our space, attract wealth, increase mental abilities,
       enhance our intuition, & alleviate ourselves. When we take care of our crystals, they can change our life. 
       In order for Crystals to serve their purpose, We as the wearer need to learn how to purify them, through 
       cleansing, charging, and programming the crystal. As much as we want to be treated with respect, these crystal 
       deserve that amount of energy. </p>

<button className="learnMore" type="button">Learn More -------&gt; </button>
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
</HashRouter>
    );
  }
}
 
export default Home;
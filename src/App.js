import logo from './logo.png';
// CAROUSEL IMAGES
import image1 from './assets/image_slider1.jpg';
import image2 from './assets/image_slider2.jpg';
import image3 from './assets/image_slider3.jpg';
import image4 from './assets/image_slider4.jpg';
// OVER CAROUSEL IMAGES
import pickup1 from './assets/pick_up1.jpg';
import pickup2 from './assets/pick_up2.jpg';
import pickup3 from './assets/pick_up3.jpg';
import pickup4 from './assets/pick_up4.jpg';
import keepShopping1 from './assets/keep_shopping1.jpg';
import keepShopping2 from './assets/keep_shopping2.jpg';
import keepShopping3 from './assets/keep_shopping3.jpg';
import keepShopping4 from './assets/keep_shopping4.jpg';
import buyAgain1 from './assets/buy_again1.jpg';
import buyAgain2 from './assets/buy_again2.jpg';
import buyAgain3 from './assets/buy_again3.jpg';
import buyAgain4 from './assets/buy_again4.jpg';
import topDeal from './assets/topDeal.jpg'
import './App.css';
import { FaMapMarkerAlt, FaSearch, FaOpencart, FaTh } from 'react-icons/fa';
// HANDLES IMAGE CAROUSEL ON HOMEPAGE
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* BEGIN HEADER - LOGO */}
        <img src={logo} className="App-logo" alt="logo" />
        {/* DELIVER TO HEADER */}
        <div className='deliverToHeader'>
          <FaMapMarkerAlt className='locationIcon'/>
          <div className='deliverText'>
          <p>Deliver to Connor</p>
          <p className='bold'>Sandy 84092</p>
          </div>
        </div>
        {/* SEARCH BAR */}
        <div className='searchBarArea'>
          <select id='selectDepartment' className='selectDepartment'>
            <option selected>All</option>
            <option>Appliances</option>
            <option>Baby</option>
            <option>Gift Cards</option>
            <option>Smart Home</option>
            <option>Toys and Games</option>
          </select>
          <input type='search' placeholder='Search...' className='searchBar'></input>
          <FaSearch className='searchIcon'/>
        </div>
        {/* RIGHT SIDE HEADER INFORMATION */}
        <div className='rightSideHeader'>
        <select id='selectLanguage' className='selectLanguage'>
            <option selected>EN</option>
            <option>ES</option>
            <option>RUS</option>
            <option>FRN</option>
            <option>ITAL</option>
          </select>
          <div className='rightSideInformation'>
            <div className='hoverEffect'>
          <p>Hello, Connor<br/> <span className='bold'>Account & Lists</span></p>
          </div>
          <div className='hoverEffect'>
          <p>Returns<br/><span className='bold'>& Orders</span></p>
          </div>
          <div className='cartHeader'>
          <FaOpencart className='cartP'/>
          <p>Cart</p>
          </div>
          </div>
        </div>
      </header>
      {/* END HEADER */}


{/* BEGIN NAVIGATION */}
<div id='top'>
      <nav className='nav'>
        <ul className='navList'>
          <li className='navListHeavy'><FaTh className='allLogo'/>All</li>
          <li className='navListHeavy'>Medical Care & Pharmacy</li>
          <li className='navListHeavy'>Whole Foods</li>
          <li className='navListHeavy'>Coupons</li>
          <li className='navListHeavy'>Household, Health & Baby Care</li>
          <li className='navListHeavy'>Amazon Basics</li>
          <li className='navListHeavy'>Pet Supplies</li>
          <li className='navListHeavy end3'>Today's Deals</li>
          <li className='navListHeavy end2'>Beauty & Personal Care</li>
          <li className='navListHeavy end1'>Home Improvement</li>
          <li className='navListHeavy end'>Smart Home</li>
          <span className='bold navRight'><li>Most-loved school picks under $20</li></span>
        </ul>
      </nav>
</div>

      {/* BEGIN MAIN HTML */}
      <main>
        <div className='carouselContainer'>
      <Carousel className='carouselMain'>
                <div className='fade-img'>
                    <img src= {image1}/>
                </div>
                <div  className='fade-img'>
                    <img src= {image2} />
                </div>
                <div  className='fade-img'>
                    <img src= {image3} />
                </div>
                <div  className='fade-img'>
                    <img src= {image4} />
                </div>
            </Carousel>
            </div>
            <div className='outer'>
          <div className='overCarouselImages'>
            <div className='areaImage1'>
              <h2 className='bold'>Pick up where you left off</h2>
              <div className='imageHolder'>
              <div className='imageContainer'><img src= {pickup1}/><p>Maisto 1:18 Special Edition</p></div>
              <div className='imageContainer'><img src= {pickup2}/><p>Maisto 1:18 Special Edition</p></div>
              <div className='imageContainer'><img src= {pickup3}/><p>2020 Chevrolet Corvette</p></div>
              <div className='imageContainer'><img src= {pickup4}/><p>Maisto 1:18 Special Edition</p></div>
              </div>
            </div>
            <div className='areaImage2'>
            <h2 className='bold'>Keep shopping for</h2>
            <div className='imageHolder'>
            <div className='imageContainer'><img src= {keepShopping1}/><p>Diuretic Supplements</p></div>
            <div className='imageContainer'><img src= {keepShopping2}/><p>Fantasy romance eb...</p></div>
            <div className='imageContainer'><img src= {keepShopping3}/><p>Dog Shedding Tools</p></div>
            <div className='imageContainer'><img src= {keepShopping4}/><p>Dog training clickers</p></div>
            </div>
              </div>
              <div className='areaImage3'>
              <h2 className='bold'>Buy again</h2>
              <div className='imageHolder'>
              <div className='imageContainer'><img src= {buyAgain1}/></div>
              <div className='imageContainer'><img src= {buyAgain2}/></div>
              <div className='imageContainer'><img src= {buyAgain3}/></div>
              <div className='imageContainer'><img src= {buyAgain4}/></div>
              </div>
              </div>
              <div className='areaImage4'>
              <h2 className='bold'>Top deal</h2>
              <div className='imageContainer'><img src= {topDeal}/></div>
              </div>
          </div>
          </div>
      </main>

      {/* BEGIN FOOTER HTML */}
    <footer>
    <div className='topFooter'>
      <a href='#top'><p>Back to top</p></a>
    </div>
    <div className='mainFooter'>
      <div className='footer1'>
        <h3>Get to Know Us</h3>
        <ul className='footerList'>
          <a href="#"><li>Careers</li></a>
          <a href="#"><li>Amazon Newsletter</li></a>
          <a href="#"><li>About Amazon</li></a>
          <a href="#"><li>Accessibility</li></a>
          <a href="#"> <li>Sustainability</li></a>
          <a href="#"><li>Press Center</li></a>
        </ul>

      </div>
      <div className='footer2'>
        <h3>Make Money with Us</h3>
        <ul className='footerList'>
        <a href="#"><li>Sell products on Amazon</li></a>
        <a href="#"> <li>Sell apps on Amazon</li></a>
        <a href="#"><li>Supply to Amazon</li></a>
        <a href="#"><li>Protect & Build Your Brand</li></a>
        <a href="#"><li>Become an Affiliate</li></a>
        <a href="#"><li>Become a Delivery Driver</li></a>
        <a href="#"> <li>Start a Package Delivery Business</li></a>
        <a href="#"><li>Self-Publish with Us</li></a>
        </ul>

      </div>
      <div className='footer3'>
        <h3>Amazon Payment Products</h3>
        <ul className='footerList'>
        <a href="#"><li>Amazon Visa</li></a>
        <a href="#"><li>Amazon Store Card</li></a>
        <a href="#"> <li>Amazon Secured Card</li></a>
        <a href="#"><li>Amazon Business Card</li></a>
        <a href="#"><li>Shop with Points</li></a>
        <a href="#"> <li>Credit Card Marketplace</li></a>
        <a href="#"> <li>Reload Your Balance</li></a>
        <a href="#"><li>Gift Cards</li></a>
        </ul>

      </div>
      <div className='footer4'>
        <h3>Let Us Help You</h3>
        <ul className='footerList'>
          <li href="#">Amazon and COVID-19</li>
          <li href="#">Your Account</li>
          <li href="#">Your Orders</li>
          <li href="#">Shipping Rates & Policies</li>
          <li href="#">Amazon Prime</li>
          <li href="#">Returns & Replacements</li>
          <li href="#">Manage Your Content and Devices</li>
          <li href="#">Your Recalls and Product Safety Alerts</li>
          <li href="#">Help</li>
        </ul>
      </div>
    </div>
    <hr className='hr'/>
    <div className='mainFooter'>
    <img src={logo} className="footer-logo" alt="logo" />
    <select id='selectLanguage' className='selectLanguage'>
            <option selected>English</option>
            <option>ES</option>
            <option>RUS</option>
            <option>FRN</option>
            <option>ITAL</option>
          </select>
    </div>
    <div className='bottomFooter'>
    <div className='botfooter1'>
      <p><span class='bold'>Amazon Music</span><br/>Stream Millions of Songs</p>
      </div>
      <div className='botfooter2'>
      <p><span class='bold'>Amazon Advertising</span><br/>Find, attract, and engage customers</p>
      </div>
      <div className='botfooter3'>
      <p><span class='bold'>6pm</span><br/>Score deals on fashion brands</p>
      </div>
      <div className='botfooter4'>
      <p><span class='bold'>AbeBooks</span><br/>Books, art & collectibles</p>
      </div>
      <div className='botfooter5'>
      <p><span class='bold'>ACX</span><br/>Audiobook Publishing Made Easy</p>
      </div>
      <div className='botfooter6'>
      <p><span class='bold'>Sell on Amazon</span><br/>Start a Selling Account</p>
      </div>
      <div className='botfooter7'>
      <p><span class='bold'>Amazon Business</span><br/>Everything for Your Business</p>
      </div>
      <div className='botfooter8'>
      <p><span class='bold'>Amazon Fresh</span><br/>Groceries & More Right To Your Door</p>
      </div>
      <div className='botfooter9'>
      <p><span class='bold'>AmazonGlobal</span><br/>Ship Orders Internationally</p>
      </div>
      <div className='botfooter10'>
      <p><span class='bold'>HomeServices</span><br/>Experienced Pros Happiness Guarantee</p>
      </div>
      <div className='botfooter11'>
      <p><span class='bold'>Amazon Web Services</span><br/>Scalable Cloud Computing Services</p>
      </div>
      <div className='botfooter12'>
      <p><span class='bold'>Audible</span><br/>Listen to Books & Original Audio Performances</p>
      </div>
    </div>
    </footer>

    </div>
  );
}

export default App;

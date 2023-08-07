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
              <div className='imageContainer'><img src= {pickup3}/><p>2020 Chevrolet Sorvette</p></div>
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
          <li>Example</li>
          <li>Example</li>
          <li>Example</li>
          <li>Example</li>
        </ul>

      </div>
      <div className='footer2'>
        <h3>Make Money with Us</h3>
        <ul className='footerList'>
          <li>Example</li>
          <li>Example</li>
          <li>Example</li>
          <li>Example</li>
        </ul>

      </div>
      <div className='footer3'>
        <h3>Amazon Payment Products</h3>
        <ul className='footerList'>
          <li>Example</li>
          <li>Example</li>
          <li>Example</li>
          <li>Example</li>
        </ul>

      </div>
      <div className='footer4'>
        <h3>Let Us Help You</h3>
        <ul className='footerList'>
          <li>Example</li>
          <li>Example</li>
          <li>Example</li>
          <li>Example</li>
        </ul>
      </div>
    </div>
    <hr className='hr'/>
    <div className='mainFooter'>
    <img src={logo} className="footer-logo" alt="logo" />
    </div>
    <div className='bottomFooter'>
    <div className='botfooter1'>
        <h3>Get to Know Us</h3>
        <ul className='footerList'>
          <li>Example</li>
          <li>Example</li>
          <li>Example</li>
          <li>Example</li>
        </ul>

      </div>
      <div className='botfooter2'>
        <h3>Make Money with Us</h3>
        <ul className='footerList'>
          <li>Example</li>
          <li>Example</li>
          <li>Example</li>
          <li>Example</li>
        </ul>

      </div>
      <div className='botfooter3'>
        <h3>Amazon Payment Products</h3>
        <ul className='footerList'>
          <li>Example</li>
          <li>Example</li>
          <li>Example</li>
          <li>Example</li>
        </ul>

      </div>
      <div className='botfooter4'>
        <h3>Let Us Help You</h3>
        <ul className='footerList'>
          <li>Example</li>
          <li>Example</li>
          <li>Example</li>
          <li>Example</li>
        </ul>
      </div>
    </div>
    </footer>

    </div>
  );
}

export default App;

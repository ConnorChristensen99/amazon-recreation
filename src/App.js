import logo from './logo.png';
import './App.css';
import { FaMapMarkerAlt, FaSearch, FaOpencart, FaTh } from 'react-icons/fa';

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
      <nav className='nav'>
        <ul className='navList'>
          <li className='navListHeavy'><FaTh className='allLogo'/>All</li>
          <li className='navListHeavy'>Medical Care & Pharmacy</li>
          <li className='navListHeavy'>Whole Foods</li>
          <li className='navListHeavy'>Coupons</li>
          <li className='navListHeavy'>Household, Health & Baby Care</li>
          <li className='navListHeavy'>Amazon Basics</li>
          <li className='navListHeavy'>Pet Supplies</li>
          <li className='navListHeavy'>Today's Deals</li>
          <li className='navListHeavy'>Beauty & Personal Care</li>
          <li className='navListHeavy'>Home Improvement</li>
          <li className='navListHeavy'>Smart Home</li>
          <span className='bold'><li>Most-loved school picks under $20</li></span>
        </ul>
      </nav>


      {/* BEGIN MAIN HTML */}
      <main>
      

      </main>


    </div>
  );
}

export default App;

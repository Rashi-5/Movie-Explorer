import React, {useState} from "react";
import { Link } from 'react-router-dom';
import "../../styles/navbar.css";
import home from "../../assets/ihome.png";
import fav from "../../assets/fav.png";
import search from "../../assets/search.png";
import movie from "../../assets/movie.png";

export default function Hamburger() {

  const [activeTab, setActiveTab] = useState('home'); 

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  }

  return (
    <div className="hamburger-menu">
      <nav className="menu"> 
        <div className="logo-card"> 
          <img className="logo" src={movie} alt="logo"/>
          <span> Movie Peek </span> 
        </div>

          <ul>
          <li className={activeTab === 'home' ? 'active' : ''}>
            <Link to="/" onClick={() => handleTabClick('home')}>
              <img className="icon" src={home} alt="home" />
            </Link>
          </li>
          <li className={activeTab === 'fav' ? 'active' : ''}>
            <Link to="/fav" onClick={() => handleTabClick('fav')}>
              <img className="icon" src={fav} alt="fav" />
            </Link>
          </li>
          <li className={activeTab === 'search' ? 'active' : ''}>
            <Link to="/search" onClick={() => handleTabClick('search')}>
              <img className="icon" src={search} alt="search" />
            </Link>
          </li>
          </ul>
        </nav>
    </div>
  );
}

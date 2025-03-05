import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaHome, FaUser,FaShoppingCart, FaPhoneAlt, FaFutbol, FaMusic } from 'react-icons/fa'; // Importer les icônes


export default function Navbar() {
  return (
    <div>
          <div className="P-NAV">


              <ul className="left-items">
                <li>
                  <Link to="/" className="logo">Logo</Link>
                </li>
                <li>
                  <input type="search" placeholder="rechercher"   />    
                </li>
              </ul>


              <ul className="right-items">
                <li>
                  <Link to="/seconnecter" className=""> <FaUser/>  SECONNECTER</Link>
                </li>
                <li>
                  <Link to="/panier" className=""> <FaShoppingCart/>  PANIER</Link>
                </li>
              </ul>


          </div>


          <div className="D-NAV">
            <Link to="/">  <FaHome/>  ACCEUIL</Link>
            <Link to="/can">  <FaFutbol/>   CAN 25  </Link>
            <Link to="/concerts">  <FaMusic/>  CONCERT ET FESTIVALS</Link>
            <Link to=""> <FaPhoneAlt/>   ABOUT US</Link>
          </div>
    </div>
   
  );
}

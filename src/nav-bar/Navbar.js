import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaHome, FaUser, FaShoppingCart, FaPhoneAlt, FaFutbol, FaMusic } from 'react-icons/fa';
import Login from '../Login/Login';  // Si tu es dans le dossier src/nav-bar


export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true); // Afficher la page de connexion
  };

  const handleCloseLogin = () => {
    setShowLogin(false); // Fermer la page de connexion
  };

  return (
    <div>
      <div className="P-NAV">
        <ul className="left-items">
          <li>
            <Link to="/" className="logo">WRI9A</Link>
          </li>
          <li>
            <input type="search" placeholder="rechercher" />
          </li>
        </ul>

        <ul className="right-items">
          <li>
          <Link  onClick={handleLoginClick} className=""> 
              <FaUser /> SECONNECTER
            </Link>
          </li>
          <li>
            <Link to="/panier" className=""> 
              <FaShoppingCart /> PANIER
            </Link>
          </li>
        </ul>
      </div>

      <div className="D-NAV">
        <Link to="/"> <FaHome /> ACCEUIL</Link>
        <Link to="/can"> <FaFutbol /> CAN 25 </Link>
        <Link to="/concerts"> <FaMusic /> CONCERT ET FESTIVALS</Link>
        <Link to="/about"> <FaPhoneAlt /> ABOUT US</Link>
      </div>

      {showLogin && (
        <div className="login-overlay">
          <div className="login-box">
            <Login />
            <button className="close-btn" onClick={handleCloseLogin}>X</button> {/* Bouton pour fermer */}
          </div>
        </div>
      )}
    </div>
  );
}

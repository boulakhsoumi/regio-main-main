import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaWhatsapp, FaInstagram } from "react-icons/fa";
import FooterImage from "./img1.png"; // Assurez-vous que l'image est dans le bon dossier

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h3>À propos</h3>
          <p>Un site de billetterie nouvelle génération vous offrant la possibilité d’acheter en ligne des tickets pour les événements de votre choix...</p>
        </div>
        
        <div className="footer-section">
          <h3>Liens utiles</h3>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/concerts">Concerts</Link></li>
            <li><Link to="/matchs">Matchs</Link></li>
            <li><Link to="/contact">À propos</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Suivez-nous</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://wa.me/212600000000" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email : <a href="mailto:support@billetterie.com">support@billetterie.com</a></p>
          <p>Téléphone : <a href="tel:+212600000000">+212 6 00 00 00 00</a></p>
        </div>
        
        {/* Nouvelle section pour afficher l'image */}
        <div className="footer-section footer-image no-bg">
          <img src={FooterImage}  className="footer-logo" />
        </div>
      </div>

      <p className="copyright">© 2025 Billetterie. Tous droits réservés.</p>
    </footer>
  );
}
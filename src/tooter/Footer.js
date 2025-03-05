import { Link } from "react-router-dom";
import "./Footer.css"; // Assurez-vous d'ajouter un fichier CSS pour le style
import { FaFacebookF, FaTwitter, FaWhatsapp, FaPinterestP } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>À propos</h3>
          <p>Un site de billetterie nouvelle génération vous offrant la possibilité d’acheter en ligne des tickets pour les événements de votre choix. Sa vocation est de vous proposer l’offre de concerts, sports, spectacles, cinéma, festivals, théâtre, humour, voyages et evasions la plus large du Maroc en collaboration avec les organisateurs d’événements.</p>
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
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
              <FaTwitter />
            </a>
            <a href="https://wa.me/212600000000" target="_blank" rel="noopener noreferrer" title="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" title="Pinterest">
              <FaPinterestP />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email : <a href="mailto:support@billetterie.com">support@billetterie.com</a></p>
          <p>Téléphone : <a href="tel:+212600000000">+212 6 00 00 00 00</a></p>
        </div>
      </div>

      <p className="copyright">© 2025 Billetterie. Tous droits réservés.</p>
    </footer>
  );
}

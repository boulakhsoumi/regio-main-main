import React from 'react';
import './About.css';
import Navbar from './nav-bar/Navbar';
import Footer from './tooter/Footer';

function About() {
  return (
    <div className="about-container">
      <Navbar />
      <div className="overlay"></div>
      
      <div className="container">
        <header className="App-header">
          <h1>Qui sommes nous ?</h1>
        </header>
        <section className="content">
          <p>Guichet.ma est une plateforme innovante dédiée aux bonnes affaires en ligne. Véritable guichet unique, le site internet et l’application Guichet.ma vous permettent d’acheter en un clic vos tickets d’événements à prix coûtant ou de profiter de deals à prix réduits.</p>
          
          <p>Tout est simplifié pour vous permettre d’économiser du temps, de l’énergie et de l’argent. Chaque produit ou service qui vous intéresse fait l’objet d’un compte à rebours.</p>
          
          <h2>Vous êtes acheteur</h2>
          <p>La démarche d’inscription est simple. En 60 secondes chrono, vous pouvez créer votre compte utilisateur pour acheter des tickets ou pour profiter de deals. Les transactions se font en ligne : choisissez le(s) produits ou services qui vous intéressent, ajoutez-les dans le panier en un clic, optez pour un mode de paiement (sécurisé online, Wafacash ou autre), enregistrez ou imprimez votre bon d’achat envoyé par e-mail… Ensuite, rendez-vous à votre événement (billetterie) ou chez votre vendeur (deal).</p>
          
          <h2>Vous êtes vendeur</h2>
          <p>Inscrivez-vous en ligne ou contactez notre service commercial pour connaître nos conditions de vente. Proposez votre produit ou service à vendre en indiquant soigneusement le prix, les quantités, les dates de mise à disposition et autres modalités. Suivez en temps réel l’évolution de votre offre à travers divers indicateurs : compte à rebours, nombre de clics, d’achats.</p>
          
          <h3>1. BILLETS & TICKETS</h3>
          <p>Guichet.ma simplifie vos achats/ventes de tickets et billets pour tous types d’événements (pièces de théâtre, matchs de football, concerts de musique, festivals, formations, etc.).</p>
          
          <h3>Pour en savoir plus</h3>
          <p>Guichet.ma est une plateforme d’intermédiation entre clients et vendeurs développée par l’entreprise Guichet Maroc SARL basée à Casablanca. Créée en 2018, Guichet Maroc est une société spécialisée dans la vente et la commercialisation de la billetterie.</p>
        </section>
      </div>
      <Footer/>
    </div>
  );
}

export default About;

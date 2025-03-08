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
          <h1>Qui sommes-nous ?</h1>
        </header>
        
        <section className="content">
          <p><strong>WRI9A</strong> est une plateforme innovante dédiée aux bonnes affaires en ligne. Véritable guichet unique, le site internet et l’application **WRI9A** vous permettent d’acheter en un clic vos tickets d’événements à prix coûtant ou de profiter d’offres exclusives à prix réduits.</p>
          
          <p>Tout est simplifié pour vous permettre d’économiser du temps, de l’énergie et de l’argent. Chaque produit ou service qui vous intéresse est accompagné d’un **compte à rebours** indiquant sa disponibilité.</p>
          
          <h2>Vous êtes acheteur</h2>
          <p>L’inscription est rapide et simple. En **60 secondes chrono**, créez votre compte utilisateur et accédez à une multitude d’événements et d’offres exclusives.</p>
          
          <ul>
            <li>Ajoutez les billets ou deals à votre panier.</li>
            <li>Choisissez votre mode de paiement (paiement sécurisé en ligne, Wafacash, etc.).</li>
            <li>Recevez votre bon d’achat ou e-ticket par e-mail.</li>
            <li>Profitez de votre événement ou de votre offre en toute sérénité.</li>
          </ul>

          <h2>Vous êtes vendeur</h2>
          <p>Inscrivez-vous en ligne ou contactez notre service commercial pour découvrir nos **conditions de vente avantageuses**. Mettez en ligne votre produit ou service en définissant le prix, les quantités disponibles et les dates de mise en vente.</p>
          
          <h3>🎟️ BILLETS & TICKETS</h3>
          <p>**WRI9A** facilite l’achat et la vente de **tickets et billets** pour tous types d’événements : **pièces de théâtre, matchs de football, concerts, festivals, formations** et bien plus encore.</p>
          
          <h3>📍 À propos</h3>
          <p>**WRI9A** est une plateforme d’intermédiation entre clients et vendeurs, développée par **WRI9A SARL**, une entreprise basée à Casablanca. Créée en **2018**, **WRI9A SARL** est spécialisée dans la vente et la commercialisation de la billetterie et des offres exclusives.</p>

          <p>🔥 **Rejoignez-nous dès maintenant et accédez aux meilleures offres en un clic !**</p>
        </section>
      </div>
      
      <Footer />
    </div>
  );
}

export default About;

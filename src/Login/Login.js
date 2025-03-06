import React from 'react';
import './Login.css'; // Assure-toi d'avoir les styles correspondants

export default function Login() {
    return (
        <div className='login-container'>
            <div className='login-box'>
                <h2>Connexion</h2>
                <form>
                    <input type="email" placeholder="Votre adresse e-mail" required className='input-field' />
                    <input type="password" placeholder="Votre Mot de passe" required className='input-field' />
                    <a href="#" className='forgot-password'>Mot de passe oublié?</a>
                    <button type="submit" className='login-button'>Connexion</button>
                </form>
                <p className='social-text'>Ou essayez avec vos réseaux sociaux</p>
                <div className='social-buttons'>
                    <a href='https://www.facebook.com'><button className='facebook-button'>Facebook</button></a>
                    <a href='https://accounts.google.com/signin'><button className='google-button'>Google+</button></a>
                </div>
            </div>
            
            <div className='separator'>Ou</div>

            <div className='signup-box'>
                <h2>Nouveau compte</h2>
                <form>
                    <input type="text" placeholder="Votre nom" required className='input-field' />
                    <input type="text" placeholder="Votre prénom" required className='input-field' />
                    <input type="email" placeholder="Votre adresse e-mail" required className='input-field' />
                    <input type="tel" placeholder="Votre téléphone" required className='input-field' />
                    <input type="password" placeholder="Mot de passe" required className='input-field' />
                    <input type="password" placeholder="Confirmer le mot de passe" required className='input-field' />
                    <button type="submit" className='signup-button'>Inscription</button>
                </form>
                <p className='social-text'>Ou inscrivez-vous avec vos réseaux sociaux:</p>
                <div className='social-buttons'>
                    <a href='https://www.facebook.com'><button className='facebook-button'>Facebook</button></a>
                    <a href='https://accounts.google.com/signin'><button className='google-button'>Google+</button></a>
                </div>
            </div>
        </div>
    );
}

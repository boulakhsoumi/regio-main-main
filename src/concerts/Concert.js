import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Concert.css";
import concerts from "./DataConcert"; // DataConcert.js فيها الكونسرات

function calculateTimeLeft(targetDate) {
    const difference = new Date(targetDate) - new Date();
    if (difference <= 0) return null;

    return {
        jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
        heures: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        secondes: Math.floor((difference / 1000) % 60),
    };
}

export default function Concert() {
    return (
        <div className="concert-container1">
            <h1 className="concert-title1">Concerts & Festivals</h1>
            <div className="concert-grid">
                {concerts.map((concert, index) => (
                    <ConcertCard key={index} concert={concert} />
                ))}
            </div>

            {/* Voir Plus */}
            <div className="voir-plus-container">
                <Link to="/concerts" className="voir-plus-btn">Voir Plus</Link>
            </div>
        </div>
    );
}

function ConcertCard({ concert }) {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(concert.date + "T" + concert.heure));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(concert.date + "T" + concert.heure));
        }, 1000);

        return () => clearInterval(timer);
    }, [concert.date, concert.heure]);

    return (
        <div className="concert-card">
            <img src={`/images/${concert.img}`} alt={concert.titre} className="concert-image" />
            <div className="concert-info">
                <div className="concert-title-small">{concert.titre}</div>
                <div className="concert-lieu">📍 {concert.lieu}</div>

                <div className="countdown-timer">
                    {timeLeft ? (
                        <>
                            ⏱️ {timeLeft.jours} j {timeLeft.heures} h {timeLeft.minutes} m {timeLeft.secondes} s
                        </>
                    ) : (
                        <span className="concert-started">🚨 L'événement a commencé !</span>
                    )}
                </div>

                <div className="concert-price">
                    À partir de <span className="static-price">{concert.prix} MAD</span>
                </div>
            </div>
            <button className="buy-ticket-btn">Acheter</button>
        </div>
    );
}

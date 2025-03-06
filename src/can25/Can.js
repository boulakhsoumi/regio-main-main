import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // ضروري باش نستعمل Link
import "./Can.css";
import matches from "./DataCan"; // DataCan.js فيها الماتشات

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

export default function Can() {
    return (
        <div className="can25-container">
            <h1 className="can25-title">CAN25</h1>
            <div className="can25-grid">
                {matches.map((match, index) => (
                    <MatchCard key={index} match={match} />
                ))}
            </div>

            {/* Bouton Voir Plus */}
            <div className="voir-plus-container">
                <Link to="/can25" className="voir-plus-btn">Voir Plus</Link>
            </div>
        </div>
    );
}

function MatchCard({ match }) {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(match.date + "T" + match.time));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(match.date + "T" + match.time));
        }, 1000);

        return () => clearInterval(timer);
    }, [match.date, match.time]);

    return (
        <div className="match-card">
            <img src={`/images/${match.img}`} alt={match.teams} className="match-image" />
            <div className="match-info">
                <div className="match-teams">{match.teams}</div>
                <div className="match-stadium">📍 {match.stadium}</div>

                <div className="countdown-timer">
                    {timeLeft ? (
                        <>
                            ⏱️ {timeLeft.jours} j {timeLeft.heures} h {timeLeft.minutes} m {timeLeft.secondes} s
                        </>
                    ) : (
                        <span className="match-started">🚨 Le match a commencé !</span>
                    )}
                </div>

                <div className="match-price">
                    À partir de <span className="static-price">{match.prix} MAD</span>
                </div>
            </div>
            <button className="buy-ticket-btn1">Acheter</button>
        </div>
    );
}

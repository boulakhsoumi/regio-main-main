import React, { useState, useEffect } from "react";
import './animation.css';

const images = [
    { src: "/images/event1.jpg", alt: "Event 1" },
    { src: "/images/event2.png", alt: "Event 2" },
    { src: "/images/event3.jpg", alt: "Event 3" },
    { src: "/images/event4.png", alt: "Event 4" },
    { src: "/images/event5.jpg", alt: "Event 5" },
    { src: "/images/event6.jpg", alt: "Event 6" },
    { src: "/images/event7.jpg", alt: "Event 7" },
    { src: "/images/event8.jpg", alt: "Event 8" }
];

const itemsPerPage = 4;

export default function Animation() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % Math.ceil(images.length / itemsPerPage));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + Math.ceil(images.length / itemsPerPage)) % Math.ceil(images.length / itemsPerPage));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 2000); // كل 4 ثواني يتبدل
        return () => clearInterval(interval); // نوقف المؤقت إذا تبدل الكمبوننت
    }, [currentIndex]);

    const startIndex = currentIndex * itemsPerPage;
    const visibleImages = images.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="sliderR-container">
            <div className="slider-images">
                {visibleImages.map((img, index) => (
                    <div className="slider-item" key={index} tabIndex="0">
                        <img src={img.src} alt={img.alt} />
                        <button className="buy-button">Acheter Maintenant</button>
                    </div>
                ))}
            </div>

            <div className="slider-dots">
                {Array.from({ length: Math.ceil(images.length / itemsPerPage) }).map((_, index) => (
                    <span
                        key={index}
                        className={index === currentIndex ? "dot active" : "dot"}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}

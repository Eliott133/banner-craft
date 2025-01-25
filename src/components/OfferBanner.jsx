import React, { useState, useEffect } from "react";

export default function OfferBanner({
    description,
    ctaText,
    originalPrice,
    newPrice,
    language,
    timerEndDate,
    backgroundColor
}) {
    // State for remaining time
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(timerEndDate));

    const backgroundColorCta = backgroundColor.split(",").map((color) => parseInt(color) + 40).join(",");

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft(timerEndDate));
        }, 1000);

        return () => clearInterval(interval);
    }, [timerEndDate]);

    // Function to calculate remaining time
    function calculateTimeLeft(endDate) {
        const now = new Date();
        const timeRemaining = new Date(endDate) - now;

        if (timeRemaining <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

        return {
            days: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
            hours: Math.floor((timeRemaining / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((timeRemaining / 1000 / 60) % 60),
            seconds: Math.floor((timeRemaining / 1000) % 60),
        };
    }

    // Return localized text for days, hours, minutes, and seconds
    const labels = {
        en: ["Days", "Hours", "Minutes", "Seconds"],
        fr: ["Jours", "Heures", "Minutes", "Secondes"],
        // Add other languages as needed
    };

    return (
        <div className="rounded-xl shadow-lg relative container mx-auto px-4 mb-6 fixed-banner"
        style={{ backgroundColor: `rgb(${backgroundColor})` }}>
            <div className="hidden md:flex items-center p-4 max-w-6xl mx-auto">
                <div className={`flex-1 flex items-center justify-center gap-16`}>

                    <div className="">
                        <p className="text-xl font-semibold text-gray-100">{description}</p>
                    </div>

                    <div className="flex gap-4">
                            {["days", "hours", "minutes", "seconds"].map((unit, index) => (
                                <div key={unit} className="text-center">
                                    <div className={`rounded-lg w-[70px] h-[70px] flex flex-col items-center justify-center`}
                                        style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
                                        <span className="text-xl font-bold text-white leading-none">{timeLeft[unit]}</span>
                                    </div>
                                    <p className="text-xs text-white mt-1">{labels[language][index]}</p>
                                </div>
                            ))}
                    </div>

                    <div className="flex items-center gap-6">
                        <p className="text-lg line-through text-white">{originalPrice}</p>
                        <p className="text-xl text-white font-bold ml-2">{newPrice}</p>
                        <button className={`text-white px-6 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer`}
                            style={{ backgroundColor: `rgb(${backgroundColorCta})` }}>
                            {ctaText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

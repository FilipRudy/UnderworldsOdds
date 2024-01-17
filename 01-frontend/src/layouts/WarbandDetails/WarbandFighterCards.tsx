import React, { useState } from "react";
import "../../css/WarbandDetails/WarbandFighterCards.css";

interface WarbandFighterCardsProps {
    directory?: string;
    numberOfCards?: number;
}

export const WarbandFighterCards: React.FC<WarbandFighterCardsProps> = ({ directory = "", numberOfCards = 0 }) => {
    const [flippedCards, setFlippedCards] = useState<number[]>([]);

    const handleCardClick = (cardNumber: number) => {
        setFlippedCards((prevFlippedCards) => {
            if (prevFlippedCards.includes(cardNumber)) {
                return prevFlippedCards.filter((num) => num !== cardNumber);
            } else {
                return [...prevFlippedCards, cardNumber];
            }
        });
    };

    const renderCards = () => {
        const cards = [];
        for (let i = 1; i <= numberOfCards; i++) {
            const isFlipped = flippedCards.includes(i);

            cards.push(
                <div key={i} className={`card ${isFlipped ? "flipped" : ""}`} onClick={() => handleCardClick(i)}>
                    <div className="card-inner">
                        {isFlipped ? (
                            <img src={`https://images-whu.s3.eu-north-1.amazonaws.com/WarbandFighterCards/${directory}/${i}_2.png`} alt={`Back Image ${i}`} style={{ width: "100%", height: "auto" }} />
                        ) : (
                            <img src={`https://images-whu.s3.eu-north-1.amazonaws.com/WarbandFighterCards/${directory}/${i}_1.png`} alt={`Front Image ${i}`} style={{ width: "100%", height: "auto" }} />
                        )}
                    </div>
                </div>
            );
        }
        return cards;
    };

    return <div className="fighter-cards">{renderCards()}</div>;
};

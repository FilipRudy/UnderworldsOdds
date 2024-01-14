import React, { useState } from "react";
import "../../css/WarbandDetails/WarbandFighterCards.css";

interface WarbandFighterCardsProps {
    directory?: string;
    numberOfCards?: number;
}

export const WarbandFighterCards: React.FC<WarbandFighterCardsProps> = ({ directory = "", numberOfCards = 0 }) => {
    const [selectedSides, setSelectedSides] = useState<{ [key: number]: number }>(() => {
        const initialSides: { [key: number]: number } = {};
        for (let i = 1; i <= numberOfCards; i++) {
            initialSides[i] = 1;
        }
        return initialSides;
    });

    const toggleSide = (cardNumber: number) => {
        setSelectedSides((prevSelectedSides) => {
            const currentSide = prevSelectedSides[cardNumber] || 1;
            return {
                ...prevSelectedSides,
                [cardNumber]: currentSide === 1 ? 2 : 1,
            };
        });
    };

    const getImageUrl = (cardNumber: number) => {
        const side = selectedSides[cardNumber] || 1;
        return require(`../../Images/WarbandDetails/WarbandFighterCards/${directory}/${cardNumber}_${side}.png`);
    };

    const renderCards = () => {
        const cards = [];
        for (let i = 1; i <= numberOfCards; i++) {
            cards.push(
                <a key={i} onClick={() => toggleSide(i)}>
                    <img src={getImageUrl(i)} alt={`Image ${i}`} />
                </a>
            );
        }
        return cards;
    };

    return <div className="fighter-cards">                    <img src={"https://images-whu.s3.eu-north-1.amazonaws.com/1_1.png"}  alt={"https://images-whu.s3.eu-north-1.amazonaws.com/1_1.png"}/>
        {renderCards()}</div>;
};

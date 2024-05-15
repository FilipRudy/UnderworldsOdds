import { FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";
import React from "react";
import "../css/universal-components/stars-ratings.css";

interface StarsRatingProps {
    onRateChange: (rating: number) => void;
    defaultRating?: number;
}

export const StarsRating: React.FC<StarsRatingProps> = ({ onRateChange, defaultRating }) => {
    const [rate, setRate] = useState(defaultRating || 0);

    useEffect(() => {
        if (defaultRating) {
            setRate(defaultRating);
        }
    }, [defaultRating]);

    const handleRateChange = (givenRating: number) => {
        if (givenRating === rate) {
            setRate(0);
            onRateChange(0);
        } else {
            setRate(givenRating);
            onRateChange(givenRating);
        }
    };

    return (
        <div className="container">
            {[...Array(5)].map((item, index) => {
                const givenRating = index + 1;
                return (
                    <label key={index}> {/* Add key to each label */}
                        <input
                            type="radio"
                            value={givenRating}
                            onClick={() => {
                                handleRateChange(givenRating);
                            }}
                        />

                        <FaStar
                            color={
                                givenRating <= rate
                                    ? "#000"
                                    : "rgb(192, 192, 192)"
                            }
                        />
                    </label>
                );
            })}
        </div>
    );
};

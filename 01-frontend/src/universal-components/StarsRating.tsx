import { FaStar } from "react-icons/fa";
import { useState } from "react";
import React from "react";
import "../css/universal-components/StarsRatings.css";

interface StarsRatingProps {
    onRateChange: (rating: number) => void;
}
export const StarsRating: React.FC<StarsRatingProps> = ({ onRateChange }) => {
    const [rate, setRate] = useState(0);

    const handleRateChange = (givenRating: number   ) => {
        setRate(givenRating);
        onRateChange(givenRating);
    };

    return (
        <div className="container">
            {[...Array(5)].map((item, index) => {
                const givenRating = index + 1;
                return (
                    <label>
                        <input
                            type="radio"
                            value={givenRating}
                            onClick={() => {
                                handleRateChange(givenRating);
                            }}
                        />

                            <FaStar
                                color={
                                    givenRating < rate || givenRating === rate
                                        ? "000"
                                        : "rgb(192,192,192)"
                                }
                            />
                    </label>
                );
            })}
        </div>
    );
};

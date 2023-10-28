import { FaStar } from "react-icons/fa";
import { useState } from "react";
import React from "react";
import "../css/universal-components/StarsRatings.css";

export const StarsRating = () => {
    const [rate, setRate] = useState(0);

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
                                setRate(givenRating);
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

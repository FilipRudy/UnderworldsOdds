import React from "react";
import "../css/warbands-browser/warbands-display.css";

interface ClearFiltersProps {
    onClick: () => void;
}

export const ClearFilters: React.FC<ClearFiltersProps> = ({ onClick }) => {
    return (
        <nav>
            <ul className='pagination'>
                <li className='page-item'>
                    <button onClick={onClick} className='page-link'>Clear Filters</button>
                </li>
            </ul>
        </nav>
    );
};

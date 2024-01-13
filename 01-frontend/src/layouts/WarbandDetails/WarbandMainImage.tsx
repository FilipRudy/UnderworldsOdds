import React from "react";
import "../../css/WarbandDetails/WarbandMainImage.css";
import khagra from "../../Images/WarbandDetails/WarbandMainPhotos/Khagra's Ravagers.png";
const getImageForWarband = (warbandName: string) => {
    switch (warbandName) {
        case "Khagra's Ravagers":
            return khagra;
    }
};

export const WarbandMainImage: React.FC<{ warbandName?: string }> = ({ warbandName = "" }) => {
    const imagePath = getImageForWarband(warbandName);

    return (
        <div className="main-image">
            <img
                className="main-image"
                title="Universal"
                alt="Universal"
                src={imagePath}
            />
        </div>
    );
};

import React from "react";
import "../../css/WarbandDetails/WarbandMainImage.css";

export const WarbandMainImage: React.FC<{ warbandName?: string }> = ({ warbandName = "" }) => {


    return (
        <div className="main-image">
            {(
                <img
                    className="main-image"
                    title="Universal"
                    alt="Universal"
                    src={`https://images-whu.s3.eu-north-1.amazonaws.com/WarbandMainPhotos/${warbandName}.png`}
                />
            )}
        </div>
    );
};

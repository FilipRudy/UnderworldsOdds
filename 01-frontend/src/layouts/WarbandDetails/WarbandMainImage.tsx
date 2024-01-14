import React, { useState, useEffect } from "react";
import "../../css/WarbandDetails/WarbandMainImage.css";

export const WarbandMainImage: React.FC<{ warbandName?: string }> = ({ warbandName = "" }) => {
    const [imagePath, setImagePath] = useState<string | null>(null);

    useEffect(() => {
        const loadImage = async () => {
            try {
                const imageModule = await import(
                    `../../Images/WarbandDetails/WarbandMainPhotos/${warbandName}.png`
                    );
                setImagePath(imageModule.default);
            } catch (error) {
                console.error("Error loading image:", error);
            }
        };

        if (warbandName) {
            loadImage();
        }

    }, [warbandName]);

    return (
        <div className="main-image">
            {imagePath && (
                <img
                    className="main-image"
                    title="Universal"
                    alt="Universal"
                    src={imagePath}
                />
            )}
        </div>
    );
};

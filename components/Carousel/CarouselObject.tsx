import React from "react";

interface CarouselObjectProps {
    children: React.ReactNode;
    width: string;
}

const CarouselObject: React.FC<CarouselObjectProps> = ({ children, width }) => {
    return (
        <div className="inline-flex align-center justify-center h-200" style={{ width: width }}>
            { children }
        </div>
    );
};

export default CarouselObject;
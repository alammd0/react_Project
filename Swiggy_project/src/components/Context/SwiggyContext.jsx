import { useState, createContext, useEffect } from "react";
import { mindData } from "../../data";

export const functionProviderSwiggy = createContext();

export const SwiggyFunctionProvider = ({ children }) => {
    const [isMenu, setIsmenu] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0)
    const interval = 3000;


    function clickHandler() {
        setIsmenu(!isMenu);
    }

    const nextSlideImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % mindData.length)
    }

    const prevSlideImage = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? mindData.length - 1 : prevIndex - 1);
    }

    useEffect(() => {
        const slideInterval = setInterval(nextSlideImage, interval);
        return () => clearInterval(slideInterval);
    }, [nextSlideImage, interval]);


    const values = {
        isMenu,
        clickHandler,
        currentIndex,
        nextSlideImage,
        prevSlideImage
    }

    return (
        <functionProviderSwiggy.Provider value={values}>
            {
                children
            }
        </functionProviderSwiggy.Provider>
    )
}
import { useState, createContext } from "react";
import { useRef } from "react";
import { foodDelivery } from "../../Data/data";

export const functionProviderSwiggy = createContext();

export const SwiggyFunctionProvider = ({ children }) => {
    const [isMenu, setIsmenu] = useState(false);
    const carouselRef = useRef(null);

    const [isOpen, setIsOpen] = useState(false);

    const clickDropdown = () => {
        setIsOpen(!isOpen);
    }


    function clickHandler() {
        setIsmenu(!isMenu);
    }

    const scrollLeft = () => {
        carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    };

    const scrollRight = () => {
        carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    };


    const values = {
        isMenu,
        clickHandler,
        scrollLeft,
        scrollRight,
        carouselRef,
        foodDelivery,
        isOpen,
        clickDropdown
    }

    return (
        <functionProviderSwiggy.Provider value={values}>
            {
                children
            }
        </functionProviderSwiggy.Provider>
    )
}
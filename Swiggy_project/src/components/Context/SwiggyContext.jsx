import { useState, createContext } from "react";
import { useRef } from "react";
import { foodDelivery } from "../../Data/data";

export const functionProviderSwiggy = createContext();

export const SwiggyFunctionProvider = ({ children }) => {
    const [isMenu, setIsmenu] = useState(false);
    const carouselRef = useRef(null);
    const [isOpen, setIsOpen] = useState(null);
    const [selectCategories, setSelectCategories] = useState("Partner Onboarding");
    const [openModal, setOpenModal] = useState(null);

    const [formData, setFormData] = useState({
        phoneNumber : "",
        email : "",
        name : ""
    })
    
    const signLoginHandler = (event) => {
        // setFormData(event.target.value)

        const{name , value} = event.target;

        setFormData( (prevData) => ({
            ...prevData,
            [name] : value
        }));
        
        console.log(event.target.value)
    }

    const openSignLoginModal = (page) => {
        setOpenModal(page);
    }

    const closeSignLoginModal = (page) => {
        setOpenModal(null);
    }


    const handleCategory = (head) => {
        setSelectCategories(head);
    }

    const clickDropdown = (index) => {
        setIsOpen(isOpen === index ? null : index);
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
        clickDropdown,
        selectCategories,
        handleCategory,
        openModal,
        setOpenModal,
        openSignLoginModal,
        closeSignLoginModal,
        formData,
        setFormData,
        signLoginHandler
    }

    return (
        <functionProviderSwiggy.Provider value={values}>
            {
                children
            }
        </functionProviderSwiggy.Provider>
    )
}
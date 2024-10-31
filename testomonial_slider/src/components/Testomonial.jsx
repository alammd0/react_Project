import React, { useState } from 'react'
import Card from './Card'
import "./Testominial.css"
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaChevronCircleRight } from "react-icons/fa";


const Testomonial = (props) => {

    const reviewers = props.reviewers;

    const [index, setIndex] = useState(0);


    function randomeUserHandler() {
        let rndNumber = Math.floor(Math.random() * reviewers.length)
        setIndex(rndNumber);
    }


    function leftclickHandler() {
        if (index - 1 === 0) {
            setIndex(reviewers.length - 1);
        } else {
            setIndex(index - 1);
        }
    }


    function rightclickHandler() {
        if (index + 1 >= reviewers.length) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }


    return (
        <div className='textmonial_container'>

            <h2 className='heading'>Testomonial Slider</h2>
            <div className='line'></div>

            <div className='textmonial_card'>
                <div className=''>
                    <Card reviewer={reviewers[index]} />
                </div>

                <div className='card_btn'>
                    <div className='btn_group'>
                        <button onClick={leftclickHandler}><FaCircleChevronLeft /></button>
                        <button onClick={rightclickHandler}><FaChevronCircleRight /></button>
                    </div>

                    <div className='rdm_btn'>
                        <button onClick={randomeUserHandler}>Suprise User</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Testomonial
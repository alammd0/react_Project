import React from 'react'
import { FaRegWindowClose } from "react-icons/fa";

const CardModal = ({ openCardModal, handleCloseCardModal }) => {

    console.log(openCardModal);


    return (
        <div className='modal_wrapper'>
            <div>
                <img src={openCardModal.url} alt={openCardModal.titlle} />
                <button onClick={handleCloseCardModal}><FaRegWindowClose /></button>
            </div>

            <div>
                <div>
                    <h2>{openCardModal.titlle}</h2>
                    <p>₹ {openCardModal.price}</p>
                </div>

                <div>
                    <button>ADD</button>
                </div>
            </div>

            <div>
                <p>{openCardModal.desc}</p>
            </div>
        </div>
    )
}

export default CardModal
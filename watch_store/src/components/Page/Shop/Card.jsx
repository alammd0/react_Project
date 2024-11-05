import { React, useState } from 'react'
import { NavLink } from 'react-router-dom';
import ProductModal from './ProductModal';

const Card = (props) => {

    const cardData = props.cardData;
    console.log(cardData);

    const [ishover, setisHovered] = useState(false);


    const [selectProduct, setSelectProduct] = useState(null);

    const openProcuctModal = (product) => {
        setSelectProduct(product);
    }

    const closeProcuctModal = () => {
        setSelectProduct(null);
    }

    return (
        <div>
            <div className='shoping_card'
                onMouseEnter={() => setisHovered(true)}
                onMouseLeave={() => setisHovered(false)}
            >
                <div>
                    <div className='product_img'>
                        <img src={cardData.imgUrl} alt={cardData.title} />
                    </div>

                    <div className='product_title'>
                        {
                            !ishover && (
                                <div>
                                    <h2>{cardData.title}</h2>
                                    <p> $ {cardData.price}</p>
                                </div>
                            )
                        }

                        {
                            ishover && (
                                <div>
                                    <button className='product_card'>Add Cart</button>

                                    <div className='viewBtn'>
                                        <button className="viewDetail" onClick={() => openProcuctModal(cardData)}>Quick View</button>



                                    </div>
                                </div>

                            )
                        }

                    </div>
                </div>
            </div>


            {/* Conditionally render the modal outside of the button */}
            <div>
                {selectProduct && (
                    <ProductModal
                        product={selectProduct}
                        onClose={closeProcuctModal}
                    />
                )}
            </div>

        </div>
    )
}

export default Card
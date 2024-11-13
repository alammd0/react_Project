import React from 'react'
import DetailsFood from './DetailsFood'
import Restaurent from './Restaurent'
import { useParams } from 'react-router-dom'

const Details = () => {

    // const category = props.category ;

    const {category} = useParams();

    console.log("Inside the deatilas" , category)

    return (
        <div>

            <div>
                <div>
                    <button>Restaurant</button>
                    <button>Dish</button>
                </div>

                <div>
                    <div>
                        <DetailsFood category = {category} />
                    </div>

                    <div>
                        <Restaurent />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Details
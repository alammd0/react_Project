import React from 'react'
import CardDet from './CardDet';

const CardDetail = ({ data }) => {

    console.log(data);

    return (
        <div>
            <CardDet
                by={data.by}
                rating={data.rating}
                time={data.time}
                title={data.title}
                price={data.price}
                url={data.url}
            />
        </div>
    )
}

export default CardDetail
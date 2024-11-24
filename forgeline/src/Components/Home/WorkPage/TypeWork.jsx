import React from 'react'

const TypeWork = ({ worksData }) => {
    return (
        <div className='word_card_data_container'>
            {
                worksData.map( (data, index) => (
                    <div key={index} className='original_work_card'>
                        <div className='work_number'>
                            <p>{data.id}</p>
                        </div>

                        <div className='work_data'>
                            <div>
                                <img src={data.url} />
                            </div>

                            <div className='work_data_subData'>
                                <h2>{data.title}</h2>
                                <p>{data.desc}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default TypeWork
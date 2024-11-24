import React from 'react'
import WorkHead from './WorkHead'
import TypeWork from './TypeWork'
import "./Work.css"

const Work = ({worksData}) => {
    return (
        <div className='work_container'>
            <div>
                <WorkHead />
            </div>
            <div>
                <TypeWork worksData = {worksData} />
            </div>
        </div>
    )
}

export default Work
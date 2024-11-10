import React from 'react'
import HelpCard from './HelpCard'
import "./Help.css"

const Help = () => {
    return (
        <div className='help_wrapper'>
            <div className='help_container'>
                <div className='help_heading'>
                    <h3>Help & Support</h3>
                    <p>Let's take a step ahead and help you better.</p>
                </div>

                <div>
                    <HelpCard />
                </div>
            </div>
        </div>
    )
}

export default Help
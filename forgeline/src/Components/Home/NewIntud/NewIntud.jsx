import React from 'react'
import { Link } from 'react-router-dom'
import industrial from "../../../assets/Industrial_Trade_Show_Playbook_268.png"
import "./NewIntud.css"
import { GrLinkNext } from "react-icons/gr";

const NewIntud = () => {
    return (
        <div className='industrial_Container'>
            <div className='indust_main_container'>
                <div className='imageContainer'>
                    <img src={industrial} alt='No Image'/>
                </div>
                <div className='indust_txt_container'>
                    <p>New From Industrial</p>
                    <h2>The Industrial Trade Show Marketing Playbook</h2>
                    <p>Get more trade show value before, during, and after your next manufacturing live event.</p>
                    <Link className='indust_txt_btn'><button>Download the PlayBook <span><GrLinkNext /></span> </button></Link>
                    
                </div>
            </div>
        </div>
    )
}

export default NewIntud
import React from 'react'
import "./About.css"
import Footer from '../../Footer'

const About = () => {
  return (
    <div className='about_Wrapper'>

      <div className='about_section'>
        <div className='about_container'>

          <div className='about'>ABOUT</div>

          <div className='text'>
            <div className='first_text'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</div>

            <div className='first_text'>This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</div>
          </div>

          <div className='img'>
            <img src='https://static.wixstatic.com/media/a9ff3b_982aaa501fea44bc8b04b98cc0a3bc58.jpg/v1/fill/w_415,h_373,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a9ff3b_982aaa501fea44bc8b04b98cc0a3bc58.jpg'></img>
          </div>
        </div>



        <div>
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default About
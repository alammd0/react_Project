import React from 'react'
import Footer from '../Footer';

const Faq = () => {

  const descriptionData = [
    {
      title: "How Do I Place An Order?",
      desc: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you."
    },
    {
      title: "Payment and Shipping",
      desc: "I'am a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you. This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are."
    },
    {
      title: "Secure Ordering & Payment Options",
      desc: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you."
    },
    {
      title: "Returns & Refunds",
      desc: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you"
    }
  ];

  return (
    <div className='about_Wrapper'>
      <div className='faq_container'>
        <div className='faq_content'>
          <div className='faq_def'>
            <p>Faq</p>
          </div>

          <div className='quest_answer'>
            {
              descriptionData.map((data, index) => (
                <div key={index} className='faq_answer'>
                  <h4>{data.title}</h4>

                  <p>{data.desc}</p>
                </div>
              ))
            }
          </div>
        </div>

        <div style={{ padding: "1rem" }}>
          <Footer />
        </div>


      </div>
    </div>
  )
}

export default Faq
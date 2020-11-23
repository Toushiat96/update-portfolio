import React from 'react';
import emailjs from 'emailjs-com';
import animation from "../../images/animation.gif"
import HeaderNavbar from '../Home/HeaderNavbar/HeaderNavbar';
const ContackUs = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_e8vpnjh', e.target, 'user_A0qZCDThYTEAyiVQlxtPL')
          .then((result) => {
              if (result) {
                  alert('email conferm successfully')
              }
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }

    return (
       <div  style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${animation})`}}>
           <HeaderNavbar></HeaderNavbar>
          <div className="container">
          <div>
             <h2 style={{color:'rgb(81, 233, 157)',paddingTop:'80px',marginBottom:'30PX',textAlign:'center'}}>Contact Us</h2>
              <section className='d-flex justify-content-center'>
              <section className='col-12 col-sm-6 col-md-7 mb-3'> 
              <form onSubmit={sendEmail}> 
                       <h2 className='text-center text-white pb-3'>Get To Touch</h2>
                       <div className="form-group">
                           <input type="text" className="form-control" name='name' required placeholder="your name *"/>
                       </div>
                       <div className="form-group">
                           <input type="email" className="form-control" name='email' required placeholder="your email address"/>
                       </div>
                       <div className="form-group">
                           <textarea name="massage" className="form-control" cols="20" rows="5" required placeholder="your Message"></textarea>
                       </div>
                       <div className="form-group">
                               <input type="submit" className="send-btn"  value ='Send Meassage'/>
                     </div>
                   </form>
              </section>
              </section>
                    <h5 className="text-center text-white pb-5">Design & Created by <span style={{color:'rgb(81, 233, 157)'}}>Toushiat shaikh</span></h5>
        </div>
          </div>
       </div>
    );
};

export default ContackUs;
import React from 'react';
import shahadat from "../../shahadat.jpg"
import animation from "../../images/animation.gif"
import HeaderNavbar from '../Home/HeaderNavbar/HeaderNavbar';
import toushiat from "../../toushiat.jpg"
const AboutMyDetails = () => {
    return (
        <div style={{ marginTop: "60px",backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${animation})`}}>
            <HeaderNavbar></HeaderNavbar>
       <div className="container">
       <h1 style={{ color:'white', textAlign: "center",marginBottom:"50px",paddingTop:'30px' }}>
        About <span style={{ color: "rgb(81, 233, 157)"}}>Me </span>
   </h1>
  <div className="row">
       <div className="col-md-6">
         <img style={{height:'200px',margin:'0 auto',marginBottom:'15px',borderRadius:'50%'}} src={toushiat} alt=""/>
         <h2 className='text-white'> <span style={{color:'rgb(81, 233, 157)'}}>I'am</span> Toushiat shaikh</h2>
        <p className='text-white mb-3'>I am toushiat.i am a front-end developer.recently i have finished more than a few  projects or many projects on javascript and react.js. And I can make perfect responsive website design with css,bootstrap4,material ui, flexbox, and grid layout.i also have solid knowledge working with node.js,express.js mongodb,firebase, and heroku.now i am ready and excited for learn redux ,and react native</p>
      </div>
      <div className="col-md-6"> 
        <h3 className='text-white'>My programming skill</h3>
         <div style={{width:'100px',height:'3px',background:"rgb(81, 233, 157)",marginBottom:"15px"}}></div>
         <div className='technolog'>
           <span>React.js</span>
           <span>javascript</span>
           <span>bootstrap4</span>
           <span>Material-Ui</span><br/><br/>
           <span>ES6</span>
           <span>Node.js</span>
           <span>Express.js</span>
           <span>mongodb</span>
           <span>firebase</span><br/><br/>
           <span>Heroku</span>
           <span>Vs code</span>
         </div>
           
         <h3 className='text-white mt-4'>I want to work with</h3>
         <div style={{width:'100px',height:'3px',background:"rgb(81, 233, 157)",marginBottom:"15px"}}></div>
         <div className='technolog'>
           <span>React.js</span>
           <span>javascript</span>
           <span>Node.js</span>
            <span>mongodb</span>
           <br/><br/>
         </div>

         <h3 className='text-white mt-4'>Looking forward to learn</h3>
         <div style={{width:'100px',height:'3px',background:"rgb(81, 233, 157)",marginBottom:"15px"}}></div>
         <div className='technolog'>
           <span>Redux.js</span>
           <span>C</span>
           <span>Mysql</span>
            <span>React native</span>
           <br/><br/>
         </div>
      </div>
  </div>
  <h5 className="text-center text-white pb-5 pt-5">Design & Created by <span style={{color:'rgb(81, 233, 157)'}}>Toushiat shaikh</span></h5>
       </div>
   </div>
    );
};

export default AboutMyDetails;
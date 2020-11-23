import React from 'react';
import animation from '../../images/animation.gif'
import HeaderNavbar from '../Home/HeaderNavbar/HeaderNavbar';
import blog1 from '../../images/blog1.png'
import blog2 from '../../images/blog2.jpg'
import react1 from '../../images/react1.jpg'
import blog4 from '../../images/blog4.jpg'
const AllBlog = () => {
    return (
        <div style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${animation})`}}>
          <HeaderNavbar></HeaderNavbar><br/> <br/>
     <div className="container">
         <h2 style={{marginTop:'50px'}}  className='text-center text-white pb-5'>All Blog</h2>
              <div class="card-deck pb-5">
              <div class="card">
    <img class="card-img-top" src={blog1} alt="Card image cap"/>
    <div class="card-body" style={{background:' rgb(27, 61, 93)'}}>
      <h5 style={{color: "rgb(81, 233, 157)"}}>Javascript blog</h5>
      <p class="text-white">Some Basic tricks to solve problem-solving in JavaScript.</p>
     <a href="https://toushiat16.medium.com/some-basic-tricks-to-solve-problem-solving-in-javascript-d575fcb697dd"> <button  className='btn btn-danger' style={{width:'100%',border:'none',borderRadius:'5px', padding:'5px',color:'white'}}>Read</button></a>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={blog2} alt="Card image cap"/>
    <div class="card-body" style={{background:' rgb(27, 61, 93)'}}>
    <h5 style={{color: "rgb(81, 233, 157)"}}>Javascript blog</h5>
      <p class="text-white">The most important things in JavaScript you should use.</p>
      <a href="https://toushiat16.medium.com/the-most-important-things-in-javascript-you-should-use-4c90315b0a2"> <button  className='btn btn-danger' style={{width:'100%',border:'none',borderRadius:'5px', padding:'5px',color:'white'}}>Read</button></a>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={react1} alt="Card image cap"/>
    <div class="card-body" style={{background:' rgb(27, 61, 93)'}}>
    <h5 style={{color: "rgb(81, 233, 157)"}}>Blog of Javascript</h5>
      <p class="text-white">Error handling in JavaScript using try catch method.</p>
      <a href="https://toushiat16.medium.com/error-handling-in-javascript-using-try-catch-method-b790daeeecef"> <button  className='btn btn-danger' style={{width:'100%',border:'none',borderRadius:'5px', padding:'5px',color:'white'}}>Read</button></a>
    </div>
    </div>
</div>

<br/>
<br/>
<div class="card-deck pb-5">
  
<div class="card">
<img class="card-img-top" src={blog4} alt="Card image cap"/>
<div class="card-body" style={{background:' rgb(27, 61, 93)'}}>
<h5 style={{color: "rgb(81, 233, 157)"}}>Javascript blog</h5>
  <p class="text-white">Basic structure of Number , String and Array in JavaScript.</p>
  <a href="https://toushiat16.medium.com/basic-structure-of-number-string-and-array-in-javascript-c09623a9a75f"> <button  className='btn btn-danger' style={{width:'100%',border:'none',borderRadius:'5px', padding:'5px',color:'white'}}>Read</button></a>
</div>
</div>
  <div class="card">
    <img class="card-img-top" src={blog2} alt="Card image cap"/>
    <div class="card-body" style={{background:' rgb(27, 61, 93)'}}>
    <h5 style={{color: "rgb(81, 233, 157)"}}>No blog</h5>
      <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, autem.</p>
      <a href=""> <button  className='btn btn-danger' style={{width:'100%',border:'none',borderRadius:'5px', padding:'5px',color:'white'}}>Read</button></a>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={react1} alt="Card image cap"/>
    <div class="card-body" style={{background:' rgb(27, 61, 93)'}}>
    <h5 style={{color: "rgb(81, 233, 157)"}}>No blog</h5>
      <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, autem.</p>
      <a href=""> <button  className='btn btn-danger' style={{width:'100%',border:'none',borderRadius:'5px', padding:'5px',color:'white'}}>Read</button></a>
    </div>
  </div>
  </div>
     <h5 className="text-center text-white pb-5 pt-5">Design & Created by <span style={{color:'rgb(81, 233, 157)'}}>Toushiat shaikh</span></h5>
    </div>
       </div>
    );
};

 export default AllBlog;


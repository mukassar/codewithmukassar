import React from 'react'
import './CentralLogin.css'
// import RegisterForm from './RegisterForm'
import {Link} from "react-router-dom";

 const CentralLoginForm = () => {
   
  return (
    <div className='mainDiv'>
        <form action=""  className='loginForm'>
        <h1>CentralLoginForm</h1>
           <label htmlFor="">Email :</label >
           <input className='form-control' type="email" name="" id="" placeholder='Please Enter Your Email' required/><br />
           <label htmlFor="" >Password:</label>
           <input className='form-control' type="password" name="" id="" required placeholder='Password'/><br />
           <button className='btn btn-primary'>Login</button>  <h6>You are not login please register <Link to="/ragister">Ragister</Link></h6>
        </form>
        </div>
  )
}
export default CentralLoginForm 
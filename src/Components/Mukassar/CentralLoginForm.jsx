import React from 'react'
import './CentralLogin.css'

 const CentralLoginForm = () => {
   
  return (
    <div className='mainDiv'>
        
        <form action=""  className='loginForm'>
        <h1>CentralLoginForm</h1>
        <label htmlFor="">Email :</label >
        <input className='form-control' type="email" name="" id="" placeholder='Please Enter youe Email' required/><br />
        <label htmlFor="" >Password:</label>
        <input className='form-control' type="password" name="" id="" required placeholder='Password'/><br />
        <button className='btn btn-primary'>Login</button>
        </form>

        </div>
  )
}
export default CentralLoginForm 
import React from 'react';
import CarsList from '../CarsList';

const RegisterForm = () => {
    return (
        <div className='mainDiv'>
            <form action="" className='loginForm'>
                <h1>Fill Data</h1>
              <label htmlFor="">First Name:</label>
              <input className='form-control' type="text" placeholder='First Name' required />
              <label htmlFor="">Last Name:</label>
              <input className='form-control' type="text" placeholder='First Name' required />
              <label htmlFor="">Email:</label>
              <input className='form-control' type="email" placeholder='email' required />
              <label htmlFor="">Mobile No:</label>
              <input className='form-control' type="number" placeholder='Enter Your Mobile Number' required />
              <label htmlFor="">Password:</label>
              <input className='form-control' type="password" placeholder='Enter Password' required  />
              <label htmlFor="">Conform Password:</label>
              <input className='form-control' type="password" placeholder='Enter Conform Password' required  />
              <button className='btn btn-primary' style={{marginTop: "5px"}} type='submit' >Submit</button>
            </form>
            <CarsList/>
        </div>
    );
};

export default RegisterForm;
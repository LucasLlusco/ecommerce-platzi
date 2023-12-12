import React, { useState } from 'react'
import Layout from '../../Components/Layout'
import { useAuthContext } from '../../Context/authContext';
import { Link } from 'react-router-dom';

const SignUp = () => { 
  const { createUser } = useAuthContext();

  const [newUser, setNewUser] = useState({
    name: "",
    password: "",
  });

  const handleName = (e) => {
    setNewUser({...newUser, name: e.target.value});
  }

  const handlePassword = (e) => {
    setNewUser({...newUser, password: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(newUser.name && newUser.password) {
      createUser(newUser.name, newUser.password);
    }
  }
  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-6'>
        <h1 className='font-medium text-xl'>Sign up</h1>
      </div>
      <div className='flex flex-col w-80'>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder='name'
            value={newUser.name} 
            onChange={handleName} 
            className='rounded-lg border border-black w-80 p-2 mb-4 focus:outline-none'
          />

          <input 
            type="password" 
            placeholder='password'
            value={newUser.password} 
            onChange={handlePassword} 
            className='rounded-lg border border-black w-80 p-2 mb-4 focus:outline-none'            
          />        
          <button className='bg-black py-3 text-white w-full rounded-lg'>Sign Up!</button>
          <p className='text-center mt-4'>Already have an account? <Link className='underline' to={"/sign-in"}>sign in here</Link></p>
        </form>
      </div>      
    </Layout>
  )
}

export default SignUp
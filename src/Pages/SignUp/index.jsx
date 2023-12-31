import React, { useState } from 'react'
import Layout from '../../Components/Layout'
import { useAuthContext } from '../../Context/authContext';
import { Link } from 'react-router-dom';

const SignUp = () => { 
  const { createUser } = useAuthContext();

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleName = (e) => {
    setNewUser({...newUser, name: e.target.value});
  }

  const handleEmail = (e) => {
    setNewUser({...newUser, email: e.target.value});
  }

  const handlePassword = (e) => {
    setNewUser({...newUser, password: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(newUser.name && newUser.email && newUser.password) {
      createUser(newUser.name, newUser.email, newUser.password);
    }
  }
  
  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-6'>
        <h1 className='font-medium text-xl'>Sign up</h1>
      </div>
      <div className='flex flex-col w-full sm:w-80 px-2'>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder='name'
            value={newUser.name} 
            onChange={handleName} 
            className='w-full rounded-lg border border-black p-2 mb-4 focus:outline-none'
          />

          <input 
            type="email" 
            placeholder='email'
            value={newUser.email} 
            onChange={handleEmail} 
            className='w-full rounded-lg border border-black p-2 mb-4 focus:outline-none'
          />

          <input 
            type="password" 
            placeholder='password'
            value={newUser.password} 
            onChange={handlePassword} 
            className='w-full rounded-lg border border-black p-2 mb-4 focus:outline-none'            
          />        
          <button 
            disabled={!newUser.name || !newUser.email || !newUser.password} 
            className='bg-black py-3 text-white w-full rounded-lg disabled:opacity-25'
            >
            Sign Up!
          </button>
          <p className='text-center mt-4'>Already have an account? <Link className='underline' to={"/sign-in"}>sign in here</Link></p>
        </form>
      </div>      
    </Layout>
  )
}

export default SignUp
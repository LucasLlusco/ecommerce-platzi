import Layout from '../../Components/Layout'
import React, { useState } from 'react'
import { useAuthContext } from '../../Context/authContext';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const { loginUser } = useAuthContext();

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
      loginUser(newUser.name, newUser.password);
    }
  }


  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-6'>
        <h1 className='font-medium text-xl'>Sign In</h1>
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
            type="password" 
            placeholder='password'
            value={newUser.password} 
            onChange={handlePassword} 
            className='w-full rounded-lg border border-black p-2 mb-4 focus:outline-none'            
          />        
          <button className='bg-black py-3 text-white w-full rounded-lg'>Sign In!</button>
          <p className='text-center mt-4'>Don’t have an account yet? <Link className='underline' to={"/sign-up"}>sign up here.</Link></p>
        </form>
      </div>    
    </Layout>
  )
}

export default SignIn
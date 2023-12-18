import React, { useState } from 'react'
import Layout from '../../Components/Layout'
import { useAuthContext } from '../../Context/authContext';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

const EditProfile = () => {
  const navigate = useNavigate();
  const { currentUser, editUser } = useAuthContext();

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: ""
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
    if(newUser.name || newUser.email || newUser.password) {
      editUser(
        newUser.name ? newUser.name : currentUser.name, 
        newUser.email ? newUser.email : currentUser.email,
        newUser.password ? newUser.password : currentUser.password
        );
      navigate("/my-account");
    }
  }



  return (
    <Layout>
      <div className='flex flex-col w-full sm:w-80 px-2 mb-4'>
        <Link to={"/my-account"} className='flex flex-row gap-3'>
          <ArrowLeftIcon className='h-6 w-6' />
          back
        </Link>        
      </div>

      <div className='flex items-center justify-center relative w-80 mb-6'>
        <h1 className='font-medium text-xl'>Edit my account</h1>
      </div>
      <div className='flex flex-col w-full sm:w-80 px-2'>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder={currentUser.name}
            value={newUser.name} 
            onChange={handleName} 
            className='w-full rounded-lg border border-black p-2 mb-4 focus:outline-none'
          />

          <input 
            type="email" 
            placeholder={currentUser.email}
            value={newUser.email} 
            onChange={handleEmail} 
            className='w-full rounded-lg border border-black p-2 mb-4 focus:outline-none'
          />     

          <input 
            type="password" 
            placeholder={currentUser.password}
            value={newUser.password} 
            onChange={handlePassword} 
            className='w-full rounded-lg border border-black p-2 mb-4 focus:outline-none'            
          />        
          <button 
            disabled={!newUser.name && !newUser.email && !newUser.password} 
            className='bg-black py-3 text-white w-full rounded-lg disabled:opacity-25'
            >
              Save changes
            </button>
        </form>
      </div>  
    </Layout>
    )
}

export default EditProfile
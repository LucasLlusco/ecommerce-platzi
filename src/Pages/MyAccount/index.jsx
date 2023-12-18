import { Link } from 'react-router-dom';
import Layout from '../../Components/Layout'
import { useAuthContext } from '../../Context/authContext'
import { PencilIcon } from '@heroicons/react/24/solid';

function MyAccount() {
  const { currentUser, logoutUser } = useAuthContext();

  const handleLogout = () => {
    logoutUser();
  }

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-6'>
        <h1 className='font-medium text-xl'>My account</h1>
      </div>
      <div className='flex flex-col w-full sm:w-80 px-2'>
        <div className='mb-1 flex gap-1'>
          <p className='font-medium'>name:</p>
          <p>{currentUser.name}</p>
        </div>
        <div className='mb-1 flex gap-1'>
          <p className='font-medium'>email:</p>
          <p>{currentUser.email}</p>
        </div>
        <div className='mb-4 flex gap-1'>
          <p className='font-medium'>password:</p>
          <p>***********</p>
        </div>
        <Link 
          to={"/my-account/edit"} 
          className='bg-gray-600 py-3 text-white w-full rounded-lg flex items-center justify-center gap-3'>
            Edit profile
          <PencilIcon className='h-6 w-6' />  
        </Link>
        <p className='text-center my-3'>or</p>
        <button 
          className='bg-red-600 py-3 text-white w-full rounded-lg'
          onClick={handleLogout}
          >
            Logout
        </button>
      </div>  
    </Layout>
  )
}

export default MyAccount
import Layout from '../../Components/Layout'
import { useAuthContext } from '../../Context/authContext'

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
      <div className='flex flex-col w-80'>
        <div className='mb-1 flex gap-1'>
          <p className='font-medium'>name:</p>
          <p>{currentUser.name}</p>
        </div>
        <div className='mb-4 flex gap-1'>
          <p className='font-medium'>password:</p>
          <p>***********</p>
        </div>
        <button 
          className='bg-black py-3 text-white w-full rounded-lg'
          onClick={handleLogout}
          >
            Logout
        </button>
      </div>  
    </Layout>
  )
}

export default MyAccount
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import { useAuthContext } from '../../Context/authContext'

const Navbar = () => {
  const { currentUser } = useAuthContext();
  const context = useContext(ShoppingCartContext)
  const activeStyle = 'underline underline-offset-4'

  return (
    <nav className='fixed z-10 top-0 w-full py-5 px-2 sm:px-10 text-sm font-light bg-white '>
      <div className='flex flex-wrap justify-between items-center'>
        <ul className='sm:hidden'>
          <li className='font-semibold text-lg'>
            <NavLink to='/'>
              Shopi
            </NavLink>
          </li>
        </ul>
        <ul className='flex items-center gap-3 sm:hidden'>
        {currentUser && (
            <li>
              <NavLink
                to='/my-orders'
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>
                My Orders
              </NavLink>
            </li>          
          )}
          {currentUser && (
            <li>
              <NavLink
                to='/my-account'
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>
                My Account
              </NavLink>
            </li>          
          )}
          {!currentUser && (
            <li>
              <NavLink
                to='/sign-in'
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>
                Sign In
              </NavLink>
            </li>          
          )}
          {!currentUser && (
            <li>
              <NavLink
                to='/sign-up'
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>
                Sign Up
              </NavLink>
            </li>          
          )}
          <li className='flex items-center'>
            <ShoppingBagIcon className='h-6 w-6 text-black'></ShoppingBagIcon>
            <div>{context.cartProducts.length}</div>
          </li>
        </ul>

        
        <ul className='w-full flex flex-wrap flex-row sm:w-auto sm:flex sm:flex-row mt-3 sm:mt-0 items-center justify-between gap-3'>
          <li className='hidden sm:flex font-semibold text-lg'>
            <NavLink to='/'>
              Shopi
            </NavLink>
          </li>
          {currentUser && (
            <li>
              <NavLink
                to='/'
                onClick={() => context.setSearchByCategory()}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>
                All
              </NavLink>
            </li>          
          )}
          {currentUser && (
            <li>
              <NavLink
                to='/clothes'
                onClick={() => context.setSearchByCategory('clothes')}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>
                Clothes
              </NavLink>
            </li>            
          )}
          {currentUser && (
            <li>
              <NavLink
                to='/electronics'
                onClick={() => context.setSearchByCategory('electronics')}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>
                Electronics
              </NavLink>
            </li>            
          )}
          {currentUser && (
            <li>
              <NavLink
                to='/furnitures'
                onClick={() => context.setSearchByCategory('furnitures')}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>
                Furnitures
              </NavLink>
            </li>            
          )}
          {currentUser && ( 
            <li>
              <NavLink
                to='/toys'
                onClick={() => context.setSearchByCategory('toys')}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>
                Toys
              </NavLink>
            </li>            
          )}
          {currentUser && (
            <li>
              <NavLink
                to='/others'
                onClick={() => context.setSearchByCategory('others')}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>
                Others
              </NavLink>
            </li>            
          )}
        </ul>

        <ul className='hidden sm:flex items-center gap-3'>
          {currentUser && (
            <li className='text-black/60'>
              {currentUser?.name && `bienvenido ${currentUser.name}`}
            </li>   
          )}
          {currentUser && (
            <li>
              <NavLink
                to='/my-orders'
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>
                My Orders
              </NavLink>
            </li>          
          )}

          {currentUser && (
            <li>
              <NavLink
                to='/my-account'
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>
                My Account
              </NavLink>
            </li>          
          )}

          {!currentUser && (
            <li>
              <NavLink
                to='/sign-in'
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>
                Sign In
              </NavLink>
            </li>          
          )}
          {!currentUser && (
            <li>
              <NavLink
                to='/sign-up'
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>
                Sign Up
              </NavLink>
            </li>          
          )}
          <li className='flex items-center'>
            <ShoppingBagIcon className='h-6 w-6 text-black'></ShoppingBagIcon>
            <div>{context.cartProducts.length}</div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
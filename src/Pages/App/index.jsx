import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/Navbar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
import './App.css'
import SignUp from '../SignUp'
import { AuthContextProvider, useAuthContext } from '../../Context/authContext'
import ProtectedRoute from '../../Components/ProtectedRoute'
import EditProfile from '../EditProfile'
import { ShoppingCartProvider } from '../../Context/shoppingCartContext'

const AppRoutes = () => {
  const { currentUser } = useAuthContext();


  let routes = useRoutes([
    { path: '/', element: <ProtectedRoute><Home /></ProtectedRoute>},
    { path: '/clothes', element: <ProtectedRoute><Home/></ProtectedRoute>},
    { path: '/electronics', element: <ProtectedRoute><Home/></ProtectedRoute> },
    { path: '/furnitures', element: <ProtectedRoute><Home/></ProtectedRoute>},
    { path: '/shoes', element: <ProtectedRoute><Home/></ProtectedRoute>  },
    { path: '/others', element: <ProtectedRoute><Home/></ProtectedRoute> },
    { path: '/my-account', element: <ProtectedRoute><MyAccount/></ProtectedRoute>},
    { path: '/my-account/edit', element: <ProtectedRoute><EditProfile/></ProtectedRoute>},
    { path: '/my-order', element: <ProtectedRoute><MyOrder/></ProtectedRoute> },
    { path: '/my-orders', element: <ProtectedRoute><MyOrders/></ProtectedRoute>  },
    { path: '/my-orders/last', element: <ProtectedRoute><MyOrder/></ProtectedRoute> },
    { path: '/my-orders/:id', element: <ProtectedRoute><MyOrder/></ProtectedRoute> },
    { path: '/sign-in', element: currentUser ? <Navigate to={"/"} /> : <SignIn /> },
    { path: '/sign-up', element: currentUser ? <Navigate to={"/"} /> : <SignUp /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes
}

const App = () => {
  return (
    <AuthContextProvider>
      <ShoppingCartProvider>
        <BrowserRouter>
          <AppRoutes />
          <Navbar />
          <CheckoutSideMenu />
        </BrowserRouter>
      </ShoppingCartProvider>
    </AuthContextProvider>
  )
}

export default App

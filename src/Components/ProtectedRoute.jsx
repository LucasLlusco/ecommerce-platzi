import React from 'react'
import { Navigate } from 'react-router-dom'; 
import { useAuthContext } from '../Context/authContext';

const ProtectedRoute = ({children}) => {
  const { currentUser } = useAuthContext();

  if(!currentUser) {
    return <Navigate to={"/sign-in"} />
  }
  
return children;
}

export default ProtectedRoute
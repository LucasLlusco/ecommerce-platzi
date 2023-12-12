import { createContext, useState, useEffect, useContext } from 'react'

const UserContext = createContext();

export const AuthContextProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null);

  const users = JSON.parse(localStorage.getItem('shopi_users')) || [];
  const saveLocal = (newUsers) => {
    const stringifiedItem = JSON.stringify(newUsers);
    localStorage.setItem('shopi_users', stringifiedItem);
  }

  const createUser = (name, password) => {
    const userExist = users.find((user) => user.name === name);
    if(userExist) {
      console.log("user already exists!")
    } else {
      let usersInLocal = [...users];
      usersInLocal.push({name: name, password:password});
      saveLocal(usersInLocal)
      setCurrentUser({name: name, password:password});      
    }
  }

  const logoutUser = () => {
    setCurrentUser(null);
  }

  
  const loginUser = (name, password) => {
    const userExist = users.find((user) => user.name === name);

    if(userExist) {
      setCurrentUser({name: name, password: password});
    } else {
      console.log("user doesnt exists!")
      //return false;
    }
  }



  return (
    <UserContext.Provider value={{
      currentUser,
      createUser,
      logoutUser,
      loginUser
    }}>
      {children}
    </UserContext.Provider>
  )
}

export const useAuthContext = () => {
  return useContext(UserContext);
}
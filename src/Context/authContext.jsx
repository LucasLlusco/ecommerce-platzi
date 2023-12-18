import { createContext, useState, useContext } from 'react'
import { v4 as uuidv4} from 'uuid';

const UserContext = createContext();

export const AuthContextProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null);

  const users = JSON.parse(localStorage.getItem('shopi_users')) || [];
  const saveLocal = (newUsers) => {
    const stringifiedItem = JSON.stringify(newUsers);
    localStorage.setItem('shopi_users', stringifiedItem);
  }

  const createUser = (name, email, password) => {
    const userExist = users.find((user) => user.email === email);
    if(userExist) {
      console.log("user already exists!")
    } else {
      const newUserId = uuidv4()
      const newUser = {
        name: name, 
        email: email, 
        password:password, 
        id: newUserId
      }
      let usersInLocal = [...users];
      usersInLocal.push(newUser);
      saveLocal(usersInLocal)
      setCurrentUser(newUser);      
    }
  }

  const logoutUser = () => {
    setCurrentUser(null);
  }

  
  const loginUser = (email, password) => {
    const userExist = users.find((user) => user.email === email && user.password === password);

    if(userExist) {
      setCurrentUser(userExist);
    } else {
      console.log("user doesnt exists!")
    }
  }

  const editUser = (newName, newEmail, newPassword) => {
    const updatedUser = {
      name: newName, 
      email: newEmail,
      password: newPassword,
      id: currentUser.id
    }

    const userIndex = users.findIndex((user => user.id === currentUser.id));
    let usersInLocal = [...users];
    usersInLocal[userIndex].name = updatedUser.name
    usersInLocal[userIndex].email = updatedUser.email
    usersInLocal[userIndex].password = updatedUser.password
    
    saveLocal(usersInLocal)
    setCurrentUser(updatedUser);
  }



  return (
    <UserContext.Provider value={{
      currentUser,
      createUser,
      logoutUser,
      loginUser,
      editUser
    }}>
      {children}
    </UserContext.Provider>
  )
}

export const useAuthContext = () => {
  return useContext(UserContext);
}
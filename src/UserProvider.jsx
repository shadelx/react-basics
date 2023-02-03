import { useState, createContext, useContext} from "react";


const usercontext = createContext();
const userToggleContext = createContext();

function useUserContext() {
    return useContext(usercontext);
}

function useUserToggleContext() {
    return useContext(userToggleContext);
}

function UserProvider({children}) {

  const [user, setUser] = useState(null);
  
  const cambiaLogin = () => { 
    if(user){
        setUser(null);
    }else{
        setUser({
            name: 'Mike',
            email: 'mike@gmail.com'
        });
    }
   }

  return (
    <usercontext.Provider value ={user}>
        <userToggleContext.Provider value={cambiaLogin}>
            {children}
        </userToggleContext.Provider>
    </usercontext.Provider>
  )
}

export  {UserProvider, useUserContext, useUserToggleContext}
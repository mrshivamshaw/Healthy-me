import axios from "axios";
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children}) =>{
    const checkAuth = async () => {
        try {
          const response = await axios.post(
            "http://localhost:3000/api/v1/checkAuth",
            null,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
      
          console.log("grant",response.data.message);
            console.log(response.data.message);
          if (response.data.message !== "Access granted") {
             localStorage.removeItem("token");
            setIsLoggedIn(false); // Update the state when token is removed
          }
        } catch (error) {
            localStorage.removeItem("token");
            setIsLoggedIn(false); 
          console.log(error);
        }
      };
      
      
    const [isLoggedIn,setIsLoggedIn] = useState(!!(localStorage.getItem("token")));

    const storeInLs = (token) => {
        return localStorage.setItem("token",token)
    }
    const getFromLs = () =>{
        if(localStorage.getItem("token")){
            setIsLoggedIn(true)
        }
        else{
            setIsLoggedIn(false);
        }
        console.log(isLoggedIn);
    }

    return (
        <AuthContext.Provider value={{storeInLs,isLoggedIn,setIsLoggedIn,getFromLs,checkAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () =>{
    return useContext(AuthContext)
}

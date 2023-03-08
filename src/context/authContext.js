import {createContext, useEffect, useState} from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) =>{
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user"))  || null
    );

    const login = () =>{
       //TO DO
       setCurrentUser({
        id:1, 
        name:"John Doe", 
        profilePic:
        "https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=a2f8c40e39b8dfee1534eb32acfa6bc7",
    });
    };

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return(
        <AuthContext.Provider value={{currentUser, login  }}>
            {children}
        </AuthContext.Provider>
    );
    
};
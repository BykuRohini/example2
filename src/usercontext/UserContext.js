import React from 'react';
const data={name:"nani",age:25};
export const UserContext=React.createContext();
export const UserContextProvider=({children})=>{
    return (
        <UserContext.Provider value={data}>{children} </UserContext.Provider>
    )
}
import React , {  useState, createContext } from 'react';


export const AppContext = createContext();

export const AppProvider = (props) => {

   const [points , setPoints] = useState(0);




    return (
            <AppContext.Provider
            value={ {
                points,
                setPoints
              }}
               >
                {props.children}
            </AppContext.Provider>
    )
}
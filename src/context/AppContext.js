import React , {  useState, createContext } from 'react';


export const AppContext = createContext();

export const AppProvider = (props) => {

   const [nameRet , setNameRet] = useState('');
   const [idRet , setIdRet] = useState('');
   const [commisonRet , setCommisonRet] = useState('');
   const [documentId , setDocumentId] = useState('');
   const [thumAvatar , setThumAvatar] = useState('');
   const [indexCard , setIndexCard] = useState('');



    return (
            <AppContext.Provider
            value={ {
                nameRet,
                setNameRet,
                idRet,
                setIdRet,
                commisonRet,
                setCommisonRet,
                setDocumentId,
                documentId,
                setThumAvatar,
                thumAvatar,
                setIndexCard,
                indexCard
              }}
               >
                {props.children}
            </AppContext.Provider>
    )
}
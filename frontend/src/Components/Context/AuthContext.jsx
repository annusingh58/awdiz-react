import { createContext, useReducer } from "react";


export const AuthContext=createContext();

const initialState={user:null}

const reducer=(state,action)=>{
    switch(action.type){
        case "LOGIN":
            return {...state,user:action.payload};
        case "LOGOUT":
            return {...state,user:null};
        default:
            return state;
    }
}
// higher oreder component 
const HandleAuthContext=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);

    return(
        <AuthContext.Provider value={{state,dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export default HandleAuthContext;

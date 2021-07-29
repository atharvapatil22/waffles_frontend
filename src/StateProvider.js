import React, {createContext,useContext,useReducer} from 'react';

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children} 
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

//children = App
//6-8: allows us to set up the data layer
//11: pull info from data layer
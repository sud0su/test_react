import React, { createContext, useReducer, useContext } from "react";
import Reducer from './reducer'


const initialState = {
    show: '0',
    max: 5,
    avaSize: "lg"
};

export const Context = createContext(initialState);

const Store = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const useFeature = () => useContext(Context);

export default Store;
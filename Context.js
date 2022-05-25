import React, { createContext, useReducer, useEffect } from "react";

export const CartContext = createContext();

const reducer = (state, action) => {

    if (action.type == "ADD_TO_CART") {
        localStorage.setItem('cartItem', JSON.stringify([action.payload, ...state]))
        return [action.payload, ...state];
    }
    if (action.type == "REMOVE_FROM_CART") {
        localStorage.setItem('cartItem', (state.filter(s => s.id !== action.payload.id)));
        return state.filter(s => s.id !== action.payload.id
        )
    }
    else {
        return state;
    }

}

let js = localStorage.getItem('cartItem'), something = [];

if (js) {
    something = JSON.parse(js)
}


export const MainContext = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, something);
    return (
        <CartContext.Provider value={[state, dispatch]}>
            {
                children
            }
        </CartContext.Provider>
    )
}
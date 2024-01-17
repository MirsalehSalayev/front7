import React, { createContext } from 'react'
import useLocal from '../hooks/useLocal'
export const BasketContext = createContext()
function BasketProvider({ children }) {
    const [basket, setBasket] = useLocal("basket", [])
    function AddBasket (item){
        const elementindex = basket.findIndex(x => x._id === item._id)
        if (elementindex === -1) {
            setBasket([...basket, { ...item }])
            return;
        }
        setBasket([...basket])
    }
    return (
        <BasketContext.Provider value={{AddBasket,basket}}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketProvider
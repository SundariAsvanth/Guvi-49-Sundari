import React, {createContext,useContext,useState} from 'react'

const CartContext = createContext();

function CartProvider({children}){
  const[amount,setAmount]=useState(0);
  const[amount2,setAmount2]=useState(0);
  const[amount3,setAmount3]=useState(0);
  const[amount4,setAmount4]=useState(0);
  const[amount5,setAmount5]=useState(0);
  const[amt,setAmt]=useState(0);

  return (
    <CartContext.Provider value={{amount,setAmount,amount2,setAmount2,amount3,setAmount3,amount4,setAmount4,amount5,setAmount5,amt,setAmt}}>
      {children}
    </CartContext.Provider>
  )
}

export {CartContext,CartProvider}
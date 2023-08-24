import React, {useContext} from 'react'
import { CartContext } from './CartContext'

function Amount() {
    const {amount,amount2,amount3,amount4,amount5,amt,setAmt} = useContext(CartContext);


  return (
    <div id="amt">Total Amount : ${amt}
    </div>

  )
}

export default Amount
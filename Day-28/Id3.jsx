import React,{useState,useContext} from 'react'
import { CartContext } from './CartContext'

function Id3() {
    const [count,setCount]=useState(0);
    const {amount3,setAmount3}=useContext(CartContext);
    const {amount,amount2,amount4,amount5,amt,setAmt} = useContext(CartContext);


    const addCount = () => {
        setCount(count+1);
        if(count>=0)
        setAmount3(amount3+1249);
        setAmt(amt+1249);
    }

    const removeCount = () => {
        setCount(count-1);
        if(count<=0){
            alert("Please Enter Valid Count!!!");
            setCount(0);
        }
        if(count>0){
        setAmount3(amount3-1249);
        setAmt(amt-1249);
        }
    }
  return (
    <div>
    <div className='products'>
    <img src="https://i.dummyjson.com/data/products/3/1.jpg" />
    <h1 id="sam">Samsung Universe 9</h1>
    <p>Price: $1249</p>
    <p id="more">Stock:36   Rating:4.09   Discount : 15.46%</p>
    <button className="btn"  onClick={addCount}>
          Add to cart {count}
        </button>
        <button className="btn1" onClick={removeCount}>
          Remove from cart {count}
        </button>
        <p>
          Amount: ${amount3}
        </p>
    </div>
    </div>
  )
}

export default Id3
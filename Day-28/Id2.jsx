import React,{useState,useContext} from 'react'
import { CartContext } from './CartContext'

function Id2() {
    const [count,setCount]=useState(0);
    const {amount2,setAmount2}=useContext(CartContext);
    const {amount,amount3,amount4,amount5,amt,setAmt} = useContext(CartContext);

    const addCount = () => {
        setCount(count+1);
        if(count>=0)
        setAmount2(amount2+899);
        setAmt(amt+899);
    }

    const removeCount = () => {
        setCount(count-1);
        if(count<=0){
            alert("Please Enter Valid Count!!!");
            setCount(0);
        }
        if(count>0){
        setAmount2(amount2-899);
        setAmt(amt-899);
        }
    }
  return (
    <div>
    <div className='products'>
    <img src="https://i.dummyjson.com/data/products/2/1.jpg" />
    <h1 id="ip">iPhone X</h1>
    <p>Price: $899</p>
    <p id="more">Stock:34   Rating:4.44   Discount : 17.94%</p>
    <button className="btn"  onClick={addCount}>
          Add to cart {count}
        </button>
        <button className="btn1" onClick={removeCount}>
          Remove from cart {count}
        </button>
        <p>
          Amount: ${amount2}
        </p>
    </div>
    </div>
  )
}

export default Id2
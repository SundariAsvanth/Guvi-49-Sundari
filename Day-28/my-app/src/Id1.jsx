import React,{useState,useContext} from 'react'
import { CartContext } from './CartContext'

function Id1() {
    const [count,setCount]=useState(0);
    const {amount,setAmount}=useContext(CartContext);
    const {amount2,amount3,amount4,amount5,amt,setAmt} = useContext(CartContext);

    

    const addCount = () => {
        setCount(count+1);
        if(count>=0)
        setAmount(amount+549);
        setAmt(amt+549);
    }

    const removeCount = () => {
        setCount(count-1);
        if(count<=0){
            alert("Please Enter Valid Count!!!");
            setCount(0);
        }
        if(count>0){
        setAmount(amount-549);
        setAmt(amt-549);
        }
    }


  return (
    <div>
    <div className='products'>
    <img src="https://i.dummyjson.com/data/products/1/1.jpg" />
    <h1 id="iph">iPhone 9</h1>
    <p>Price: $549</p>
    <p id="more">Stock:94   Rating:4.69   Discount : 12.96%</p>
    <button className="btn"  onClick={addCount}>
          Add to cart {count}
        </button>
        <button className="btn1" onClick={removeCount}>
          Remove from cart {count}
        </button>
        <p>
          Amount: $ {amount}
        </p>
    </div>
    </div>
  )
}

export default Id1
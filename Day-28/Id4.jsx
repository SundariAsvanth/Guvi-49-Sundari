import React,{useState,useContext} from 'react'
import { CartContext } from './CartContext'

function Id4() {
    const [count,setCount]=useState(0);
    const {amount4,setAmount4}=useContext(CartContext);
    const {amount,amount2,amount3,amount5,amt,setAmt} = useContext(CartContext);


    const addCount = () => {
        setCount(count+1);
        if(count>=0)
        setAmount4(amount4+280);
        setAmt(amt+280);
    }

    const removeCount = () => {
        setCount(count-1);
        if(count<=0){
            alert("Please Enter Valid Count!!!");
            setCount(0);
        }
        if(count>0){
        setAmount4(amount4-280);
        setAmt(amt-280);
        }
    }
  return (
    <div>
        <div className='products'>
   <img src="https://i.dummyjson.com/data/products/4/1.jpg" />
    <h1 id="oppo">OPPOF19</h1>
    <p>Price: $280</p>
    <p id="more">Stock:123   Rating:4.3   Discount : 17.91%</p>
    <button className="btn"  onClick={addCount}>
          Add to cart {count}
        </button>
        <button className="btn1" onClick={removeCount}>
          Remove from cart {count}
        </button>
        <p>
          Amount: ${amount4}
        </p>
    </div>
    </div>
  )
}

export default Id4
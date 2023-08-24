import React,{useState,useContext} from 'react'
import { CartContext } from './CartContext'

function Id5() {
    const [count,setCount]=useState(0);
    const {amount5,setAmount5}=useContext(CartContext);
    const {amount,amount2,amount3,amount4,amt,setAmt} = useContext(CartContext);


    const addCount = () => {
        setCount(count+1);
        if(count>=0)
        setAmount5(amount5+499);
        setAmt(amt+499);
    }

    const removeCount = () => {
        setCount(count-1);
        if(count<=0){
            alert("Please Enter Valid Count!!!");
            setCount(0);
        }
        if(count>0){
        setAmount5(amount5-499);
        setAmt(amt-499);
        }
    }
  return (
    <div>
        <div className='products'>
        <img src="https://i.dummyjson.com/data/products/5/1.jpg" />
    <h1 id="hua">Huawei P30</h1>
    <p>Price: $499</p>
    <p id="more">Stock:32  Rating:4.09  Discount : 10.58%</p>
    <button className="btn"  onClick={addCount}>
          Add to cart {count}
        </button>
        <button className="btn1" onClick={removeCount}>
          Remove from cart {count}
        </button>
        <p>
          Amount: ${amount5}
        </p>
    </div>
    </div>
  )
}

export default Id5
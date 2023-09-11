import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useDispatch,useSelector} from 'react-redux';
import { increment,decrement} from './counterSlice';
import { increment2,decrement2} from './counterSlice2';
import { increment3,decrement3} from './counterSlice3';
import { increment4,decrement4} from './counterSlice4';
import { increment5,decrement5} from './counterSlice5';

function App() {
  const[total,setTotal]=useState(0);
  const[total2,setTotal2]=useState(0);
  const[total3,setTotal3]=useState(0);
  const[total4,setTotal4]=useState(0);
  const[total5,setTotal5]=useState(0);
  const[amount,setAmount]=useState(0);
  const[quantity,setQuantity]=useState(0);

const dispatch=useDispatch();

const count=useSelector(state=>state.counter);
const count2=useSelector(state=>state.counter2);
const count3=useSelector(state=>state.counter3);
const count4=useSelector(state=>state.counter4);
const count5=useSelector(state=>state.counter5);

const add=()=>{
    setTotal(total+549);
    setAmount(amount+549);
    setQuantity(quantity+1);
}
const sub=()=>{
  setTotal(total-549);
  setAmount(amount-549);
  setQuantity(quantity-1);
  if(total<=0){
    alert("Invalid Quantity : value should be greater than or equal to 0");
    setTotal(total-549);
    setAmount(amount-549);
    setQuantity(quantity-1);
  }
}

const add2=()=>{
  setTotal2(total2+899);
  setAmount(amount+899);
  setQuantity(quantity+1);
}
const sub2=()=>{
setTotal2(total2-899);
setAmount(amount-899);
setQuantity(quantity-1);
if(total2<=0){
  alert("Invalid Quantity : value should be greater than or equal to 0");
  setTotal2(total2-899);
  setAmount(amount-899);
  setQuantity(quantity-1);
}
}

const add3=()=>{
  setTotal3(total3+1249);
  setAmount(amount+1249);
  setQuantity(quantity+1);
}
const sub3=()=>{
setTotal3(total3-1249);
setAmount(amount-1249);
setQuantity(quantity-1);
if(total3<=0){
  alert("Invalid Quantity : value should be greater than or equal to 0");
  setTotal3(total3-1249);
  setAmount(amount-1249);
  setQuantity(quantity-1);
}
}


const add4=()=>{
  setTotal4(total4+280);
  setAmount(amount+280);
  setQuantity(quantity+1);
}
const sub4=()=>{
setTotal4(total4-280);
setAmount(amount-280);
setQuantity(quantity-1);
if(total4<=0){
  alert("Invalid Quantity : value should be greater than or equal to 0");
  setTotal4(total4-280);
  setAmount(amount-280);
  setQuantity(quantity-1);
}
}


const add5=()=>{
  setTotal5(total5+499);
  setAmount(amount+499);
  setQuantity(quantity+1);
}
const sub5=()=>{
setTotal5(total5-499);
setAmount(amount-499);
setQuantity(quantity-1);
if(total5<=0){
  alert("Invalid Quantity : value should be greater than or equal to 0");
  setTotal5(total5-499);
  setAmount(amount-499);
  setQuantity(quantity-1);
}
}



  return (
    <>
      <div className="cart_section">
     <div className="container-fluid">
         <div className="row">
             <div className="col-lg-10 offset-lg-1">
                 <div className="cart_container">
                     <div className="cart_title">Shopping Cart</div>


                     <div className="order_total">
                         <div className="order_total_content text-md-right">
                             <div className="order_total_title">Items in Cart : {quantity} </div>
                             <div className="order_total_amount">Total Amount : {amount}</div>
                         </div>
                     </div>

                     <div className="cart_items">
                         <ul className="cart_list">
                             <li className="cart_item clearfix">
                                 <div className="cart_item_image"><img src="https://i.dummyjson.com/data/products/1/1.jpg" alt="" ></img></div>
                                 <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                     <div className="cart_item_name cart_info_col">
                                         <div className="cart_item_title">Name</div>
                                         <div className="cart_item_text">iPhone 9</div>
                                     </div>
                                         <div className="cart_item_quantity cart_info_col">
                                         <div className="cart_item_title">Quantity</div>
                                         <div className="cart_item_text">{count}</div>
                                     </div>
                                     <div className="cart_item_price cart_info_col">
                                         <div className="cart_item_title">Price</div>
                                         <div className="cart_item_text">$549</div>
                                     </div>
                                     <div className="cart_item_total cart_info_col">
                                         <div className="cart_item_title">Total</div>
                                         <div className="cart_item_text">{total}</div>
                                     </div>
                                 </div>
                             </li>
                         </ul>
                     </div>
                      <button type="button" className="btn btn-success" onClick={()=>dispatch(increment())&&add()}>Add to Cart</button><button type="button" class="btn btn-danger" onClick={()=>dispatch(decrement())&&sub()}>Remove from Cart</button> 

                     <div className="cart_items">
                         <ul className="cart_list">
                             <li className="cart_item clearfix">
                                 <div className="cart_item_image"><img src="https://i.dummyjson.com/data/products/2/1.jpg" alt="" ></img></div>
                                 <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                     <div className="cart_item_name cart_info_col">
                                         <div className="cart_item_title">Name</div>
                                         <div className="cart_item_text">iPhone X</div>
                                     </div>
                                         <div className="cart_item_quantity cart_info_col">
                                         <div className="cart_item_title">Quantity</div>
                                         <div className="cart_item_text">{count2}</div>
                                     </div>
                                     <div className="cart_item_price cart_info_col">
                                         <div className="cart_item_title">Price</div>
                                         <div className="cart_item_text">$899</div>
                                     </div>
                                     <div className="cart_item_total cart_info_col">
                                         <div className="cart_item_title">Total</div>
                                         <div className="cart_item_text">{total2}</div>
                                     </div>
                                 </div>
                             </li>
                         </ul>
                     </div>
                     <button type="button" className="btn btn-success" onClick={()=>dispatch(increment2())&&add2()}>Add to Cart</button><button type="button" class="btn btn-danger" onClick={()=>dispatch(decrement2())&&sub2()}>Remove from Cart</button> 

                     <div className="cart_items">
                         <ul className="cart_list">
                             <li className="cart_item clearfix">
                                 <div className="cart_item_image"><img src="https://i.dummyjson.com/data/products/3/1.jpg" alt="" ></img></div>
                                 <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                     <div className="cart_item_name cart_info_col">
                                         <div className="cart_item_title">Name</div>
                                         <div className="cart_item_text">Samsung Universe 9</div>
                                     </div>
                                         <div className="cart_item_quantity cart_info_col">
                                         <div className="cart_item_title">Quantity</div>
                                         <div className="cart_item_text">{count3}</div>
                                     </div>
                                     <div className="cart_item_price cart_info_col">
                                         <div className="cart_item_title">Price</div>
                                         <div className="cart_item_text">$1249</div>
                                     </div>
                                     <div className="cart_item_total cart_info_col">
                                         <div className="cart_item_title">Total</div>
                                         <div className="cart_item_text">{total3}</div>
                                     </div>
                                 </div>
                             </li>
                         </ul>
                     </div>
                     <button type="button" className="btn btn-success" onClick={()=>dispatch(increment3())&&add3()}>Add to Cart</button><button type="button" class="btn btn-danger" onClick={()=>dispatch(decrement3())&&sub3()}>Remove from Cart</button> 

                     <div className="cart_items">
                         <ul className="cart_list">
                             <li className="cart_item clearfix">
                                 <div className="cart_item_image"><img src="https://i.dummyjson.com/data/products/4/thumbnail.jpg" alt="" ></img></div>
                                 <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                     <div className="cart_item_name cart_info_col">
                                         <div className="cart_item_title">Name</div>
                                         <div className="cart_item_text">OPPOF19</div>
                                     </div>
                                         <div className="cart_item_quantity cart_info_col">
                                         <div className="cart_item_title">Quantity</div>
                                         <div className="cart_item_text">{count4}</div>
                                     </div>
                                     <div className="cart_item_price cart_info_col">
                                         <div className="cart_item_title">Price</div>
                                         <div className="cart_item_text">$280</div>
                                     </div>
                                     <div className="cart_item_total cart_info_col">
                                         <div className="cart_item_title">Total</div>
                                         <div className="cart_item_text">{total4}</div>
                                     </div>
                                 </div>
                             </li>
                         </ul>
                     </div>
                     <button type="button" className="btn btn-success" onClick={()=>dispatch(increment4())&&add4()}>Add to Cart</button><button type="button" class="btn btn-danger" onClick={()=>dispatch(decrement4())&&sub4()}>Remove from Cart</button> 

                     <div className="cart_items">
                         <ul className="cart_list">
                             <li className="cart_item clearfix">
                                 <div className="cart_item_image"><img src="https://i.dummyjson.com/data/products/5/1.jpg" alt="" ></img></div>
                                 <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                     <div className="cart_item_name cart_info_col">
                                         <div className="cart_item_title">Name</div>
                                         <div className="cart_item_text">Huawei P30</div>
                                     </div>
                                         <div className="cart_item_quantity cart_info_col">
                                         <div className="cart_item_title">Quantity</div>
                                         <div className="cart_item_text">{count5}</div>
                                     </div>
                                     <div className="cart_item_price cart_info_col">
                                         <div className="cart_item_title">Price</div>
                                         <div className="cart_item_text">$499</div>
                                     </div>
                                     <div className="cart_item_total cart_info_col">
                                         <div className="cart_item_title">Total</div>
                                         <div className="cart_item_text">{total5}</div>
                                     </div>
                                 </div>
                             </li>
                         </ul>
                     </div>
                     <button type="button" className="btn btn-success" onClick={()=>dispatch(increment5())&&add5()}>Add to Cart</button><button type="button" class="btn btn-danger" onClick={()=>dispatch(decrement5())&&sub5()}>Remove from Cart</button> 

                    
                 </div>
             </div>
         </div>
     </div>
 </div>

    </>
  )
}

export default App

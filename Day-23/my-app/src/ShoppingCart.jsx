import React from 'react'
import { useState } from 'react'

function ShoppingCart() {
    const [count,setCount]=useState(0);
    const [count2,setCount2]=useState(0);
    const [count3,setCount3]=useState(0);

    const [flag, setFlag] = useState(true);
    const handleClickAdd=()=>{
        setFlag(false);
        setCount(count+1);
    }
    function handleClickRemove() { 
        setFlag(true);
        setCount(count-1);
     }

    const [flag2, setFlag2] = useState(true);
    const handleClickAdd2=()=>{setFlag2(false);setCount2(count2+1);}
    function handleClickRemove2() { setFlag2(true);setCount2(count2-1); }

    const [flag3, setFlag3] = useState(true);
    const handleClickAdd3=()=>{setFlag3(false);setCount3(count3+1);}
    function handleClickRemove3() { setFlag3(true);setCount3(count3-1); }

  return (
    <div>
        <div class="wrapper">
       <div class="table basic">
           <div class="price-section">
               <div class="price-area">
                   <div class="inner-area">
                       <span class="text">
                         &#8377;
                       </span>
                       <span class="price">1999</span>
                   </div>
               </div>
           </div>
           <div class="package-name">
    
           </div>
           <div class="features">
               <li>
                   <span class="list-name">Fry Pan(size-medium)</span>
                   <span class="icon check"><i class="fas fa-check-circle"></i></span>
               </li>
               <li>
                   <span class="list-name">Fry Kadai(size-medium)</span>
                   <span class="icon check"><i class="fas fa-check-circle"></i></span>
               </li>
               <li>
                   <span class="list-name">DosaTawa(Size-medium)</span>
                   <span class="icon cross"><i class="far fa-times-circle"></i></span>
               </li>
               <li>
                   <span class="list-name">Pressure Cooker(2 ltr)</span>
                   <span class="icon cross"><i class="far fa-times-circle"></i></span>
               </li>
               {flag ? <button id="add" onClick={handleClickAdd}>Add to cart</button> : <button id="rem" onClick={handleClickRemove}>Remove from cart</button> }
           </div>
       </div>
       <div class="table Premium">
           <div class="price-section">
               <div class="price-area">
                   <div class="inner-area">
                       <span class="text">
                         &#8377;
                       </span>
                       <span class="price">3199</span>
                   </div>
               </div>
           </div>
           <div class="package-name">
            
           </div>
           <div class="features">
               <li>
                   <span class="list-name">Fry Pan(size-medium)</span>
                   <span class="icon check"><i class="fas fa-check-circle"></i></span>
               </li>
               <li>
                   <span class="list-name">Fry Kadai(size-small)</span>
                   <span class="icon check"><i class="fas fa-check-circle"></i></span>
               </li>
               <li>
                   <span class="list-name">Fry Kadai(size-medium)</span>
                   <span class="icon check"><i class="fas fa-check-circle"></i></span>
               </li>
               <li>
                   <span class="list-name">DosaTawa(Size-medium)</span>
                   <span class="icon cross"><i class="far fa-times-circle"></i></span>
               </li>
               {flag2 ? <button id="add" onClick={handleClickAdd2}>Add to cart</button> : <button id="rem" onClick={handleClickRemove2}>Remove from cart</button> }
           </div>
       </div>
       <div class="table Ultimate">
           <div class="price-section">
               <div class="price-area">
                   <div class="inner-area">
                       <span class="text">
                          &#8377;
                       </span>
                       <span class="price">999</span>
                   </div>
               </div>
           </div>
           <div class="package-name">
               
           </div>
           <div class="features">
               <li>
                   <span class="list-name">Fry Pan(size-medium)</span>
                   <span class="icon check"><i class="fas fa-check-circle"></i></span>
               </li>
               <li>
                   <span class="list-name">Fry Kadai(size-small)</span>
                   <span class="icon check"><i class="fas fa-check-circle"></i></span>
               </li>
               <li>
                   <span class="list-name">Fry Kadai(size-medium)</span>
                   <span class="icon check"><i class="fas fa-check-circle"></i></span>
               </li>
               <li>
                   <span class="list-name">SaucePan(size-medium)</span>
                   <span class="icon check"><i class="fas fa-check-circle"></i></span>
               </li>
               {flag3 ? <button id="add" onClick={handleClickAdd3}>Add to cart</button> : <button id="rem" onClick={handleClickRemove3}>Remove from cart</button> }
           </div>
       </div>
   </div>
    
<button id="tot">Total Items In Cart: {count+count2+count3}</button>

       </div>
  )
}

export default ShoppingCart
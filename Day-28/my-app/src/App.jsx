import { useState } from 'react'
import './App.css'
import {CartProvider} from './CartContext';
import Id1 from './Id1';
import Id2 from './Id2';
import Id3 from './Id3';
import Id4 from './Id4';
import Id5 from './Id5';
import Amount from './Amount';

function App() {
  return (
    <CartProvider>
         <div>
         <h1 id="head">ASNN.com</h1>
    <h2>Your Purchasing Partner</h2>
    <p id="cat">Category:Smartphones</p>
    <Id1 />
    <Id2 />
    <Id3 />
    <Id4 />
    <Id5 />
    </div>
    <Amount />
</CartProvider>
   
  )
}

export default App

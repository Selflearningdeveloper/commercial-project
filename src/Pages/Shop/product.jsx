 import React from 'react'
 
 const Product = (props) => {
    const {id, production, price, productImage }=props.data;
   return (
     <div classroom ="product">
        <img src={productImage} />
        <div className="description">
            <p>
                <b>{productName}</b>
            </p>
            <p> ${price}</p>
       </div> 
     </div>
   )
 }
 
 
import React from "react";
// import  { useState } from 'react';
 
 
import"../ventanas/modal.css"

 


 

const modal = ( {show, close}) =>{
  
 
     
      
//     // function useQuantity(defaultQuantity) {
//     //     const [value, setvalue] = useState(defaultQuantity || 1);
//     //     function onChange(e) {
//     //       if (!+e.target.value >= 1) {
//     //         setvalue(1);
//     //         return;
//     //       }
//     //       setvalue(+e.target.value);
//     //     }
//     //     return {
//     //       value,
//     //       setvalue,
//     //       onChange
//     //     };
//     //   }    
 
    return(
        
    <div  style={{opacity: show ? '1' : '0'}}    className="modal-content"> 
   
   <header className="modal-header" id="closeModal">
    <h1 id="headerModal"></h1>
     <span onClick={close}   className="close">&times;</span>
    </header>
    <article   className="modal-body"> 
     <section className="contentElement" id="contentElement">
      
        <div className='quantityDiv'>
                <h3></h3>
         
                {/* <button onClick={() => {
                  quantity.setvalue(quantity.value - 1)}}
                  disabled={quantity.value === 1}
                  >- </button>
                <input  className= 'inputQuantity' onChange={quantity.onChange} value={quantity.value}></input>
                <button onClick={() => {quantity.setvalue(quantity.value + 1)}}>+</button> */}
              </div>
       <button  className="btnorder" id="btnsave">Order</button>
        
     </section>
  </article>
    
         
       </div> 
    );
};

  
export default modal;


  
  
   
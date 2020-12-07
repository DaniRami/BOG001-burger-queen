import "../kitchen/kitchen.css";
import { updateOrder } from "../../firebase";
import React, { useState } from 'react'

const Kitchen = (props) => {
    console.log(props.order)
    
 
     
  return (
     
    <div className="div-kitchen">
      <div className="targue-kitchen">
        <h1 className="table-customer">{`Table ${props.order.table} - ${props.order.customer}`}</h1>
        <input className="input-status" value={`${props.order.status}`} />
        <div className="targue-kitchen2">
          {props.order.items.map((item) => (
            <h3 className="order-targue">{` ${item.quantity} - ${item.name}`}</h3>
            
          ))}
          
             <p className="TOTAL">{` Total $ ${props.order.total}`}</p>
             <p className="time">{`Time ${props.order.date}`}</p>
          
           
            
        </div>
        <button
            className="ready"  
           
            onClick={() => {
              updateOrder(props.order.id);
            }}
          >
            READY
          </button>
      </div>
     </div>
      
  );
          
}

export default Kitchen;

import  React from "react";
import "../deliver/deliver.css"
import Time from "../time/timeorder"

const DeliverOrders = (props) =>{
   
    return(
        <div className="contenedor-deliver">
        <div className="div-deliver">
        <h1 className="table-customer">{`Table ${props.order.table} - ${props.order.customer}`}</h1>
        <input className="input-status" value={`${props.order.status}`} />
        <div className="targue-kitchen2">
          {props.order.items.map((item) => (
            <h3 className="order-targue">{`${item.quantity} - ${item.name}`}</h3>
          ))}
          <p className="TOTAL">{` Total $ ${props.order.total}`}</p>
          {/* <p className="time"></p> */}
          {
           <Time time={props.order.date}/>
          }
          
          </div>
          
          
        </div>
        </div>
    )
}

export default DeliverOrders;
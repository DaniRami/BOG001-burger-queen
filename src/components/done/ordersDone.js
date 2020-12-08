import  React from "react";
import "../done/done.css"
import { updateDone } from "../../firebase";
import Time from "../time/timeorder" 



const DoneOrders = (props) =>{
  
    return(
        <div className="contenedor-done"> 
        <div className="div-done">
        <h1 className="table-customer">{`Table ${props.order.table} - ${props.order.customer}`}</h1>
        <input className="input-status" value={`${props.order.status}`} />
        <div className="targue-kitchen2">
          {props.order.items.map((item) => (
            <h3 className="order-targue">{`${item.quantity} - ${item.name}`}</h3>
          ))}
           <p className="TOTAL">{` Total $ ${props.order.total}`}</p>
          {/* <p className="time">{props.hora}</p> */}
          {
            <Time time={props.order.date}/>
          }
          
          </div>
          <button
            className="deliver"
            onClick={() => {
              updateDone(props.order.id);
            }}
          >
            DELIVER
          </button>
        </div>
        </div>
    )
}


export default DoneOrders
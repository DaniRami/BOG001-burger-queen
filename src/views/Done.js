import React,{useEffect, useState} from "react";
import DoneOrders from"../components/done/ordersDone"
import { Link } from 'react-router-dom'; 
import {viewDoneOrders} from "../firebase"
 

const Dones = () =>{
    
     
    const [dones, setDones] = useState([])
useEffect(() => {
    viewDoneOrders().onSnapshot(snapshot => {
        const getDones = []
        snapshot.forEach(doc => getDones.push({...doc.data(),id: doc.id}));
        console.log(getDones)
        setDones(getDones)
        
    })
    
},[])

 
    return(
    <div>
         <nav className="nav-done">  
      <Link style={{textDecoration:"none", display:"block"}} from="/" to="/page/menu"> 
            <h1 className="ordersDone">MENÚ</h1>
            </Link>
            <Link style={{textDecoration:"none", display:"block"}} from="/" to="/page/kitchen"> 
            <h1 className="ordersKitchen">KITCHEN</h1>
            </Link>
            <Link style={{textDecoration:"none", display:"block"}} from="/" to="/page/deliver"> 
            <h1 className="ordersDelivered">DELIVERED</h1>
            </Link>
            <Link style={{textDecoration:"none", display:"block"}} from="/" to="/page/welcome"> 
            <h1 className="ordersLeave">LEAVE</h1>
            </Link>
      </nav>
      {
                dones.map(doc => <DoneOrders order={doc}/> )
            }
       
        
    </div>
    )
}


export default Dones
import React,{useEffect, useState} from "react";
import DeliverOrders from"../components/deliver/ordersDeliver"
import { Link } from 'react-router-dom'; 
import {viewDelivers} from "../firebase"


const Deliver = () =>{
    const [deliver, setDeliver] = useState([])
    useEffect(() => {
        viewDelivers().onSnapshot(snapshot => {
            const getDeliver = []
            snapshot.forEach(doc => getDeliver.push({...doc.data(),id: doc.id}));
            console.log(getDeliver)
            setDeliver(getDeliver)
            
        })
        
    },[])
    return(
        <div>
            <nav className="nav-deliver">
        <Link style={{textDecoration:"none", display:"block"}} from="/" to="/page/done"> 
            <h1 className="ordersDone">ORDERS TO  DELIVER</h1>
            </Link>
            <Link style={{textDecoration:"none", display:"block"}} from="/" to="/page/menu"> 
            <h1 className="ordersMenu">MENÚ</h1>
            </Link>
            <Link style={{textDecoration:"none", display:"block"}} from="/" to="/page/kitchen"> 
            <h1 className="ordersKitchen">KITCHEN</h1>
            </Link>
            <Link style={{textDecoration:"none", display:"block"}} from="/" to="/page/welcome"> 
            <h1 className="ordersWelcome">LEAVE</h1>
            </Link>
        </nav>
        {
                deliver.map(doc => <DeliverOrders order={doc}/> )
            }
       
 
        </div>
    )
}

export default Deliver;
import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Kitchen from "../components/kitchen/orderKitchen"
import {viewOrders} from "../firebase"

const   KitchenC = () =>{
const [docts, setDocts] = useState([])
useEffect(() => {
    viewOrders().onSnapshot(snapshot => {
        const getData = []
        snapshot.forEach(doc => getData.push({...doc.data(),id: doc.id}));
        console.log(getData)
        setDocts(getData)
        
    })
    
},[])
 

    return(
        <div>
        
        <nav className="nav">
        <Link style={{textDecoration:"none", display:"block"}} from="/" to="/page/done"> 
            <h1 className="ordersDone">ORDERS TO  DELIVER</h1>
            </Link>
            <Link style={{textDecoration:"none", display:"block"}} from="/" to="/page/menu"> 
            <h1 className="ordersMenu">MENÚ</h1>
            </Link>
            <Link style={{textDecoration:"none", display:"block"}} from="/" to="/page/deliver"> 
            <h1 className="ordersDelivered">DELIVERED</h1>
            </Link>
            <Link style={{textDecoration:"none", display:"block"}} from="/" to="/page/welcome"> 
            <h1 className="ordersLeave">LEAVE</h1>
            </Link>
        </nav>
            {
                docts.map(doc => <Kitchen order={doc}/> )
            }
 

        </div>
    )
}

export default KitchenC;
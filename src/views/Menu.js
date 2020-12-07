import React, { useState } from 'react';
import ProductCard from "../components/productCard/productCard";
import Button from "../components/button"
import dataMenu from "../constants/menu.json";
import OrderCard from "../components/orderCard/orderCard"
import Table from "../components/orderCard/table"
import Titles from "../components/orderCard/titles"
import Total from "../components/orderCard/total"
import Customer from "../components/orderCard/customer"
import { Link } from 'react-router-dom';
import moment  from"moment";
import  {createOrder} from '../firebase'
import { toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

toast.configure()


const Menu = ({total} ) => {

  const [state,  statecurrent] = useState({type: 0});
  
  const initialValues = {
    table: '',
    customer:'',
    items: [],
    total: total,
    quantity:0,
    date: moment().format('hh-mm-ss'),
    timeStart: "",
    timeEnd: "",
    status: 'in progress'
  }

const ValidateHoursMin = (startTime, endTime) => {
    return endTime != "" ? startTime > endTime ? endTime : startTime : startTime
}
const ValidateHoursMax = (startTime, endTime) => {
    return startTime != "" ? endTime < startTime ? startTime : endTime : endTime
}
const CalculateTime = (startTime, endTime) => {
    return `${(moment.duration(moment(`10/10/2020 ${endTime}`).diff(moment(`10/10/2020 ${startTime}`))))._data.hours} h: ${(moment.duration(moment(`10/10/2020 ${endTime}`).diff(moment(`10/10/2020 ${startTime}`))))._data.minutes} m`
}

  const [order, setOrder] = useState(initialValues)

  const setTable = (table) => {
    table = parseInt(table)
    setOrder({ ...order, table })
  }
const setCustomer = (customer) =>{
setOrder({...order, customer })
}

 
  const addProduct = (product) => {
    if (order.items.find(item => item.id === product.id)) {
        console.log()
    } else{
        setOrder({
            ...order,
            items: [
                ...order.items,
                {...product, quantity: 1}
            ]
        })
    }
}

const deleteItem = (id) => {
    setOrder({
        ...order,
        items: order.items.filter(orde => orde.id !== id )
    })
}

const addQuantity = (id, quantity) => {
    const newItems = order.items.map((item) => {
        if (item.id === id) {
            return {
                ...item,
                quantity,
            }
        } else {
            return item
        }
    })
    setOrder({
        ...order,
        items: newItems,
    })
}

  
 const addTotal = order.items.reduce((result, item) => {
return result + item.price * item.quantity  

}, 0)

 
const saveOrder = async() =>{
  if(order.items.length > 0 && order.table <= 0){
      toast.warn('Por favor asigna la mesa', {
          className: "rounder-edges",
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: true,
          transition: Slide
          });
 }else if(order.items.length === 0 && order.table >= 1){
      toast.warn('Agrega al menos un producto a la orden 🍔', {
          className: "rounder-edges",
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: true,
          transition: Slide
          });
        }else if(order.items.length > 0 && order.customer.length <= 0){
            toast.warn('Agrega el nombre del cliente 🍔', {
                className: "rounder-edges",
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: true,
                transition: Slide
                });
}else if (order.items.length === 0 && order.table <= 0){
      toast.warn('Asigna la mesa y productos a la orden 🍔🍟', {
          className: "rounder-edges",
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: true,
           transition: Slide
          });
  }
  else{
      createOrder(order)
      setOrder({...initialValues})
      toast.success('Pedido enviado a cocina! ✨', {
          className: "rounder-edges",
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: true,
          transition: Slide
          });
        }
    }


  return (

  <div> 
      <nav className="nav-menu">  
      <Link style={{textDecoration:"none", display:"block"}} from="/" to="/page/done"> 
            <h1 className="ordersDone">ORDERS TO  DELIVER</h1>
            </Link>
            <Link style={{textDecoration:"none", display:"block"}} from="/" to="/page/deliver"> 
            <h1 className="ordersDelivered">DELIVERED</h1>
            </Link>
            <Link style={{textDecoration:"none", display:"block"}} from="/" to="/page/kitchen"> 
            <h1 className="ordersKitchen">KITCHEN</h1>
            </Link>
            <Link style={{textDecoration:"none", display:"block"}} from="/" to="/page/welcome"> 
            <h1 className="ordersLeave">LEAVE</h1>
            </Link>
      </nav>
    <div className="general">

    <div className="prin-target">


    <Button   value ='Burguers'   mostaza   onClick={() => { statecurrent({...state, name: 'Burguers', type: 0})}} />
      <Button  value ='Breakfast'   mostaza onClick={() => { statecurrent({...state, name: 'Breakfast', type: 1})}}/>
      <Button  value ='Drinks'    mostaza onClick={() =>  {statecurrent({...state, name: 'Drinks', type: 2})} }/>

      {dataMenu.filter(item => item.type === state.type).map(product => <ProductCard productItem={product} key={product.id}     addProduct={addProduct} /> )}

           </div>

           <div className="order-div">
            
           <Customer setCustomer={setCustomer}/>
           <Table setTable={setTable} />

            <Titles/>

           {order.items.length === 0 ? ( <div className="center-align"> No hay productos en la order</div> ) : ( order.items.map(elem =>
                <OrderCard
                    item={elem.name}
                    price={elem.price}
                    total={elem.price * elem.quantity}
                    id={elem.id}
                    quantity={elem.quantity}
                    deleteItem={deleteItem}
                    addQuantity={addQuantity}
                />
            ) )}

          <Total  total={ addTotal}    />
          <div className="buttons">
               <button className="cancel"  >Cancel</button>
              <button className="send"  onClick={saveOrder}>Send</button>
          </div>



           </div>


           </div>
           </div>
  );
}

export default Menu;

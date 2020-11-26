import React, { useState } from 'react';
import ProductCard from "../components/productCard/productCard";
import Button from "../components/button"
import dataMenu from "../constants/menu.json";
import OrderCard from "../components/orderCard/orderCard"
import Table from "../components/orderCard/table"
import Titles from "../components/orderCard/titles"
import Total from "../components/orderCard/total"
import Customer from "../components/orderCard/customer"
import Modall from "../components/ventanas/modal"
// import{firebase}  from"../firebase"
// import { db } from '../firebase'
import { toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
 
toast.configure() 
 
 
const Menu = ({item, carrito, addProducto }) => {
   
  const [state,  statecurrent] = useState('Drinks');
  const[extras, setExtras] = useState('Burguers')


  const initialValues = {
    table: '',
    customer:'',
    items: [],
    date: new Date(), 
    status: 'in progress'
  }
  
  const [order, setOrder] = useState(initialValues)
  
  const setTable = (table) => { 
    table = parseInt(table)
    setOrder({ ...order, table })
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
 }else if(order.items.length > 0 && order.customer <= 0){
            toast.warn('Por favor agrega nombre del cliente 🍔', {
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
}else if (order.items.length === 0 && order.table <= 0){
      toast.warn('Asigna la mesa y productos a la orden 🍔🍟', {
          className: "rounder-edges",
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: true,
           transition: Slide
          });
//   }else{
//       await firebase
//       .collection('orders')
//       .add(order)
//       setOrder({...initialValues})
//       toast.success('Pedido enviado a cocina! ✨', {
//           className: "rounder-edges",
//           position: "top-center",
//           autoClose: 4000,
//           hideProgressBar: true,
//           transition: Slide
//           });
        }
    }
  
   
  return (
      
     
    <div className="general"> 
     
    <div className="prin-target">
      
       
    <Button   value ='Burguers'   mostaza   onClick={() => { setExtras('Burguers')}} />
      <Button  value ='Breakfast'   mostaza onClick={() => { statecurrent('Breakfast')}}/>
      <Button  value ='Drinks'    mostaza onClick={() =>  {statecurrent('Drinks')} }/>
       
       
     <>
     {state ==="Drinks"?
     <>
       
        {dataMenu.filter(item => item.type === 2).map(product => <ProductCard productItem={product} key={product.id}     addProduct={addProduct} /> )}
         
        </>:
            <>   

            {dataMenu.filter(item => item.type === 1).map(product => <ProductCard productItem={product} key={product.id}  addProduct={addProduct} /> )}
            </>
 
            
            }
        </> 
        
        <>
     {extras ==="Burguers"?
     <>
       
        {dataMenu.filter(item => item.type === 0).map(product => <ProductCard productItem={product} key={product.id}     addProduct={addProduct} /> )}
         
        </>:
            <>   
  {console.log("hola")}
             
            </>
 
            
            }
        </> 
        
             
        
           </div>

           <div className="order-div">
           <Customer/>
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

          <Total total={addTotal}/>
               <div className="buttons">
               <button className="cancel">Cancel</button>
              <button className="send"  onClick={saveOrder}>Send</button> 
          </div>
           
          
          
           </div>
            
     
           </div>
 
  );
}

export default Menu;

import React, { useState } from 'react';
import ProductCard from "../components/productCard/productCard";
import Button from "../components/button"
import dataMenu from "../constants/menu.json";
import OrderCard from "../components/orderCard/orderCard"
import Table from "../components/orderCard/table"
import Titles from "../components/orderCard/titles"
import Total from "../components/orderCard/total"
import Customer from "../components/orderCard/customer"
import { toast, Slide } from 'react-toastify'
toast.configure() 
 
 
const Menu = () => {
   
  const [state,  statecurrent] = useState('Day');

  const initialValues = {
    table: '',
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
       // order.items.map( item => item.id === product.id )
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
  if(order.items.length >0 && order.table <= 0){
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
  }else if (order.items.length === 0 && order.table <= 0){
      toast.warn('Asigna la mesa y productos a la orden 🍔🍟', {
          className: "rounder-edges",
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: true,
          transition: Slide
          });
  // }else{
  //     await db
  //     .collection('orders')
  //     .add(order)
  //     setOrder({...initialValues})
  //     toast.succe ss('Pedido enviado a cocina! ✨', {
  //         className: "rounder-edges",
  //         position: "top-center",
  //         autoClose: 4000,
  //         hideProgressBar: true,
  //         transition: Slide
  //         });
    }
}
  
   
  return (
      
     
    <div className="general"> 
     
    <div className="prin-target">
      
       
       
      <Button  value ='Breakfast'   mostaza onClick={() => { statecurrent('Breakfast')} 
            }/>
      <Button  value ='Day'    mostaza onClick={() =>  {statecurrent('Day')} }/>

     <>
     {state ==="Day"?
     <>
       
        {dataMenu.filter(item => item.type === 2).map(product => <ProductCard productItem={product} key={product.id}  addProduct={addProduct} /> )}
         
        </>:
            <>   

            {dataMenu.filter(item => item.type === 1).map(product => <ProductCard productItem={product} key={product.id}  addProduct={addProduct} /> )}
            </>
            }
        </> 
          
           </div>

           <div className="order-div">
           <Table setTable={setTable} />
           <Customer/>
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

          <Total addTotal={addTotal}/>
               <div className="buttons">
               <button className="cancel">Cancel</button>
              <button className="send" saveOrder={saveOrder}>Send</button> 
          </div>
           
          
            
           </div>
            
     
           </div>
 
  );
}

export default Menu;

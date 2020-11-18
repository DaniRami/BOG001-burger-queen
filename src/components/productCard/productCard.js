import "../productCard/productCard.css";
import React, { useState } from 'react';
import Modal from "../../components/ventanas/modal"
 
 

const ProductCard =  (props) => {

  
 
 
  const[show, setshow] = useState(false)
  const closeModalHander = () => setshow(false) 
   
 
  // const [resumen, setResumen] = useState([])  
  // setResumen([
  //   ...resumen,
  // ])
  // const addProducto = (item) => {
  //   const precioProducto = parseInt( item.price);
  //   const nombreProducto = item.name;
  //   const idProducto = item.id;
  //   const countProducto = item.quantity; 
  //   resumen.push({idProducto, nombreProducto, precioProducto, countProducto})
     
   
  const addProduct = props.addProduct
   
  return (
  
    <div className="target" onClick={() => addProduct(props.productItem)}>
        <img
          className="img-product"
          src={
            require(`../../assets/images/${props.productItem.photo}`).default
          }
          alt={props.productItem.name}
        />
        <h1 className="product">{props.productItem.name}</h1>
        <h2 className="product">{'$ ' + props.productItem.price}</h2>
     
         <img
          className="mas"      
        
          onClick={() => setshow(true)}  
           
           src={
            require(`../../assets/images/${props.productItem.img}`).default
          }
          alt={"icono de mas"}
      />
         <Modal show={show}  close={closeModalHander}/> 
       
        
    </div>
  );
};

export default ProductCard;

{/* <>
{state ==="Day"?
<>
  
   {dataMenu.filter(item => item.type === 2).map(product => <ProductCard productItem={product} key={product.id} addProducto={addProducto} /> )}
    
   </>:
       <>   

       {dataMenu.filter(item => item.type === 1).map(product => <ProductCard productItem={product} key={product.id} addProducto={addProducto} /> )}
       </>
       }
   </>  */}
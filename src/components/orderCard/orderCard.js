import "../orderCard/order.css"
 
 
 
const orderCard = ({item, price, deleteItem, id, addQuantity, quantity }) =>{
 
    return(
      <div >
        
          <div className="demas">
         <div className="quantity-product"> 
          
          <img
          
          src={
            require("../../assets/images/menos.png").default
          }
          alt={"icono de mas"} 
                    className="menos"
                    onClick={() => {addQuantity(id, quantity -1)}}
                    />
                        
                
                <span className="span">{quantity}</span>
                <img
            
          src={
            require("../../assets/images/signomas.png").default
          }
          alt={"icono de mas"} 
                    className="Mas"
                    onClick={() => {addQuantity(id, quantity +1)}}
                />
              
              </div>     

              <div className="div-product"><h3 className="input-product">{item}</h3> </div>
                  
              <div className="div-value"><h3 className="input-value" >{'$ ' + price}</h3></div> 
          <div className="div-delete"> 
         <img
          className="delete-img"  
          src={
            require("../../assets/images/basura.png").default
          }
          alt={"icono de mas"}   onClick={() => deleteItem(id)}    
      />
         </div>
         </div>
        
      </div>
    );
  };
 
export default orderCard;
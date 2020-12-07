import React from 'react'

const Customer = ({setCustomer}) => {
    return (
        <div className="div-customer">  
        <button className="CUSTOMER">Customer</button>
        <input className="input-customer" onChange={ e => {
                    const customer = e.target.value; 
                    setCustomer(customer)
                    } 
                }
                placeholder="Name"
                type="name" 
                min="1"
                max="8"
             />
       </div>
        
    )
}

export default Customer;
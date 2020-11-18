import React from 'react'

const Total = ({total}) => {
    return (
        
         <div className="Total">
        <button className="total">Total</button>
         <input className="input-total" type="text"  name="number"placeholder="$" value={total}/>
        </div>
        
    )
}

export default Total
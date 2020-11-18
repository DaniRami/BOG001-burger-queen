import React from 'react';




const Extras = ({extras, checkExtra}) => {

    return(
        <div>
            {extras.map((extra, i)=>(
               <form key = {extra.ingrediente}>
                  <span>{extra.ingrediente}</span>
                <input 
                  checked = {extra.checked} 
                  type= 'checkbox'   
                  onChange={()=>{ 
                    checkExtra(i)
                  
                  }}>
                </input>
            </form>
            ))
            }
            
        </div>
    )
}

export default Extras
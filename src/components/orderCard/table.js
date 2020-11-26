import React from 'react' 


const Table = ({setTable}) => {
    return(
    <div className="div-table">
        <button className="table">Table</button>
         <input className="input-mesa" placeholder="#"  onChange={ e => {
                    const table = e.target.value; 
                    setTable(table)
                    } 
                }
                type="number" 
                min="1"
                max="8"/> 
    </div>
    )
}

export default Table;
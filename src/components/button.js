import React from 'react'

const Button = ({ value, mostaza = false,   onClick}) => {
     
    let testId = 'btnmostaza';
    

    if (mostaza === true) {
        testId = 'btnmostaza'
    }

     
    return(
    <button data-testid={testId} className="btn"  onClick={onClick}>{value}</button>
     
    )
}

export default Button;


 export const Buton = ({ value, mas = false,   onClick}) => {
     
    let testId = 'btnmas';
    

    if (mas === true) {
        testId = 'btnmas'
    }

     
    return(
    <button data-testid={testId} className="mas"  onClick={onClick}>{value}</button>
     
    )
}

 
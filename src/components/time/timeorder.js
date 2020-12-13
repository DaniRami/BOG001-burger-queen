import React, {useState, useEffect} from "react"
import moment  from "moment";
import "../time/time.css"

const Time = (props) =>{
    const calculateTime = () =>{
       let startTime = props.time
       let endTime = moment().format('hh-mm-ss')
       
       let hours = moment.utc(moment(`10/10/2020 ${startTime}`,"DD/MM/YYYY HH:mm:ss").diff(moment(`10/10/2020 ${endTime}`,"DD/MM/YYYY HH:mm:ss"))).format("HH:mm:ss")

       console.log(hours)
       return {hours}
    }
    const [secondsOrder,  setSecondsOrder] = useState(calculateTime());     
    useEffect(() =>{
    const start = props.start
    if(start === true){
        const timer = setTimeout(() => {
            setSecondsOrder(calculateTime())
        }, 1000);
        return () => clearTimeout(timer)
    } else if (start === false) {
        return () =>    setSecondsOrder(false)
    }  
    })

    return(
        <div>
            <p className="time">{` ${secondsOrder.hours} `} </p>
        </div>
    )
}

export default Time;
import "../welcome/welcome.css"
import { Link } from 'react-router-dom' 
//import { getOrder } from "../../functions/index";

const Home = () =>{

 
    return(
         
        <div className="targue-welcome">
         <h2 className="welcome">Welcome</h2>
    <Link style={{textDecoration:"none"}} from="/" to="/page/Menu">
    <button className="buton-order" >WAITER</button>
    </Link>
    
    <Link style={{textDecoration:"none"}} from="/" to="/page/Kitchen" > 
    <button className="buton-kitchen">CHEF</button>
    </Link>
       
        </div> 
        
    )
}


export default Home; 
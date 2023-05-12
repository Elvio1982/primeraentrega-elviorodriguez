import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import TotalItems from "../CartContent/TotalItems";

const Navbar = () => {
  const { cart } = useContext(dataContext);
  return (
     <div className='nav-container'>
       <nav className='navbar'>
         <h1 className='navbar-logo'>Pina</h1>
         <Link className='carrito' to={"/cart"}>
            🛒
            {cart.length > 0 ? <TotalItems /> : null}
            
         </Link>
    </nav>
 </div>
    
  );
};

export default Navbar;

import React from "react";
import { Link,useLocation } from "react-router-dom";
import './Header.css'

const Header=()=>{
    
    const location=useLocation()

    return(
        <header>
            <div>My portfolio</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/' className={location.pathname === "/" ? "active" : ""}>About</Link>
                    </li>
                    <li>
                        <Link to='/Projects' className={location.pathname === "/Projects" ? "active" : ""}>Projects</Link>
                    </li>
                    <li>
                        <Link to='/Experience' className={location.pathname === "/Experience" ? "active" : ""}>Experience</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header

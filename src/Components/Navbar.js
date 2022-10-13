import {FaBars, FaTimes} from 'react-icons/fa';
import {useRef} from 'react';
import '../styles/main.css';
import { Link } from 'react-router-dom';


function Navbar(){
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return ( 
        <header>
            <h3>AJ Cheatsheet</h3>
            <nav ref={navRef}>
                {/* <a href="/#">Home</a>
                <a href="/#">ABAP</a> */}

                    <Link to={"/"} >Home</Link>
                    <Link to={"/Abap"} >ABAP</Link>

                
               
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}
export default Navbar;
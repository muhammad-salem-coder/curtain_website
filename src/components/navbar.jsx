import { useState } from "react";

export function Navbar(){
    const [dropDown, setdropDown] = useState(false);

    function toggleDropDown(){
        setdropDown(!dropDown);
    }

    return(
        <div className="navbar">
            <ul>
                <li><a href="#intro">Home</a></li>
                <li className="dropDown">
                    <a href="#our_services" onClick={toggleDropDown}>Our Services</a>
                    {dropDown && (
                        <ul className="nav-dropdown">
                            <li><a href="#curtains" onClick={toggleDropDown}>Curtains</a></li>
                            <li><a href="#wallpapers" onClick={toggleDropDown}>Wallpapers</a></li>
                            <li><a href="#painting" onClick={toggleDropDown}>Painting</a></li>
                        </ul>
                    )}
                </li>
                <li><a href="#about_us">About Us</a></li>
                <li><a href="#contact_us">Contact Us</a></li>
                <li><a href="#clients">Our Clients</a></li>
            </ul>
        </div>
    );
}

export function CallButton(){
    return(
        <a href="tel:0508679752" id="call-link">
        <div className="call-btn">
            <i class="fa-solid fa-phone"></i>
        </div>
        </a>

    );
}



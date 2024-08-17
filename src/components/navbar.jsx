
export function Navbar(){
    return(
        <div className="navbar">
            <ul>
                <li><a href="#intro">Home</a></li>
                <li><a href="#our_services">Our Services</a></li>
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



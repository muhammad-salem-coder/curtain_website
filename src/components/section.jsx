import { SocialIcon } from 'react-social-icons';
import useScript from './addScript'

export function Section({color, heading, id, children}){
    return(
        <section className={color} id={id}>
            <h1>{heading}</h1>
            {children}
        </section>
    );
}

export function Spacer({type}){
    return(
        <div className={type}></div>
    );
}

export function Footer(){
  useScript('./src/scripts/clipboard.js');

    return(
        <div className="footer">
          <div className="footer-row">
            <div className="footer-col">
              <h4>Info</h4>
              <ul className="links">
              <li><a href="#intro">Home</a></li>
                <li><a href="#our_services">Our Services</a></li>
                <li><a href="#about_us">About Us</a></li>
                <li><a href="#contact_us">Contact Us</a></li>
                <li><a href="#clients">Our Clients</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Tel. No.</h4>
              <ul className="links">
              
                <li>Contact</li>
                <li>
                  <a onClick={() => {CopyToClipboard('contact2-2'); return false; }} id="contact2-2">
                    +971 508679752  
                  </a>
                </li>
                <li>
                <p id='click_to_copy'>Click to copy</p>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Socials</h4>
              <ul className="links">
              <li><SocialIcon url="https://www.facebook.com/p/Alamasi-Curtains-and-Decor-100063547153505/" /></li>
              <li><SocialIcon url="https://www.instagram.com/alamasidecor/" /></li>
              <li><SocialIcon url="https://wa.me/0508679752/" /></li>

              </ul>
            </div>
          </div>
        </div>
    );
}



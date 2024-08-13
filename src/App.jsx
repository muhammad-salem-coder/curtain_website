import { Cards } from "./components/cards";
import { Navbar } from "./components/navbar";
import { Section, Footer, Spacer } from "./components/section";

function App() {
  return (
    <>
      <Navbar/>
      <div className="white" id="intro">
        <h1 id="intro-hd">Al Amasi Dream</h1>
        <h1 id="intro-hd">Curtain & Décor</h1>
        <div id="intro-pr">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur temporibus optio, cumque quibusdam tenetur, qui architecto fugiat debitis perspiciatis quisquam obcaecati incidunt sequi iure voluptatibus, omnis consequatur neque. Consequatur, vel!</p>
        </div>
      </div>

      <Spacer type="spacer layer-1"/>
      
      <Section color="grey" heading='Our Services' id="our_services">
        <div class="row-card-sec">
          <Cards image= "./src/assets/images/pic1.jpeg" header="Curtains & Blinds"/>
          <Cards image= "./src/assets/images/pic2.jpeg" header="Curtains & Blinds"/>
          <Cards image= "./src/assets/images/pic3.jpeg" header="Curtains & Blinds"/>
          <Cards image= "./src/assets/images/pic5.jpeg" header="Curtains & Blinds"/>
          <Cards image= "./src/assets/images/pic6.jpeg" header="Curtains & Blinds"/>
          <Cards image= "./src/assets/images/pic7.jpeg" header="Curtains & Blinds"/>
          <Cards image= "./src/assets/images/pic8.jpeg" header="Curtains & Blinds"/>
          <Cards image= "./src/assets/images/pic9.jpeg" header="Curtains & Blinds"/>
          <Cards image= "./src/assets/images/pic10.jpeg" header="Curtains & Blinds"/>

          <Cards image= "./src/assets/images/pic11.jpeg" header="Curtains & Blinds"/>
          <Cards image= "./src/assets/images/pic12.jpeg" header="Curtains & Blinds"/>
          <Cards image= "./src/assets/images/pic13.jpeg" header="Curtains & Blinds"/>
          <Cards image= "./src/assets/images/pic14.jpeg" header="Curtains & Blinds"/>
          <Cards image= "./src/assets/images/pic15.jpeg" header="Curtains & Blinds"/>
          <Cards image= "./src/assets/images/pic16.jpeg" header="Curtains & Blinds"/>
          <Cards image= "./src/assets/images/pic17.jpeg" header="Curtains & Blinds"/>
          <Cards image= "./src/assets/images/pic18.jpeg" header="Curtains & Blinds"/>
          <Cards image= "./src/assets/images/pic20.jpeg " header="Curtains & Blinds"/>
          <Cards image= "./src/assets/images/pic21.jpeg " header="Curtains & Blinds"/>
          <Cards image= "./src/assets/images/pic22.jpeg " header="Curtains & Blinds"/>
          <Cards image= "./src/assets/images/pic23.jpeg " header="Curtains & Blinds"/>
        </div>
      </Section>
      
      <Spacer type="spacer layer-1-lower"/>

      <Section color="white" heading="About Us" id="about_us">
        <p>
          We have wide range of home decor items including Wall Decor, Table Decor, Table Utilities
          ,fixing and repairing of curtains, carpets, flooring, wall paper, blinds, shutters, room 
          decor, glass tints, painting, ceiling, lighting, partition of rooms.
        </p>
      </Section>

      <Spacer type="spacer layer-2"/>

      <Section color="beige" heading="Contact Us" id="contact_us">
      <p><a onClick={() => { CopyToClipboard('contact'); return false; }} id="contact1-1">
            +971 505810791
        </a></p>
      <p><a onClick={() => { CopyToClipboard('contact'); return false; }} id="contact1-2">
            +971 508679752
        </a></p>
        
        <p>Hamad Center<br/>
        2nd Floor - Shop No. 85 Electra Street<br/>
        Near NMC Hospital - Al Danah - Zone 1<br/>
        Abu Dhabi, United Arab Emirates<br/></p>
      </Section>

      <Spacer type="spacer layer-2-lower"/>

      <Section color="plain" heading="Our Clients" id="clients">
        <img src="./src/assets/images/companies.png"></img>
      </Section>

      <Spacer type="spacer layer-3"/>

      <Section color="dark" heading="">
        <Footer/>
      </Section>
    </>
  );
}

// royal m hotel, pearl rotana, , little heaven

export default App;
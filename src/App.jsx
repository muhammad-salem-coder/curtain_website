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
          <Cards image= "src/assets/images/pic02.jpg" header="Curtains & Blinds" description="Select the ideal curtains and drapes. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur temporibus optio, cumque quibusdam tenetur"/>
          <Cards image= "src/assets/images/pic03.jpg" header="Curtains & Blinds" description="Select the ideal curtains and drapes. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur temporibus optio, cumque quibusdam tenetur"/>
          <Cards image= "src/assets/images/pic04.jpg" header="Curtains & Blinds" description="Select the ideal curtains and drapes. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur temporibus optio, cumque quibusdam tenetur"/>
          <Cards image= "src/assets/images/pic05.jpg" header="Curtains & Blinds" description="Select the ideal curtains and drapes. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur temporibus optio, cumque quibusdam tenetur"/>
          <Cards image= "src/assets/images/pic06.jpg" header="Curtains & Blinds" description="Select the ideal curtains and drapes. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur temporibus optio, cumque quibusdam tenetur"/>
          <Cards image= "src/assets/images/pic07.jpg" header="Curtains & Blinds" description="Select the ideal curtains and drapes. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur temporibus optio, cumque quibusdam tenetur"/>
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
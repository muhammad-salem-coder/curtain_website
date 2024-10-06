import { Cards } from "./components/cards";
import { Navbar, CallButton } from "./components/navbar";
import { Section, Footer, Spacer } from "./components/section";
import { useState } from 'react';

function App() {
  const [selectedDiv, setSelectedDiv] = useState('1');

  // Function to handle dropdown change
  const handleChange = (event) => {
    setSelectedDiv(event.target.value);
  };

  // Import images from the public folder using Vite's import.meta.glob

  return (
    <>
      <Navbar />
      <CallButton />

      <div className="white" id="intro">
        <div id="sec1">
          <h1 id="intro-hd">Al Amasi Dream</h1>
          <h1 id="intro-hd">Curtain & Décor</h1>
          <div id="intro-pr">
            <p style={{fontStyle: "italic"}}>"Elevate your space with style - Premier Curtains and Décor for Homes and Businesses in Abu Dhabi. "</p>
            <p style={{}}>Experts in supply, installation, and repair of curtains, carpets, wallpapers, carpets, wooding flooring, gypsum works, sofas, blinds, shutters, and more. From painting to room partitions, we got all your interior needs covered.</p>
          </div>
        </div>
        <div id="sec2">
          <img src="/images/decore1.png" alt="Decor Image"></img>
        </div>
      </div>

      <Spacer type="spacer layer-1" />

      <Section color="grey" heading="Our Services">
        <br/>
        <h2 id="curtains">Curtains & Blinds</h2>
        <div className="row-card-sec">
        <Cards image='/images/curtain/blinds3.png' header="Parquet" />
          <Cards image='/images/curtain/pic1.jpeg' header="Parquet" />
          <Cards image='/images/curtain/pic02.jpg' header="Parquet" />
          <Cards image='/images/curtain/pic4.jpeg' header="Parquet" />
          <Cards image='/images/curtain/pic04.jpg' header="Parquet" />
          <Cards image='/images/curtain/pic5.jpeg' header="Parquet" />
          <Cards image='/images/curtain/pic7.jpeg' header="Parquet" />
          <Cards image='/images/curtain/pic10.jpeg' header="Parquet" />
          <Cards image='/images/curtain/pic11.jpeg' header="Parquet" />
          <Cards image='/images/curtain/pic13.jpeg' header="Parquet" />
          <Cards image='/images/curtain/pic15.jpeg' header="Parquet" />
          <Cards image='/images/curtain/pic17.jpeg' header="Parquet" />
          <Cards image='/images/curtain/pic19.jpeg' header="Parquet" />
          <Cards image='/images/curtain/pic20.png' header="Parquet" />
          <Cards image='/images/curtain/pic21.png' header="Parquet" />
        </div>

        <br /><br /><br />
        <h2 id="wallpapers">Wallpapers</h2>
        <div className="row-card-sec">
          <Cards image='/images/wallpaper/images (1).jpg' header="Wallpapers"/>
          <Cards image='/images/wallpaper/images.jpg' header="Wallpapers"/>
          <Cards image='/images/wallpaper/pic03.jpg' header="Wallpapers"/>
          <Cards image='/images/wallpaper/pic05.jpg' header="Wallpapers"/>
          <Cards image='/images/wallpaper/pic6.png' header="Wallpapers"/>
          <Cards image='/images/wallpaper/wallpaper3.png' header="Wallpapers"/>

        </div>

        <br /><br /><br />
        <h2 id="sofachair">Sofa & Chair Works</h2>
        <div className="row-card-sec">
          <Cards image='/images/sofachairs/pic2.jpeg' header="Sofa & Chair Works"/>
          <Cards image='/images/sofachairs/pic3.jpeg' header="Sofa & Chair Works"/>
          <Cards image='/images/sofachairs/pic6.jpeg' header="Sofa & Chair Works"/>
          <Cards image='/images/sofachairs/pic8.jpeg' header="Sofa & Chair Works"/>
          <Cards image='/images/sofachairs/pic9.jpeg' header="Sofa & Chair Works"/>
          <Cards image='/images/sofachairs/pic12.jpeg' header="Sofa & Chair Works"/>
          <Cards image='/images/sofachairs/pic14.jpeg' header="Sofa & Chair Works"/>
          <Cards image='/images/sofachairs/pic16.jpeg' header="Sofa & Chair Works"/>
          <Cards image='/images/sofachairs/pic18.jpeg' header="Sofa & Chair Works"/>
          <Cards image='/images/sofachairs/pic21.jpeg' header="Sofa & Chair Works"/>
          <Cards image='/images/sofachairs/pic22.jpeg' header="Sofa & Chair Works"/>
          <Cards image='/images/sofachairs/sofa123.png' header="Sofa & Chair Works"/>
        </div>

        <br /><br /><br />
        <h2 id="parquet">UAE National Day</h2>
        <div className="row-card-sec">
          <Cards image='/images/uaenday/uaenday1.png' header="Parquet"/>
          <Cards image='/images/uaenday/uaenday2.png' header="Parquet"/>
          <Cards image='/images/uaenday/uaenday3.png' header="Parquet"/>
        </div>
      </Section>

      <Spacer type="spacer layer-1-lower" />

      <Section color="white" heading="About Us" id="about_us">
        <p>
          We have wide range of home decor items including Wall Decor, Table Decor, Table Utilities
          ,fixing and repairing of curtains, carpets, flooring, wall paper, blinds, shutters, room
          decor, glass tints, painting, ceiling, lighting, partition of rooms.
        </p>
      </Section>

      <Spacer type="spacer layer-2" />

      <Section color="beige" heading="Contact Us" id="contact_us">
        <p><a onClick={() => { CopyToClipboard('contact'); return false; }} id="contact1-2">
          +971 508679752
        </a></p>

        <p>Hamad Center<br />
          2nd Floor - Shop No. 85 Electra Street<br />
          Near NMC Hospital - Al Danah - Zone 1<br />
          Abu Dhabi, United Arab Emirates<br /></p>
      </Section>

      <Spacer type="spacer layer-2-lower" />

      <Section color="plain" heading="Our Clients" id="clients">
        <img src="/images/companies.png" className="companies_sec"></img>
      </Section>

      <Spacer type="spacer layer-3" />

      <Section color="dark" heading="">
        <Footer />
      </Section>
    </>
  );
}

export default App;

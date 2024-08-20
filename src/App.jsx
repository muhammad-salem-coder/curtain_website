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
  const curtain_images = import.meta.glob('/images/curtain/*.{png,jpg,jpeg,svg}', { eager: true });
  const parquet_images = import.meta.glob('/images/parquet/*.{png,jpg,jpeg,svg}', { eager: true });
  const wallpaper_images = import.meta.glob('/images/wallpaper/*.{png,jpg,jpeg,svg}', { eager: true });
  const sofachairs_images = import.meta.glob('/images/sofachairs/*.{png,jpg,jpeg,svg}', { eager: true });

  return (
    <>
      <Navbar />
      <CallButton />

      <div className="white" id="intro">
        <div id="sec1">
          <h1 id="intro-hd">Al Amasi Dream</h1>
          <h1 id="intro-hd">Curtain & Décor</h1>
          <div id="intro-pr">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur temporibus optio, cumque quibusdam tenetur, qui architecto fugiat debitis perspiciatis quisquam obcaecati incidunt sequi iure voluptatibus, omnis consequatur neque. Consequatur, vel!</p>
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
          {
            Object.keys(curtain_images).map((imgPath, i) => (
              <Cards key={i} image={imgPath} header="Curtains & Blinds" />
            ))
          }
        </div>

        <br /><br /><br />
        <h2 id="wallpapers">Wallpapers</h2>
        <div className="row-card-sec">
          {
            Object.keys(wallpaper_images).map((imgPath, i) => (
              <Cards key={i} image={imgPath} header="Wallpapers" />
            ))
          }
        </div>

        <br /><br /><br />
        <h2 id="sofachair">Sofa & Chair Works</h2>
        <div className="row-card-sec">
          {
            Object.keys(sofachairs_images).map((imgPath, i) => (
              <Cards key={i} image={imgPath} header="Sofa & Chair Works" />
            ))
          }
        </div>

        <br /><br /><br />
        <h2 id="parquet">Parquet</h2>
        <div className="row-card-sec">
          {
            Object.keys(parquet_images).map((imgPath, i) => (
              <Cards key={i} image={imgPath} header="Parquet" />
            ))
          }
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

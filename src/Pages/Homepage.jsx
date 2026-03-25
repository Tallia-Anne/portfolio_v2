import React from 'react';
import Hero from '../Components/Hero/Hero';
// IMPORT DE TON IMAGE (Chemin à adapter selon ton dossier)
import bgHome from '../assets/images/Gemini_Generated_Image_hn18o3hn18o3hn18.png'; 
import SectAbout from '../Components/SectAbout/SectAbout';
import SectSoftwares from '../Components/SectSoftwares/SectSoftwares';
import Galley from '../Components/Section/Gallery/Galley';

function Homepage() {
  return (
    <div className="home-page"> 
      <Hero 
        title="Développeuse Web" 
        image={bgHome} 
        
      />
      
      <SectAbout/>
      <SectSoftwares />
      <Galley/>
      <section>
      </section>
    </div>
  );
}

export default Homepage;
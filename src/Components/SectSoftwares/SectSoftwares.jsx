import softwaresCss from '../SectSoftwares/SectSoftwares.module.css'

function SectSoftwares() {
  // On utilise un style commun pour toutes les images
  const iconStyle = { filter: 'grayscale(1) opacity(0.7)', width: '50px' };

  return (
    <div className={softwaresCss.softWare_container}>
      <h3 className={softwaresCss.section_title}>Softwares I've worked on</h3>
      
      <div className={softwaresCss.icons_wrapper}>
        
        {/* CANVA */}
        <div className={softwaresCss.icon_item}>
          <img src="https://img.icons8.com/ios-filled/100/canva.png" style={iconStyle} alt="Canva" />
          <div className={softwaresCss.text_wrapper}>
            <span className={softwaresCss.brand}>Canva</span>
          </div>
        </div>

        {/* PHOTOSHOP */}
        <div className={softwaresCss.icon_item}>
          <img src="https://img.icons8.com/ios-filled/100/adobe-photoshop.png" style={iconStyle} alt="Photoshop" />
          <div className={softwaresCss.text_wrapper}>
            <span className={softwaresCss.brand}>Adobe</span>
            <span className={softwaresCss.software}>Photoshop</span>
          </div>
        </div>

        {/* WORDPRESS */}
        <div className={softwaresCss.icon_item}>
          <img src="https://img.icons8.com/ios-filled/100/wordpress.png" style={iconStyle} alt="WordPress" />
          <div className={softwaresCss.text_wrapper}>
            <span className={softwaresCss.brand}>WordPress</span>
          </div>
        </div>

        {/* FIGMA */}
        <div className={softwaresCss.icon_item}>
          <img src="https://img.icons8.com/ios-filled/100/figma.png" style={iconStyle} alt="Figma" />
          <div className={softwaresCss.text_wrapper}>
            <span className={softwaresCss.brand}>Figma</span>
          </div>
        </div>

        {/* REACT */}
        <div className={softwaresCss.icon_item}>
          <img src="https://img.icons8.com/ios-filled/100/react-native.png" style={iconStyle} alt="React" />
          <div className={softwaresCss.text_wrapper}>
            <span className={softwaresCss.brand}>React</span>
            <span className={softwaresCss.software}>JS Library</span>
          </div>
        </div>

        {/* JS */}
        <div className={softwaresCss.icon_item}>
          <img src="https://img.icons8.com/ios-filled/100/javascript.png" style={iconStyle} alt="JS" />
          <div className={softwaresCss.text_wrapper}>
            <span className={softwaresCss.brand}>JavaScript</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SectSoftwares;
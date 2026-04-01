import softwaresCss from "../SectSoftwares/SectSoftwares.module.css";

function SectSoftwares() {
  const iconStyle = { filter: "grayscale(1) opacity(0.7)", width: "50px" };

  const skills = [
    { name: "Canva", brand: "Canva", icon: "canva" },
    {
      name: "Photoshop",
      brand: "Adobe",
      software: "Photoshop",
      icon: "adobe-photoshop",
    },
    { name: "WordPress", brand: "WordPress", icon: "wordpress" },
    {
      name: "Elementor",
      brand: "Elementor",
      software: "Web Builder",
      icon: "elementor",
    },
    { name: "Figma", brand: "Figma", icon: "figma" },
    {
      name: "React",
      brand: "React",
      software: "JS Library",
      icon: "react-native",
    },
    { name: "JavaScript", brand: "JavaScript", icon: "javascript" },
    {
      name: "Bootstrap",
      brand: "Bootstrap",
      software: "CSS Framework",
      icon: "bootstrap",
    },
    {
      name: "GitHub",
      brand: "GitHub",
      software: "Version Control",
      icon: "github",
    },
    { name: "Vercel", brand: "Vercel", software: "Deployment", icon: "vercel" },
    {
      name: "Postman",
      brand: "Postman",
      software: "API Testing",
      icon: "postman--v1",
    },
  ];

  return (
    <div className={softwaresCss.softWare_container}>
      <h3 className={softwaresCss.section_title}>Softwares I've worked on</h3>

      <div className={softwaresCss.icons_wrapper}>
        {skills.map((skill, index) => (
          <div key={index} className={softwaresCss.icon_item}>
            <img
              src={`https://img.icons8.com/ios-filled/100/${skill.icon}.png`}
              style={iconStyle}
              alt={skill.name}
            />
            <div className={softwaresCss.text_wrapper}>
              <span className={softwaresCss.brand}>{skill.brand}</span>
              {skill.software && (
                <span className={softwaresCss.software}>{skill.software}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectSoftwares;

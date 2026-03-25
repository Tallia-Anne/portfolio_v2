
import heroCss from './Hero.module.css'
function Hero({title, image}) {
    const dynamicStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${image})`,
  };

  return (
    <div className={heroCss.hero_wrap} style={dynamicStyle} >
      <h1 className={heroCss.hero_title}>{title}</h1>
    </div>
  )
}

export default Hero
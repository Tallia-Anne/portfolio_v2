
import footerCSS from './Footer.module.css'



function Footer () {

return (
    <div className={footerCSS.footer_wrapper}>

        <div className={footerCSS.container}>

           


            <div className={footerCSS.Footer_social}>

             <a><i className="ri-facebook-circle-fill"></i></a>
          <a href="https://www.instagram.com/uniscite95/"><i className="ri-instagram-fill"></i></a>
          <a href=""><i className="ri-twitter-x-line"></i></a>

            </div>

            

        </div>


    <div className={footerCSS.Footer_copyright}>

    <p>Copyright &copy; 2024 Tallia-Anne Wambiekele  All Rights Reserved.</p>

    </div>

       

    </div>
    

)

}

export default Footer;
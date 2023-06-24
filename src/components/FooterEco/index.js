import style from "./style.css";
import logo from "../../assets/logo_eco.png"

function Footer() {
    return(
        <div className="footerEco">
       <p className="p-footer-eco">info@eco-cabins.com</p>
       <img src={logo}/>
       <div className="div-p-footer-eco">
        <p className="p-footer-eco">Cookies</p>
        <p className="p-footer-eco">Privacybeleid</p>
       </div>
        </div>
    );
}

export default Footer;
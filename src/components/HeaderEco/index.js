import style from "./style.css";
import logo from "../../assets/logo_eco.png";

function HeaderEco() {
  return (
    <div className="header-eco">
      <img src={logo} />
      <div className="div-enlaces-eco">
        <a className="eco-enlace" href="#">
          Modellen
        </a>
        <a className="eco-enlace" href="#">
          Kopen
        </a>
        <a className="eco-enlace" href="#">
          Huren
        </a>
        <a className="eco-enlace" href="#">
          Nieuws
        </a>
        <a className="eco-enlace" href="#">
          Contact
        </a>
      </div>
    </div>
  );
}

export default HeaderEco;

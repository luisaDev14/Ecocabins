import style from "./style.css";
import Duur from "../../assets/duur_img.png";

function SectionEcoDuur() {
  return (
    <div className="div-duur">
      <div className="div-duur-eco">
        <h1 className="h1-duur">Duurzame materialen</h1>
        <p className="p-duur">
          Alle EcoCabins hebben een hoge isolatiewaarde, worden geproduceerd met
          indien mogelijk duurzame en/of natuurlijke materialen en hebben als
          opvallende uiterlijke kenmerk de ‘ronde hoeken’, mogelijk gemaakt door
          het specifieke materiaalgebruik. De voordelen van bouwen met hout zijn
          legio: hout is licht, flexibel, isoleert goed en bouwt snel en
          efficiënt.
        </p>
        <button className="button-durr">Lees meer</button>
      </div>
      <img src={Duur}/>
    </div>
  );
}

export default SectionEcoDuur;

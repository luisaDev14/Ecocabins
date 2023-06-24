import style from "./style.css";
import Hout from "../../assets/img_casa.png";

function SectionHout() {
  return (
    <div className="div-hout">
      <div className="div-hout-img">
        <img src={Hout} />
        <div className="div-hout-1">
          <div>
            <h1 className="h1-hout">Hout</h1>
            <p className="p-hout">
              De draagconstructies van EcoCabins bestaan uit hout. Hout is
              duurzaam en.
            </p>
            <h1 className="h1-hout">Afwerking</h1>
            <p className="p-hout">
              De draagconstructies van EcoCabins bestaan uit hout. Hout is
              duurzaam en.
            </p>
            <h1 className="h1-hout">Stalen onderstel</h1>
            <p className="p-hout">
              Het stalen onderstel is sterk zijn en heeft de benodigde stijfheid
              die
            </p>
          </div>

          <div>
            <h1 className="h1-hout">Glaswol isolatie</h1>
            <p className="p-hout">
              De combinatie van glaswol met een houtskelet constructie geeft
              een.
            </p>
            <h1 className="h1-hout">Triple glas</h1>
            <p className="p-hout">
              De combinatie van glaswol met een houtskelet constructie geeft
              een.
            </p>
            <h1 className="h1-hout">Infrarood vloer</h1>
            <p className="p-hout">
              De vloer wordt opgewarmd middels opgewekte warmte uit eigen
              zonne-energie.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionHout;

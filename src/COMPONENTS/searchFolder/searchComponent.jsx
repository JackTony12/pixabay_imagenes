import { useState } from "react";
import Imagenes from "../displayFolder/imagedisplay";
import Footer from "../footerFolder/footer";
import "./styles.css";
import { toast, Toaster } from "sonner";
const Search = () => {
  const [userQuery, setUserQuery] = useState("");
  const [userValue, setUserValue] = useState("");
  const [radioState, setRadioState] = useState("");
  const [imgResolution, setImgResolution] = useState("low");
  const handleUserRequest = (e) => {
    e.preventDefault();
    setUserQuery(userValue);
  };

  const handleResolution = (event) => {
    setRadioState(event);
    setImgResolution(event);
    if (event === "high") {
      toast.error("La resolucion alta podria ralentizar la carga ");
    }
  };

  const [nextPage, setNextPage] = useState(1);
  const nextPageFunction = (datosHijo) => {
    if (datosHijo === "+") {
      setNextPage((prev) => prev + 1);
    } else if (nextPage > 1) {
      setNextPage((prev) => prev - 1);
    }
  };

  return (
    <>
      <div className="titulo">
        <h1>PIXABAY FREE IMAGES</h1>
      </div>
      <div className="calidad-imagenes-texto">
        <p>Seleccione la calidad de las imagenes</p>
      </div>
      <div className="form-contenedor">
        <div className="img-resoluciones">
          <div onClick={() => handleResolution("low")} className="low">
            Low HD
            <input
              value="low"
              type="radio"
              name="grupo"
              checked={radioState === "low" ? "cheked" : ""}
            />
          </div>
          <div onClick={() => handleResolution("medium")} className="medium">
            Medium FHD
            <input
              value="medium"
              type="radio"
              name="grupo"
              checked={radioState === "medium" ? "cheked" : ""}
            />
          </div>
          <div onClick={() => handleResolution("high")} className="high">
            High UHD
            <input
              value="high"
              type="radio"
              name="grupo"
              checked={radioState === "high" ? "cheked" : ""}
            />
          </div>
        </div>
      </div>
      <hr />
      <form className="formulario" onSubmit={handleUserRequest}>
        <input
          type="text"
          onInput={(e) => setUserValue(e.target.value)}
          value={userValue}
        />
        <button>Buscar</button>
      </form>
      <Toaster />
      <Imagenes
        nextPageFunction={nextPageFunction}
        nextPage={nextPage}
        userQuery={userQuery}
        imgResolution={imgResolution}
      />
      <Footer nextPageFunction={nextPageFunction} />
    </>
  );
};
export default Search;

import axios from "axios";
import "./styles.css";
import {
  AiOutlineHeart,
  AiOutlineDownload,
} from "react-icons/ai";
import { useState, useEffect } from "react";
import noUser from "./noUser.png";
const Imagenes = ({ userQuery, imgResolution, nextPage, nextPageFunction }) => {
  const key = import.meta.env.VITE_PIXABAY_KEY;
  const url = `https://pixabay.com/api/?key=${key}&q=green+${userQuery}&image_type=photo&pretty=true&page=${nextPage}`;
  const [music, setMusic] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setMusic(response.data.hits);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Whithout errors");
      });
  }, [userQuery, nextPage]);
  return (
    <div>
      <div>
      <div className="next-page-buttons">
         <button onClick={()=>{nextPageFunction('-')}}>
          Back
         </button>
          <button  onClick={()=>{nextPageFunction('+')}}>
            Next
         </button>
        </div>
      </div>
      <div className="main">
        {music.length ? (
          music.map((item) => {
            return (
              <div className="tarjetas-contenedor" key={item.id}>
                <div className="userOwnerProfile">
                  {item.userImageURL ? (
                    <img
                      className="userImage"
                      src={item.userImageURL}
                      alt="UserImage"
                    />
                  ) : (
                    <img className="userImage" src={noUser} alt="UserImage" />
                  )}
                  <div className="user-name">
                    <h4>{item.user}</h4>
                  </div>
                </div>
                <p className="image-title">{item.tags}</p>

                <div>
                  <img
                    className="imagen-principal"
                    src={
                      imgResolution === "high"
                        ? item.largeImageURL
                        : imgResolution === "medium"
                        ? item.webformatURL
                        : item.previewURL
                    }
                    alt={item.tags}
                  />
                </div>
                <div className="image-info-contenedor">
                  <div className="icon-contenedor">
                    <div>
                      likes
                    </div>
                    <span>{item.likes}</span>
                  </div>
                  <div className="icon-contenedor">
                    <div>
                      Downloads
                    </div>
                    <span>{item.downloads}</span>
                  </div>
                  <div className="icon-contenedor">
                    <div>
                      Views:
                    </div>
                    <span>{item.views}</span>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h1>Sin resultados</h1>
        )}
      </div>
    </div>
  );
};

export default Imagenes;

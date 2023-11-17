import "../style.css";
import "leaflet/dist/leaflet.css";
import React from "react";
// import toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes, { shape } from "prop-types";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import popUimagearray from "../data/popupImagesArray.json";
import { useRemainingTries } from "../contexts/RemainingTriesContext";
import parisLocationHints from "../data/parisLocationHints.json";
// importing some pictures
import iconheartcatpaw from "../assets/pattecoeur.png";
import eastereggArctic from "../assets/antarctique.jpg";
import eastereggScandinavia from "../assets/lenaleeblackmetal.jpg";
import iconbearpaw from "../assets/bearpaw.png";
import iconezero from "../assets/iconezero.png";
// importing sounds
import anatshortmeow from "../assets/sounds/anataudio.mp3";
import anatlongmeow from "../assets/sounds/anataudio2.mp3";

function Markers({ arrParis, pictureAnatorParis, setPictureAnatorParis }) {
  const { remainingTries, setRemainingTries } = useRemainingTries();
  // fonction pour remettre à zero quand on gagne ou perds le jeu
  const resetTheGame = () => {
    if (remainingTries === 0) {
      toast.info(
        "Vous venez de perdre votre partie de GeoCat ! Anat a eu le temps de se promener dans tout un arrondissement de Paris en se payant des couettes de luxe et du saumon, tout ça avec votre carte bleue en plus ! GeoCat se relancera tout seul très rapidement, pas d'inquiétude",
        {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
      setTimeout(() => {}, 15000);
      setRemainingTries(3);
      const newDistrictIndex = Math.floor(
        Math.random() * parisLocationHints.length + 1
      );
      setPictureAnatorParis(parisLocationHints[newDistrictIndex]);
    }
  };
  const playLose = () => {
    new Audio(anatshortmeow).play();
  };
  const playVictory = () => {
    new Audio(anatlongmeow).play();
  };
  const iswinorlose = (d) => {
    if (remainingTries > 0 && d.l_ar === pictureAnatorParis.district) {
      playVictory();
      toast.info(
        "Bravo vous avez trouvé Anat ! Cependant il est presque 16h, il est donc temps de rentrer à la maison et de la nourrir !",
        {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
    }
    if (remainingTries > 0 && d.l_ar !== pictureAnatorParis.district) {
      setRemainingTries(remainingTries - 1);
      playLose();
    }
    if (remainingTries === 0) {
      resetTheGame();
    }
  };
  // création de marqueurs stylisés
  const customIcon = new Icon({
    iconUrl: iconheartcatpaw,
    iconSize: [38, 38],
  });
  const customBearIcon = new Icon({
    iconUrl: iconbearpaw,
    iconSize: [38, 38],
  });
  const customZero = new Icon({
    iconUrl: iconezero,
    iconSize: [38, 38],
  });
  return (
    arrParis && (
      <MapContainer center={[48.8566, 2.3522]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* remise à zero du jeu */}
        <Marker
          position={[48.873496506, 2.27583223]}
          icon={customZero}
          eventHandlers={{
            click: () => {
              setRemainingTries(3);
              const newDistrictIndex = Math.floor(
                Math.random() * parisLocationHints.length + 1
              );
              setPictureAnatorParis(parisLocationHints[newDistrictIndex]);
            },
          }}
        >
          <Popup>Je suis là pour remettre le jeu à zéro</Popup>
        </Marker>
        {/* easteregg n°1 */}
        <Marker position={[-63.3192, -57.8925]} icon={customBearIcon}>
          <Popup>
            <img src={eastereggArctic} height="400px" alt="easteregg1" />
            Alors comme ça on chasse aussi les ours polaires sur la banquise ?
          </Popup>
        </Marker>
        {/* easteregg n°2 */}
        <Marker
          position={[62.2786, 12.3402]}
          icon={customBearIcon}
          eventHandlers={{
            click: () => {
              setRemainingTries(remainingTries + 2);
            },
          }}
        >
          <Popup>
            <img src={eastereggScandinavia} height="400px" alt="easteregg2" />
            Posant comme une star de Black Metal, Lenalee vous offre un nouvel
            essai
          </Popup>
        </Marker>
        <div>
          {arrParis &&
            arrParis.results.map((d, index) => (
              <Marker
                key={d.geom_x_y.lat}
                position={[d.geom_x_y.lat, d.geom_x_y.lon]}
                icon={customIcon}
                eventHandlers={{
                  click: () => {
                    iswinorlose(d);
                  },
                }}
              >
                {d.l_ar === pictureAnatorParis.district ? (
                  <Popup>
                    <img
                      src={popUimagearray.at(index).imageAnat}
                      alt="imageAnat"
                      width="220px"
                      height="300px"
                    />
                  </Popup>
                ) : (
                  <Popup>
                    <img
                      src={popUimagearray.at(index).imageArr}
                      alt="imageArr"
                      width="200px"
                      height="200px"
                    />
                  </Popup>
                )}
              </Marker>
            ))}
        </div>
      </MapContainer>
    )
  );
}
Markers.propTypes = {
  arrParis: PropTypes.shape({
    results: PropTypes.arrayOf(shape),
  }),
  pictureAnatorParis: PropTypes.shape({
    district: PropTypes.string,
  }).isRequired,
  setPictureAnatorParis: PropTypes.func.isRequired,
};
Markers.defaultProps = {
  arrParis: {
    results: null,
  },
};
export default Markers;

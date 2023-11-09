import "../style.css";
import React from "react";
import PropTypes, { shape } from "prop-types";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
// import data from "./src/data/....json";
import popUimagearray from "../data/popupImagesArray.json";

function Markers({ arrParis, pictureAnatorParis }) {
  // création de marqueurs stylisés
  const customIcon = new Icon({
    iconUrl: "./src/assets/pattecoeur.png",
    iconSize: [38, 38],
  });
  return (
    arrParis && (
      // création du MapContainer et du TileLayer, indispensable au bon affichage de la carte
      <MapContainer center={[48.8566, 2.3522]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* marqueur codé en dur pour le test, a effacer ensuite */}
        <Marker position={[48.88, 2.306776990574406]} icon={customIcon}>
          <Popup>test</Popup>
        </Marker>
        <div>
          {arrParis &&
            arrParis.results.map((d, index) => (
              <Marker
                key={d.geom_x_y.lat}
                position={[d.geom_x_y.lat, d.geom_x_y.lon]}
                icon={customIcon}
              >
                {d.l_ar === pictureAnatorParis.district ? (
                  <Popup>
                    <img
                      src={popUimagearray.at(index).imageAnat}
                      alt="imageAnat"
                      width="200px"
                      height="200px"
                    />
                  </Popup>
                ) : (
                  <Popup>
                    <img
                      src={popUimagearray.at(index).imageArr}
                      alt="imageAnat"
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
};

Markers.defaultProps = {
  arrParis: {
    results: null,
  },
};

export default Markers;

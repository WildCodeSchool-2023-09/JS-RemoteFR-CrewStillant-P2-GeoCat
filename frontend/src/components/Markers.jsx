import "../style.css";
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

function Markers() {
  // créaton de marqueurs stylisés
  const customIcon = new Icon({
    iconUrl: "./src/assets/pattecoeur.png",
    iconSize: [38, 38],
  });
  // création d'un tableau pour y stocker les images des popups de la carte
  const popUp = [
    {
      id: 1,
      imageArr: "./src/assets/paris-3eme.jpg",
      imageAnat: "./src/assets/AnatbebeGeocat.jpg",
    },
    {
      id: 2,
      imageArr: "./src/assets/paris-3eme.jpg",
      imageAnat: "./src/assets/AnatbebeGeocat.jpg",
    },
    {
      id: 3,
      imageArr: "./src/assets/paris-3eme.jpg",
      imageAnat: "./src/assets/AnatbebeGeocat.jpg",
    },
    {
      id: 4,
      imageArr: "./src/assets/paris-3eme.jpg",
      imageAnat: "./src/assets/AnatbebeGeocat.jpg",
    },
    {
      id: 5,
      imageArr: "./src/assets/paris-3eme.jpg",
      imageAnat: "./src/assets/AnatbebeGeocat.jpg",
    },
    {
      id: 6,
      imageArr: "./src/assets/paris-3eme.jpg",
      imageAnat: "./src/assets/AnatbebeGeocat.jpg",
    },
    {
      id: 7,
      imageArr: "./src/assets/paris-3eme.jpg",
      imageAnat: "./src/assets/AnatbebeGeocat.jpg",
    },
    {
      id: 8,
      imageArr: "./src/assets/paris-3eme.jpg",
      imageAnat: "./src/assets/AnatbebeGeocat.jpg",
    },
    {
      id: 9,
      imageArr: "./src/assets/paris-3eme.jpg",
      imageAnat: "./src/assets/AnatbebeGeocat.jpg",
    },
    {
      id: 10,
      imageArr: "./src/assets/paris-3eme.jpg",
      imageAnat: "./src/assets/AnatbebeGeocat.jpg",
    },
    {
      id: 11,
      imageArr: "./src/assets/paris-3eme.jpg",
      imageAnat: "./src/assets/AnatbebeGeocat.jpg",
    },
    {
      id: 12,
      imageArr: "./src/assets/paris-3eme.jpg",
      imageAnat: "./src/assets/AnatbebeGeocat.jpg",
    },
    {
      id: 13,
      imageArr: "./src/assets/paris-3eme.jpg",
      imageAnat: "./src/assets/AnatbebeGeocat.jpg",
    },
    {
      id: 14,
      imageArr: "./src/assets/paris-3eme.jpg",
      imageAnat: "./src/assets/AnatbebeGeocat.jpg",
    },
    {
      id: 15,
      imageArr: "./src/assets/paris-3eme.jpg",
      imageAnat: "./src/assets/AnatbebeGeocat.jpg",
    },
    {
      id: 16,
      imageArr: "./src/assets/paris-3eme.jpg",
      imageAnat: "./src/assets/AnatbebeGeocat.jpg",
    },
    {
      id: 17,
      imageArr: "./src/assets/paris-3eme.jpg",
      imageAnat: "./src/assets/AnatbebeGeocat.jpg",
    },
    {
      id: 18,
      imageArr: "./src/assets/paris-3eme.jpg",
      imageAnat: "./src/assets/AnatbebeGeocat.jpg",
    },
    {
      id: 19,
      imageArr: "./src/assets/paris-3eme.jpg",
      imageAnat: "./src/assets/AnatbebeGeocat.jpg",
    },
    {
      id: 20,
      imageArr: "./src/assets/paris-3eme.jpg",
      imageAnat: "./src/assets/AnatbebeGeocat.jpg",
    },
  ];

  // création de la state pour stocker une api
  const [arrParis, setArrParis] = useState(null);

  useEffect(() => {
    fetch(
      "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/arrondissements/records?limit=20"
    )
      .then((res) => res.json())
      .then((data) => setArrParis(data));
  }, []);

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
                <Popup>
                  <img
                    src={popUp.at(index).imageAnat}
                    alt="imageAnat"
                    width="200px"
                    height="200px"
                  />
                </Popup>
              </Marker>
              //   <span key={d.c_ar}>
              //     <p>
              //       {index}------
              //       {/* <img src="{popUp[index].imageAnat}" alt="imageAnat" /> */}
              //       <img src={popUp[index].imageArr} alt="imageArr" />
              //       {d.geom_x_y.lat},{d.geom_x_y.lon}
              //     </p>
              //     {d.geom_x_y.lat} {d.geom_x_y.lon}
              //   </span>
            ))}
        </div>
      </MapContainer>
    )
  );
}

export default Markers;

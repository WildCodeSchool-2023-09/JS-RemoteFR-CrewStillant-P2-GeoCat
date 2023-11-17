import "./footerHome.css";
import React from "react";
import { ShakeLittle } from "reshake";
import boiteconservepleine from "../../assets/boiteconservepleine.png";
import boiteconservevide from "../../assets/boiteconservevide.png";
import { useRemainingTries } from "../../contexts/RemainingTriesContext";

function FooterHome() {
  const { remainingTries } = useRemainingTries();

  return (
    <div className="footerHome">
      <div className="hintslefttext">
        <p>Il vous reste actuellement {remainingTries} indices </p>
      </div>
      <div className="hintsleftpicture">
        <ShakeLittle>
          <img
            src={remainingTries >= 1 ? boiteconservepleine : boiteconservevide}
            alt=""
          />
        </ShakeLittle>
        <ShakeLittle>
          <img
            src={remainingTries >= 2 ? boiteconservepleine : boiteconservevide}
            alt=""
          />
        </ShakeLittle>
        <ShakeLittle>
          <img
            src={remainingTries >= 3 ? boiteconservepleine : boiteconservevide}
            alt=""
          />
        </ShakeLittle>
      </div>
    </div>
  );
}

export default FooterHome;

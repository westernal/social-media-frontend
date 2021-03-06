import share1 from "../../public/Images/Frame 85.svg";
import share2 from "../../public/Images/Frame 85 (1).svg";
import share3 from "../../public/Images/Frame 86.svg";

import { useEffect } from "react";
import Image from "next/image";

const PWAModal = () => {
  useEffect(() => {
    var modal = document.getElementById("myModal");

    var span = document.getElementsByClassName("close1")[0];

    if (modal != null) {
      span.addEventListener("click", function () {
        modal.style.display = "none";
      });

      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    }
  }, []);
  return (
    <div id="myModal" className="modal">
      <div className="modal-content flex">
        <div className="modal-main auth-form">
          <div className="flex">
            {" "}
            <Image
              src={"/Images/logo.png"}
              alt="logo"
              width={80}
              height={80}
            />{" "}
          </div>
          <div className="flex">
            <h3>Download the Westernal app and enjoy!</h3>
          </div>
          <div className="share-info">
            <div className="flex">
              <Image width={35} height={35} src={share1.src} alt="share" />
              <p>Click on share button.</p>
            </div>
            <div className="flex">
              <Image width={45} height={45} src={share2.src} alt="HomeScreen" />
              <p>Choose Add To Homescreen.</p>
            </div>
            <div className="flex">
              <Image width={35} height={35} src={share3.src} alt="Add" />
              <p>Click Add.</p>
            </div>
          </div>
          <div className="flex">
            <button className="btn close1">Got it</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PWAModal;

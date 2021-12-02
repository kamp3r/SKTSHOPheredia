import React from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import img from "./images/bannervans.jpg";
import img2 from "./images/bannertony.jpg";
import img3 from "./images/MERCADO.jpg";
import "@coreui/coreui/dist/css/coreui.min.css";

const Carrousel = () => {
  return (
    <CCarousel controls dark>
      <CCarouselItem>
        <CImage className="d-block w-100" src={img} alt="slide 1" />
      </CCarouselItem>

      <CCarouselItem>
        <CImage className="d-block w-100" src={img2} alt="slide 2" />
      </CCarouselItem>

      <CCarouselItem>
        <CImage className="d-block w-100" src={img3} alt="slide 3" />
      </CCarouselItem>
    </CCarousel>
  );
};

export default Carrousel;

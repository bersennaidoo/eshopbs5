import React from "react";

import {
  CCallout,
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CImage,
} from "@coreui/react";

interface IHeroCarouselProps {}

const HeroCarousel = (props: IHeroCarouselProps) => {
  return (
    <CCarousel controls>
      <CCarouselItem>
        <CImage
          className="d-block w-100"
          src="/images/800x600.png"
          alt="slide 1"
        />
      </CCarouselItem>
      <CCarouselItem>
        <CImage
          className="d-block w-100"
          src="/images/800x600.png"
          alt="slide 2"
        />
      </CCarouselItem>
      <CCarouselItem>
        <CImage
          className="d-block w-100"
          src="/images/800x600.png"
          alt="slide 3"
        />
      </CCarouselItem>
    </CCarousel>
  );
};

export default HeroCarousel;

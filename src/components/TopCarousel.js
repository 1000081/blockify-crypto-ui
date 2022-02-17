import React from "react";
import {
  CDBCarousel,
  CDBCarouselItem,
  CDBCarouselInner,
  CDBView,
  CDBContainer,
} from "cdbreact";

export const TopCarousel = () => {
  return (
    <CDBContainer>
      <CDBContainer>
        <CDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
          slide
        >
          <CDBCarouselInner>
            <CDBCarouselItem itemId="1">
              <CDBView>
                <img
                  className="d-block w-100"
                  src="https://i.imgur.com/EgVSItY.jpeg"
                  alt="First slide"
                />
              </CDBView>
            </CDBCarouselItem>
            <CDBCarouselItem itemId="2">
              <CDBView>
                <img
                  className="d-block w-100"
                  src="https://i.imgur.com/EgVSItY.jpeg"
                  alt="Second slide"
                />
              </CDBView>
            </CDBCarouselItem>
            <CDBCarouselItem itemId="3">
              <CDBView>
                <img
                  className="d-block w-100"
                  src="https://i.imgur.com/EgVSItY.jpeg"
                  alt="Third slide"
                />
              </CDBView>
            </CDBCarouselItem>
          </CDBCarouselInner>
        </CDBCarousel>
      </CDBContainer>
    </CDBContainer>
  );
};

export default TopCarousel;

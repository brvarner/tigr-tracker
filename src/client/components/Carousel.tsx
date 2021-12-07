import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel'



const ProdCarousel: React.FC<ProdCarouselProps> = props => {

  return (
    <Carousel className="mw-300px">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="media/carousel/Galaxy-Carousel.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="text-dark">Follow Items</h3>
          <p className="text-dark">Ensure you're getting the best deal possible.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="media/carousel/Macbook-Carousel.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="text-dark">Share Your Deals</h3>
          <p className="text-dark">Let everyone know you got the best deal around.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="media/carousel/HaircareCarousel.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="text-dark">Go Beyond Tech</h3>
          <p className="text-dark">Track as many items as you want with a premium account, in categories including haircare, activewear, homegoods, and more.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

interface ProdCarouselProps {
}

export default ProdCarousel;
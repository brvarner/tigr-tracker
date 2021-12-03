import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel'



const ProdCarousel: React.FC<ProdCarouselProps> = props => {

    return (
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="media/carousel/airpods.jpg"
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
      src="media/carousel/laptop.jpg"
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
      src="media/carousel/turkey.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className="text-dark">Track Your Prey</h3>
      <p className="text-dark">Keep tabs on as many items as you'd like with a premium account.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

interface ProdCarouselProps {
}

export default ProdCarousel;
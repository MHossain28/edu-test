import Carousel from 'react-bootstrap/Carousel';
import './Carousal.css';

function UncontrolledExample() {
  return (
    <Carousel className='carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYfWI0Eh0Mm6P2algSAfrfappnY445Xigad1yez2edZHrmmA7QXjT7m0RNSMiilREkkLg&usqp=CAU`}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`https://ahaslides.com/wp-content/uploads/2020/05/SEO1044-02.jpg`}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxfiJTiRLoHOQf0tF2D-VDHM_M7BIkhHKc-w&usqp=CAU`}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
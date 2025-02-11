import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./homepage.css";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

function Homepage() {
  const [timeLeft, setTimeLeft] = useState<number>(24 * 60 * 60);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const buttonHandle = () => {
    navigate("./shop");
  };

  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 1,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 1,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      <div className="carousel-item carousel-item1">
        <div className="text">
          <h2>Winter Sale - Up to 50% Off!</h2>
          <button onClick={buttonHandle}>Shop Now</button>
        </div>
        <div className="carousel-item--backdrop"></div>
      </div>
      <div className="carousel-item carousel-item2">
        <div className="text">
          <h2>Flash Sale - 24 Hours Only!</h2>
          <p>{`Time Left: ${Math.floor(timeLeft / 3600)}:${Math.floor(
            (timeLeft % 3600) / 60
          )}:${timeLeft % 60}`}</p>
          <button onClick={buttonHandle}>Grab the Deals</button>
        </div>

        <div className="carousel-item--backdrop"></div>
      </div>
      <div className="carousel-item carousel-item3">
        <div className="text">
          <h2>Check Out Our New Arrivals</h2>
          <button onClick={buttonHandle}>Explore Now</button>
        </div>
        <div className="carousel-item--backdrop"></div>
      </div>
    </Carousel>
  );
}

export default Homepage;

import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "./Category.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faCircleExclamation,
  faTags,
} from "@fortawesome/free-solid-svg-icons";
import categoryOnes from "../category_data1";
// import Slider from "react-slick";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CategoryOne = () => {
  const [currentDate, setCurrentDate] = useState("");

  // function SampleNextArrow(props) {

  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{
  //         ...style,
  //         display: "block",
  //         background: "green",
  //         fontSize: "50px"
  //       }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  // function SamplePrevArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{
  //         ...style,
  //         display: "block",
  //         background: "red",
  //         fontSize: "50px"
  //       }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  // const settings = {
  //   dots: false,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 5,
  //   slidesToScroll: 4,
  //   initialSlide: 0,
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: false,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  useEffect(() => {
    // Function to get the current date and update the state
    const getCurrentDate = () => {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const year = now.getFullYear();
      const formattedDate = `${day}/${month}/${year}`;
      setCurrentDate(formattedDate);
    };

    getCurrentDate(); // Call the function initially to set the current date
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 800 },
      items: 5,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 800, min: 490 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 490, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="first-courses-section">
      <h4>Growing in the Profession (19)</h4>
      <div className="All-Card">
        <Carousel
          responsive={responsive}
        >
          {categoryOnes.map((item, index) => {
            return (
              <Card
                style={{ paddingBottom: "10px" }}
                key={index}
                className="Card"
              >
                <Card.Img
                  variant="top"
                  src={item.img}
                />
                <Card.Body>
                  <Card.Text>{item.title}</Card.Text>
                </Card.Body>
                <div>
                  <div className="mini-info">
                    <span>{item.type}</span>
                    <span>{item.duration}</span>
                    <span>{currentDate}</span>
                  </div>
                  <div className="group-one-icons">
                    <FontAwesomeIcon icon={faCircleUser} />
                    <FontAwesomeIcon icon={faCircleExclamation} />
                    <FontAwesomeIcon icon={faTags} />
                  </div>
                </div>
              </Card>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default CategoryOne;

import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "./Category.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faCircleExclamation,
  faTags,
} from "@fortawesome/free-solid-svg-icons";
import categoryThrees from "../category_data3";
// import Slider from "react-slick";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CategoryThree = () => {

  const [currentDate, setCurrentDate] = useState("");

  
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

  const len = categoryThrees.length;
  return (
    <div className="first-courses-section">
      <h4>Growing in the Profession ({len})</h4>
      <div className="All-Card">
        <Carousel
          responsive={responsive}
        >
          {categoryThrees.map((item, index) => {
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
  )
}

export default CategoryThree;

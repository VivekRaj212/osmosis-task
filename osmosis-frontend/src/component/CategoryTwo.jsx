import { useState, useEffect} from "react";
import Card from "react-bootstrap/Card";
import "./Category.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faCircleExclamation,
  faTags,
} from "@fortawesome/free-solid-svg-icons";
import categoryTwos from "../category_data2";

const CategoryTwo = () => {

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



  return (
    <div className="first-courses-section">
      <h4>Managing the profession (4)</h4>
      <div className="All-Card"  style={{display: "flex", flexWrap: "wrap"}}>
          {categoryTwos.map((item, index) => {
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
      </div>
    </div>
  )
}

export default CategoryTwo

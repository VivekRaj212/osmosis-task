import "./ContentHeading.css";
import fourSquare from "../assets/four-squares.png";
import menu from "../assets/menu.png";


const ContentHeading = () => {

  return (
    <div className="heading-content">
      <h5>Explore Assets</h5>
      <div className="filter-area">
      <select id="filter" className="filter-dropdown" name="filter">
      <option value="filter" selected>Filter</option>
      <option value="option1">Soft Skills</option>
      <option value="option2">Project Management</option>
      <option value="option3">BusinessDevelopment</option>
      <option value="another-option">Personal Branding</option>
      <option value="something-else">Effective Networking</option>
    </select>
    <div className="arrange-icon">
        <img src={fourSquare} alt="four-square"  style={{width: "20px"}}  />
        <img src={menu} alt="four-square"  style={{width: "26px"}}  />
    </div>
      </div>
    </div>
  )
}

export default ContentHeading;

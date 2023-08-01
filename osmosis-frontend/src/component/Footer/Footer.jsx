import osmosisLogo from "../../assets/osmosislearn_logo.png";
import "./Footer.css";


const Footer = () => {
  return (
    <div className="footer-container">

       <div className="inner-footer-one">

         <div style={{display: "flex",columnGap: "10px", flexWrap: "wrap"}}>
         <span>About Us</span>
         <span>Privacy Policy</span>
         </div>
         <img src={osmosisLogo} alt="osmosis-logo" style={{width: "140px"}} />
         <span>We love to hear from you</span>
       </div>

       <div className="inner-footer-two">
           <span>@2023 OsmosisLearn</span>
       </div>
      
    </div>
  )
}

export default Footer;



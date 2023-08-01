
import CategoryOne from "../component/CategoryOne";
import TopNavbar from "../component/Navbar/TopNavbar";
import CategoryThree from "../component/categoryThree";
import CategoryTwo from "../component/categoryTwo";
import ContentHeading from "../component/ContentHeading";
import Footer from "../component/Footer/Footer";


const HomePage = () => {
  return (
    <div>
      <TopNavbar />
        <ContentHeading />
        <CategoryOne />
        <CategoryTwo />
        <CategoryThree />
        <Footer/>
    </div>
  )
}

export default HomePage;

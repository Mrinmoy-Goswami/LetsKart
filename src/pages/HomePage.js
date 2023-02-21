import Navbar from "../components/Navbar";
import HomeCard from "../components/HomeCard";
import "./HomePage.css";
import Leather from "../assets/leather jacket.jpg";
import cropTop from "../assets/crop top.jpg";
import short from "../assets/short dress.jpg";
import nike from "../assets/nike.jpg";
import neck from "../assets/necklace.jpg";

// import Leather from "../assets/leather jacket.jpg";


function HomePage() {
  return (
    <div className="MainContainer">
      <div>
        <Navbar />
      </div>
      <div
        className="Featured"
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div
          className="Left"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "50%",
            height: "50vh",
          }}
        >
          <div style={{ padding: "5vw" }}>
            <h4>LifeStyle Collection</h4>
            <h2>MEN</h2>
            <h4>Sale upto 30% off</h4>
          </div>
          {/* <div style={{ paddingTop: "5vw" }}> 
            <img className="imagekohli" src={kohli} alt="image" />
          </div>  */}
        </div>
        <div className="Right" style={{ width: "40%", padding: "5vw" }}>
          <div className="top">
            <h4>New Arrivals</h4>
            <h2>Summer Sale</h2>
            <h2>20% off</h2>
          </div>
          <div className="bottom">
            <h4>GAMING 4K</h4>
            <h2>LAPTOPS</h2>
            <h4>Sale upto 40% off</h4>
          </div>
        </div>
      </div>

      <div className="ProductCardContainer">
        <HomeCard title={"Women's Clothing"} des={"upto 30% off"} img={Leather}/>
        <HomeCard title={"Women's Clothing"} des={"upto 30% off"} img={cropTop} />
        <HomeCard title={"Jewellery"} des={"upto 20% off"} img = {neck}/>
        <HomeCard title={"Sports"} des={"upto 50% off"} img={nike}/>
        <HomeCard title={"Women's Clothing"} des={"upto 30% off"} img={short}/>
      </div>
    </div>
  );
}

export default HomePage;

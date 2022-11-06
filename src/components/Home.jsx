import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import Vector from "../assets/landingImg.png";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const goToRepos = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="home-page">
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="Landing page to my second semester assignment"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <div>
        <h1 data-aos='fade-up' data-aos-once="true">Hello! Welcome,</h1>
        <p data-aos='fade-up' data-aos-once="true" data-aos-delay="100">Click on the button below to see a list of all my repositories.</p>
        <button onClick={() => goToRepos("/repos")} data-aos='fade-up' data-aos-once="true" data-aos-delay="150">Repos</button>
      </div>
      <img src={Vector} alt="" className="vector" data-aos='fade-up' data-aos-once="true" data-aos-delay="200"/>
    </div>
  );
};

export default Home;

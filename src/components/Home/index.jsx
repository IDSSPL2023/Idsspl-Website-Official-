import About from "../About";
import Approch from "./Approach";
import Certifications from "./Certifications";
import FAQs from "./FAQs";
import HomeHero from "./HomeHero";
import Marquee from "./Marquee";
import Testimonials from "./Testimonials";
import css from "./home.module.scss";

const Home = () => {
  return (
    <main className={css.homePage}>
      <HomeHero />
      <Marquee />
      <About />
      <Approch />
      <Testimonials />x
      <FAQs />
      <Certifications />
    </main>
  );
};

export default Home;

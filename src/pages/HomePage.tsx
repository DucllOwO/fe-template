
import Header from "../components/Header";
import Hero from "../components/Hero";
import Upcoming from "../components/Projects/Upcoming";
import Footer from "../components/Footer";
import Exclusive from "../components/Projects/Exclusive";
import HomeContent from "../components/HomeContent";
import MyTeam from "../components/MyTeam";
import HowItWork from "../components/HowItWork";
import CallToAction from "../components/CallToAction";
import ModalSearch from "../components/Modal/SearchModal";
import ModalMenu from "../components/Modal/MenuModal";

const HomePage = () => {
  return (
    <div className="main">
      <Header />
      <Hero />
      <Upcoming />
      <Exclusive />
      <HomeContent />
      <MyTeam />
      <HowItWork />
      <CallToAction />
      <Footer />
      <ModalSearch />
      <ModalMenu />
    </div>
  );
};

export default HomePage;

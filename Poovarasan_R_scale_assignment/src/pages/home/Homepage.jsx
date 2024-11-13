import Appbar from "../../components/Appbar";
import Footer from "../../components/Footer";
import Applications from "./sections/Applications";
import CaseStudies from "./sections/CaseStudies";
import Companies from "./sections/Companies";
import Customers from "./sections/Customers";
import DataEngine from "./sections/DataEngine";
import Frontier from "./sections/Frontier";
import Generative from "./sections/Generative";
import HeroSection from "./sections/HeroSection";
import Partner from "./sections/Partner";
import Register from "./sections/Register";

export default function Homepage() {
  return (
    <>
      <Appbar />
      <HeroSection />
      <Companies />
      <Frontier />
      <Generative />
      <Partner />
      <DataEngine />
      <Applications />
      <CaseStudies />
      <Customers />
      <Register />
      <Footer />
    </>
  );
}

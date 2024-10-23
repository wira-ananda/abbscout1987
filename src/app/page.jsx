import Homepage from "./components/Homepage";
import About from "./components/About";
import Footer from "./components/Footer";
import AdatAmbalan from "./components/AdatAmbalan";
import ProfileandArticles from "./components/ProfileandArticles";

export default function Home() {
  return (
    <>
      <Homepage />
      <About />
      <AdatAmbalan />
      <ProfileandArticles />
      <Footer />
    </>
  );
}

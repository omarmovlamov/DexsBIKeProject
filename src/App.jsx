import "./App.css";
import BannerPage from "./components/BannerPage";
import Benefits from "./components/Benefits";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import TopFooter from "./components/TopFooter";

function App() {
  return (
    <div>
      <BannerPage />
      <Benefits />
      <Reviews />
      <Faqs />
      <TopFooter />
      <Footer />
    </div>
  );
}

export default App;

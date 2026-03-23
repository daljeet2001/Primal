
import Navbar from "./components/navbar";
import Banner1 from "./components/banner1";
import Banner2 from "./components/banner2";
import Header from "./components/header";
import Potential from "./components/potential"
import CTA from "./components/cta";
import Footer from "./components/footer";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Banner1/>
      <Header/>
      <Banner2/>
      <Potential/>
      <CTA/>
      <Footer/>
    </div>
  );
}


import Navbar from "./Components/Navbar/Navbar";
import { ImageSlider } from "./Components/ImageSlider/ImageSlider";
import Advertising from "./Components/Advertising/Advertising";
import Services from "./Components/Services/Services";
import Features from "./Components/Features/Features";
import Tools from "./Components/Tools/Tools";
import Footer from "./Components/Footer/Footer";

export default function Home() {
  return (
 <>
    <Navbar/>
<div className="container-fluid">
<ImageSlider/>
<Advertising/>
<Services/>
<Features/>
<Tools/>
<Footer/>
</div>
</>
  )
}

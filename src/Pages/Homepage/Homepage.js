import Header from "../../component/Header/Header"; 
import Body from "../../component/Body/Body";  
import Contact from "../../component/Contact/Contact";
import Footer from "../../component/Footer/Footer";
import Comments from "../../component/Comments/Comments";
import Help from "../../component/Help/Help";
import Partners from "../../component/Partners/Partners";

function Homepage() {
  return (
    <div>
    <Header/>
    <Body/>
    <Partners/>
    <Contact/>
    <Comments/>
    <Help/>
    <Footer/>
    </div>
  );
}

export default Homepage;

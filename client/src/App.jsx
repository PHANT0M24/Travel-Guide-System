import { Outlet } from "react-router-dom";
// import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  );
};

export default App;

import { Outlet } from "react-router-dom";
// import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Navbar2 from "./Components/Navbar/Navbar2";

const App = () => {
  return (
    <>
      <Navbar2/>
      <Outlet/>
      <Footer/>
    </>
  );
};

export default App;

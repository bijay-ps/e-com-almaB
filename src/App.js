import "./styles.css";
// BELOW COMPONENTS
import Home from "./component/home";
import img from "./assets/bg.jpg";
import Navbar from "./component/navbar";
import Error from "./component/error";

export default function App() {
  return (
    <>
      <Navbar />
      <Home image={img} />
    </>
  );
}

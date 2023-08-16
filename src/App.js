import "./styles.css";
// BELOW COMPONENTS
import Home from "./component/home";
import Navbar from "./component/navbar";
import Error from "./component/error";

export default function App() {
  const error = false;
  return (
    <>
      {!error && (
        <>
          <Navbar /> <Home />
        </>
      )}
      {error && <Error />}
    </>
  );
}

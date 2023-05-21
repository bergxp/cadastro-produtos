import { BrowserRouter } from "react-router-dom";
import { Global } from "./styles/global";
import Header from "./components/Header";
import Routes from "./router";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes/>
    </BrowserRouter>
    <Global />
    </>
  );
}

export default App;

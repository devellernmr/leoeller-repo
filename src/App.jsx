import Navbar from "./components/Navbar/Navbar";
import Back from "./components/Home/Background/Background";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projetos from "./components/Projects/Projects";
const App = () => {

  return (
    <>
      <Navbar />
      <Home />
      <Back />
      <About />
      <Projetos />
    </>
  );

};

export default App;

import Navbar from "./components/Navbar/Navbar";
import Back from "./components/Home/Background/Background";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projetos from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
const App = () => {

  return (
    <>
      <Navbar />
      <Home />
      <Back />
      <About />
      <Projetos />
      <Contacts />
      <Footer />
    </>
  );

};

export default App;

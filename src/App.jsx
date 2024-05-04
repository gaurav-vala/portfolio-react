import Banner from "./components/Banner";
import Blogs from "./components/Blogs";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
function App() {
  return (
    <>
      <div className="main_container xl:w-2/4 mx-auto">
        <Banner />
        <Skills />
        <Experience />
        <Projects />
        <Blogs />
        <Footer />
      </div>
    </>
  );
}

export default App;

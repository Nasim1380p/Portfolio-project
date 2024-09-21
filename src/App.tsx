
import About from "./Components/About";
import Allproject from "./Components/Allproject";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Services from "./Components/Services";

export default function App() {
  return (
    <main className="w-full mx-auto text-white 2xl:container overflow-x-hidden bg-[#0c0d0e]">
      <Header />
      <Body />
      <About />
      <Services />
      <Allproject />
      <Footer />
    </main>
  )
}

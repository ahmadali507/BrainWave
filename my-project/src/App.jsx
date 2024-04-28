import Button from "./components/Button"
import ButtonGradient from "./assets/svg/ButtonGradient"
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
function App() {
  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <div className="pt-[4.75rem] lg:pt-[5.35rem] overflow-hidden">
      <Header />
      <Hero />
      <Benefits/>
      <Collaboration/>
      <Services/>
    </div>
    <ButtonGradient/>
  </>
  ); 
}

export default App; 

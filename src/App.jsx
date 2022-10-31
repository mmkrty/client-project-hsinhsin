import "./App.css";
import { data } from "./datas/hsinHsinInfo";
import NavBar from "./components/navbar/navbar.component";
import Hero from "./components/hero/hero.component";
import About from "./components/about/about.component";
import Feature from "./components/feature/feature.component";

function App() {
  return (
    <div className="font-source-sans-pro">
      <NavBar />
      <Hero props={data} />
      <About props={data} />
      <Feature props={data} />
    </div>
  );
}

export default App;

import { data } from "../../datas/hsinHsinInfo";
import Hero from "../../components/hero/hero.component";

function Home() {
  return (
    <div className="font-source-sans-pro">
      <Hero props={data} />
    </div>
  );
}

export default Home;

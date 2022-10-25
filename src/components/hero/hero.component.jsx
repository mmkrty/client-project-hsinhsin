import thumb from "../../assets/hsinhsin.jpg";
const Hero = () => {
  return (
    <section className=" bg-secondary flex items-center justify-center">
      <div className="min-h-screen max-w-7xl flex justify-center items-center">
        <div className="w-2/4">
          <h1 className="text-6xl mb-8">Learn Chinese the pleasant way</h1>
          <p className="text-2xl mb-10">
            Hi there! This is Hsin Hsin, a experienced Chinese tutor whoes
            passion is helping Chinese learners to start their journey in a
            pleasant and friendly way.
          </p>
          <a className="text-xl py-3 px-5 text-white bg-prime rounded-sm">
            Start Learning
          </a>
        </div>
        <div className="max-w-2xl rounded-full shadow-md overflow-hidden">
          <img className="max-w-full" src={thumb} alt="picture" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

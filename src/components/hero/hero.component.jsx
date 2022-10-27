import thumb from "../../assets/hsinhsin.jpg";

const Hero = (props) => {
  console.log(props);
  return (
    <section className=" bg-secondary flex items-center justify-center">
      <div className="min-h-screen max-w-7xl flex justify-center items-center">
        <div className="w-2/4">
          <h1 className="text-6xl mb-8 font-fraunces capitalize tracking-wide text-prime">
            Learn Chinese the pleasant way
          </h1>
          <p className="text-2xl mb-10 leading-10 text-prime">
            Hi there! This is Hsin Hsin, a experienced Chinese tutor whoes
            passion is helping learners to start their journey in a pleasant and
            friendly way.
          </p>
          <a className="text-xl py-3 px-5 text-white bg-prime rounded-sm shadow-md cursor-pointer">
            Start Learning
          </a>
        </div>
        <div className="max-w-2xl rounded-full shadow-md overflow-hidden mx-3">
          <img className="max-w-full" src={thumb} alt="picture" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

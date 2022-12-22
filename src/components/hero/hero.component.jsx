import thumb from "../../assets/hsinhsin.jpg";
import { useSpring, animated } from "react-spring";

const Hero = ({ props }) => {
  const { hero } = props;
  const aniProps = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  return (
    <section className=" bg-secondary flex items-center justify-center">
      <animated.div style={aniProps}>
        <div className="min-h-screen max-w-7xl flex justify-center items-center mx-5 -md:flex-col-reverse">
          <div className="w-2/4 -md:w-3/4">
            <h1 className="text-6xl mb-8 font-fraunces capitalize tracking-wide text-prime -lg:text-4xl">
              {hero.header}
            </h1>
            <p className="text-2xl mb-10 leading-10 text-prime -lg:text-xl">
              {hero.intro}
            </p>
            <a className="text-xl py-3 px-5 text-white bg-prime rounded-sm shadow-md cursor-pointer uppercase -lg:text-lg">
              {hero.action}
            </a>
          </div>
          <div className="max-w-2xl rounded-full shadow-md overflow-hidden mx-3 -md:mt-20 -md:mb-10 -md:max-w-xl">
            <img className="max-w-full" src={thumb} alt="picture" />
          </div>
        </div>
      </animated.div>
    </section>
  );
};

export default Hero;

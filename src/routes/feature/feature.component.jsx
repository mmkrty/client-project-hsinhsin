import { data } from "../../datas/hsinHsinInfo";
import { useSpring, animated } from "react-spring";

const Feature = () => {
  const { features, hook } = data;
  const aniProps = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  return (
    <section className="min-h-screen bg-secondary flex items-center justify-center flex-col pt-20 pb-12">
      <animated.div
        style={aniProps}
        className="flex flex-col items-center justify-center"
      >
        <h2 className="text-5xl font-fraunces text-prime text-center">
          Feature
        </h2>
        <div className="w-11/12 max-w-7xl flex justify-around items-top py-14 -lg:flex-col -lg:items-center -lg:gap-y-4">
          <h3 className="max-w-xl font-semibold text-4xl flex-1 leading-relaxed text-prime">
            {hook.banner}
          </h3>
          <p className="max-w-xl text-xl leading-8 flex-1 text-prime">
            {hook.content}
          </p>
        </div>
        <div className="max-w-7xl flex justify-center items-center flex-wrap gap-x-4">
          {features.map((el, idx) => {
            return (
              <div
                key={idx}
                className="bg-white m-3 rounded-md shadow-md overflow-hidden w-80 -sm:w-4/5"
              >
                <h3 className="text-4xl tracking-wide pb-3 pt-5 px-5">
                  {el.title}
                </h3>
                <hr class="mt-1 mb-4 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <p className="px-7 pb-4 h-36">{el.content}</p>
                <img className="w-full" src={el.imgUrl}></img>
              </div>
            );
          })}
        </div>
      </animated.div>
    </section>
  );
};
export default Feature;

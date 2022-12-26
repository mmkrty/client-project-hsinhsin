import { data } from "../../datas/hsinHsinInfo";
import { useSpring, animated } from "react-spring";

const About = () => {
  const { personInfo } = data;
  const aniProps = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  return (
    <section className="min-h-screen bg-secondary flex items-center justify-center flex-col pt-20 ">
      <animated.div style={aniProps}>
        <h2 className="text-5xl font-fraunces text-prime  text-center">
          About
        </h2>
        <div className="max-w-7xl flex justify-center items-center flex-col py-10">
          {/* <img
            src={teacher}
            alt="teacher"
            width="50%"
            className="my-0 mx-auto"
          ></img> */}
          <div className="text-prime max-w-5xl flex -lg:mx-5">
            <div className="flex flex-col justify-center items-center gap-5 ">
              {personInfo.about.map((el, idx) => (
                <p key={idx}>{el}</p>
              ))}
            </div>
          </div>

          <div className="bg-white px-8 py-5 m-3 rounded-md shadow-md">
            <div className="mb-4">
              <h3 className="text-4xl mb-3  font-fraunces">Experience</h3>
              <hr className="mt-3 mb-5 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <ul className="relative">
                {personInfo.experience.map((el, idx) => {
                  return (
                    <li
                      key={idx}
                      className="border-l-2 border-secondary pl-5 last:border-0"
                    >
                      <div div className="pb-2">
                        <h3 className="text-3xl  before:absolute before:w-6  before:h-6 before:rounded-full before:bg-red before:border-2 before:border-prime  before:-left-3 before:bg-secondary  before:shadow-md ">
                          {el.title}
                        </h3>
                        <p>
                          <span className="text-lg">{el.institution}, </span>
                          <span className="text-md italic text-slate-500">
                            {el.duration}{" "}
                          </span>
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h3 className="text-4xl  font-fraunces">
                Education & Certification
              </h3>
              <hr className="mt-3 mb-5 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <ul className="relative">
                {personInfo.certification.map((el, idx) => {
                  return (
                    <li
                      key={idx}
                      className="border-l-2 border-secondary pl-5 last:border-0"
                    >
                      <div className="pb-2">
                        <h3 className="text-3xl before:absolute before:w-6  before:h-6 before:rounded-full before:bg-red before:border-2 before:border-prime  before:-left-3 before:bg-secondary  before:shadow-md">
                          {el.name}
                        </h3>
                        <p>
                          <span className="text-md">{el.institution}. </span>
                          <span className="text-md italic text-slate-500">
                            {el.time}
                          </span>
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </animated.div>
    </section>
  );
};
export default About;

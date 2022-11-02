import teacher from "../../assets/teacher.png";
const About = ({ props }) => {
  const { personInfo } = props;
  return (
    <section className=" bg-secondary flex items-center justify-center flex-col">
      <h2 className="text-5xl font-fraunces mb-5 text-prime">About</h2>
      <div className="min-h-screen max-w-7xl flex justify-center items-center">
        {/* <img
            src={teacher}
            alt="teacher"
            width="50%"
            className="my-0 mx-auto"
          ></img> */}

        <div className="bg-white px-8 py-5 m-3 rounded-md shadow-md">
          <div className="mb-4">
            <h3 className="text-4xl  font-fraunces">
              Education & Certification
            </h3>
            <hr class="mt-3 mb-5 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <ul>
              {personInfo.certification.map((el) => {
                return (
                  <li>
                    <div className="mb-2">
                      <h3 className="text-3xl">{el.name}</h3>
                      <p className="text-md">{el.institution}</p>
                      <p className="text-md italic text-slate-500">{el.time}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-4xl mb-3  font-fraunces">Experience</h3>
            <hr class="mt-3 mb-5 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <ul className="relative">
              {personInfo.experience.map((el) => {
                return (
                  <li className="border-l-2 border-secondary pl-5 last:border-0">
                    <div div className="pb-2">
                      <h3 className="text-3xl  before:absolute before:w-6  before:h-6 before:rounded-full before:bg-red before:border-2 before:border-prime  before:-left-3 before:bg-secondary  before:shadow-md ">
                        {el.title}
                      </h3>
                      <p className="text-lg">{el.institution}</p>
                      <p className="text-md italic text-slate-500">
                        {el.duration}{" "}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;

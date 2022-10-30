import teacher from "../../assets/teacher.png";
const About = ({ props }) => {
  const { personInfo } = props;
  return (
    <section className=" bg-secondary flex items-center justify-center">
      <div className="min-h-screen max-w-7xl flex justify-center items-center">
        <div className="flex-col">
          <img
            src={teacher}
            alt="teacher"
            width="50%"
            className="my-0 mx-auto"
          ></img>

          <div className="bg-white p-5 m-3 rounded-md shadow-md">
            <h2 className="text-4xl">Education & Certification</h2>
            <hr class="mt-3 mb-5 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
            {personInfo.certification.map((el) => {
              return (
                <div className="mb-2">
                  <h3 className="text-2xl">{el.name}</h3>
                  <p className="text-md">{el.institution}</p>
                  <p className="text-md italic text-slate-500">{el.time}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white p-5 m-3 rounded-md shadow-md">
          <h2 className="text-4xl mb-3">Experience</h2>
          <hr class="mt-3 mb-5 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
          {personInfo.experience.map((el) => {
            return (
              <div div className="mb-2">
                <h3 className="text-2xl">{el.title}</h3>
                <p className="text-lg">{el.institution}</p>
                <p className="text-md italic text-slate-500">{el.duration} </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default About;

const Feature = ({ props }) => {
  const { features } = props;
  return (
    <section className=" bg-secondary flex items-center justify-center flex-col">
      <h2 className="text-5xl font-fraunces">Feature</h2>
      <div className="min-h-screen max-w-7xl flex justify-center items-center">
        {features.map((el) => {
          return (
            <div className="bg-white p-5 m-3 rounded-md shadow-md">
              <h3 className="text-3xl mb-2 tracking-wide">{el.title}</h3>
              <hr class="mt-3 mb-5 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <p>{el.content}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Feature;

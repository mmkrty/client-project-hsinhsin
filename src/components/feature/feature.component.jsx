const Feature = ({ props }) => {
  const { features, hook } = props;
  return (
    <section className="min-h-screen bg-secondary flex items-center justify-center flex-col py-10">
      <h2 className="text-5xl font-fraunces text-prime">Feature</h2>
      <div className="w-11/12 max-w-7xl flex justify-around items-top py-14">
        <h3 className="max-w-xl font-semibold text-4xl flex-1 px-4 leading-relaxed text-prime">
          {hook.banner}
        </h3>
        <p className="max-w-xl text-xl leading-8 flex-1 text-prime">
          {hook.content}
        </p>
      </div>
      <div className="max-w-7xl flex justify-center items-center">
        {features.map((el) => {
          return (
            <div className="bg-white m-3 rounded-md shadow-md overflow-hidden">
              <h3 className="text-4xl tracking-wide pb-3 pt-5 px-5">
                {el.title}
              </h3>
              <hr class="mt-1 mb-4 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <p className="px-7 pb-4">{el.content}</p>
              <img className="w-full" src={el.imgUrl}></img>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Feature;

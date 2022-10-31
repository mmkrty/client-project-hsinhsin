const Info = ({ props }) => {
  const { features } = props;
  return (
    <section className=" bg-secondary flex items-center justify-center">
      <div className="min-h-screen max-w-7xl flex justify-center items-center">
        {features.map((el) => {
          return (
            <div className="bg-white p-5 m-3 rounded-md shadow-md">
              <h3>{el.title}</h3>
              <p>{el.content}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Info;

import qZone1 from "../../assets/qZone1.png";
import qZone2 from "../../assets/qZone2.png";
import qZone3 from "../../assets/qZone3.png";
import bg from "../../assets/bg.png";
const QZone = () => {
  return (
    <div className=" ">
      <section className="bg-base-200 p-2 my-5 rounded-md">
        <h2 className="text-xl font-semibold my-2 ">Q-Zone</h2>
        <div className="">
          <img src={qZone1} alt="" />
        </div>
        <div>
          <img src={qZone2} alt="" />
        </div>
        <div>
          <img src={qZone3} alt="" />
        </div>
      </section>
      <div
        className=" mt-6 hero min-h-screen"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-xl font-bold">
              Create an Amazing Newspaper
            </h1>
            <p className="mb-5">
              Discover thousands of options, easy to customize layouts,
              one-click to import demo and much more.
            </p>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QZone;

import hireMe from "../assets/profile2.png";

const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
          Do you need an experienced Frontend Developer 
          
          <br />to take your project to the next level?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
          Over the course of my career, I have successfully delivered a wide variety of websites and applications, from corporate websites to complex online stores. I've worked with designers to turn their creative ideas into stunning digital realities. I also have strong knowledge in optimizing website performance for better speed and security, and I always ensure that the projects I work on meet the latest standards in terms of accessibility.
          </p>
          <button className="btn-primary mt-10">Say Hello</button>
        </div>
        <img
          src={hireMe}
          alt=""
          className="lg:h-[32rem] h-80 lg:absolute lg:translate-x-28 bottom-0 -right-3 object-cover"
        />
      </div>
    </section>
  );
};

export default Hireme;

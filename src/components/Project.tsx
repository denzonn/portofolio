import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../../public/images/Ecci.png";
import project2 from "../../public/images/PGT.png";
import project3 from "../../public/images/HRIS.png";
import project4 from "../../public/images/Movie.png";
import project5 from "../../public/images/Store.png";
import project6 from "../../public/images/Todo list.png";
import project_person from "../../public/images/photo-profile.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Emergency Call Center Indonesia",
      github_link: "https://github.com/CapstoneProjectKelompok3",
      live_link: "https://ecci.vercel.app/",
    },
    {
      img: project2,
      name: "Official Website PPGT",
      github_link: "https://github.com/denzonn/ppgtjsk",
      live_link: "https://udberkah.com/",
    },
    {
      img: project3,
      name: "HRIS Apps",
      github_link: "https://github.com/HRIS-APP-TEAM-3/Frontend_immersive",
      live_link: "https://www.google.com/",
    },
    {
      img: project4,
      name: "Movie Apps",
      github_link:
        "https://github.com/ALTA-FE15-Denson/mymovies-app-react",
      live_link: "https://www.google.com/",
    },
    {
      img: project5,
      name: "Store Apps",
      github_link: "https://udberkat.com/",
      live_link: "https://www.google.com/",
    },
    {
      img: project6,
      name: "To Do List App",
      github_link: "https://github.com/ALTA-FE15-Denson/todo-list-app",
      live_link: "https://www.google.com/",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={project_person} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Project;

import { projects } from "@/data";
import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "./ui/Pin";

const Projects = () => (
  <section className="py-20" id="projects">
    <h1 className="heading">
      A small selection of <span className="text-purple">recent projects</span>
    </h1>
    <div className="mt-10 flex flex-wrap items-center justify-center gap-x-24 gap-y-8 p-4">
      {projects.map(({ id, title, des, img, iconLists, link }) => (
        <div
          className="flex h-100 w-[80vw] items-center justify-center sm:w-96 lg:min-h-130"
          key={id}
        >
          <PinContainer title={title.trim().split(/[- ]/).join("")} href={link}>
            <div className="relative mb-10 flex h-[20vh] w-[80vw] items-center justify-center overflow-hidden sm:w-96 lg:h-[30vh]">
              <div
                className="relative h-full w-full overflow-hidden lg:rounded-3xl"
                style={{ backgroundColor: "#13162D" }}
              >
                <img src="/bg.png" alt="bgimg" />
                <img src={img} alt="cover" className="absolute bottom-0 z-10" />
              </div>
            </div>

            <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">{title}</h1>

            <p
              className="line-clamp-2 text-sm font-light lg:text-xl lg:font-normal"
              style={{
                color: "#BEC1DD",
                margin: "1vh 0",
              }}
            >
              {des}
            </p>

            <div className="mt-7 mb-3 flex items-center justify-between">
              <div className="flex items-center">
                {iconLists.map((icon, index) => (
                  <div
                    key={index}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black lg:h-10 lg:w-10"
                    style={{
                      transform: `translateX(-${5 * index + 2}px)`,
                    }}
                  >
                    <img src={icon} alt="icon5" className="p-2" />
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center">
                <p className="text-purple flex text-sm md:text-xs lg:text-xl">Check Live Site</p>
                <FaLocationArrow className="ms-3" color="#CBACF9" />
              </div>
            </div>
          </PinContainer>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;

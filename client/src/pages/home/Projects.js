import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";

function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const { protfolioData } = useSelector((state) => state.root);
  const { Project } = protfolioData;

  return (
    <div>
      <SectionTitle title="Projects" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {Project.map((project, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
              key={index}
            >
              <h1
                className={`text-xl px-5
                 ${
                   selectedItemIndex === index
                     ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3"
                     : "text-white"
                 } `}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-10 sm:flex-col">
          {/* <div className="h-[400px]">
            <lottie-player
              src={Project[selectedItemIndex].image}
              background="transparent"
              speed="1"
              autoplay
              loop
            ></lottie-player>
          </div> */}
          <img
            src={Project[selectedItemIndex].image}
            alt=""
            className="h-60 w-72"
          />
          <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-xl">
              {Project[selectedItemIndex].title}
            </h1>
            <p className="text-white">
              {Project[selectedItemIndex].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

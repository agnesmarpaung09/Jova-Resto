"use client";
import React from "react";
import Slider from "react-slick";

const Testimonial = () => {
  const dataTestimoni = [
    {
      image: "/images/UMKM5.png",

      name: "Tammara Timmy",
      busines: "Owner, Resto A",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odioquibusdam, facilis maiores voluptates alias labore nequerepellendus ipsum quos deserunt ut dolor, tempora expedita atque aperiam cumque est corrupti quod, suscipit autem. Non quia    eveniet harum quam omnis commodi debitis corporis aut est delectus vel, esse corrupti saepe consectetur facilis impedit   temporibus odio amet nihil",
    },
    {
      image: "/images/UMKM6.png",

      name: "John Doe ",
      busines: "Owner, Resto B",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odioquibusdam, facilis maiores voluptates alias labore nequerepellendus ipsum quos deserunt ut dolor, tempora expedita atque aperiam cumque est corrupti quod, suscipit autem. Non quia    eveniet harum quam omnis commodi debitis corporis aut est delectus vel, esse corrupti saepe consectetur facilis impedit   temporibus odio amet nihil",
    },
    {
      image: "/images/UMKM5.png",

      name: "Tammara Timmy",
      busines: "Owner, Resto C",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odioquibusdam, facilis maiores voluptates alias labore nequerepellendus ipsum quos deserunt ut dolor, tempora expedita atque aperiam cumque est corrupti quod, suscipit autem. Non quia    eveniet harum quam omnis commodi debitis corporis aut est delectus vel, esse corrupti saepe consectetur facilis impedit   temporibus odio amet nihil",
    },
    {
      image: "/images/UMKM6.png",

      name: "John Doe ",
      busines: "Owner, Resto D",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odioquibusdam, facilis maiores voluptates alias labore nequerepellendus ipsum quos deserunt ut dolor, tempora expedita atque aperiam cumque est corrupti quod, suscipit autem. Non quia    eveniet harum quam omnis commodi debitis corporis aut est delectus vel, esse corrupti saepe consectetur facilis impedit   temporibus odio amet nihil",
    },
    {
      image: "/images/UMKM5.png",

      name: "Tammara Timmy",
      busines: "Owner, Resto E",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odioquibusdam, facilis maiores voluptates alias labore nequerepellendus ipsum quos deserunt ut dolor, tempora expedita atque aperiam cumque est corrupti quod, suscipit autem. Non quia    eveniet harum quam omnis commodi debitis corporis aut est delectus vel, esse corrupti saepe consectetur facilis impedit   temporibus odio amet nihil",
    },
    {
      image: "/images/UMKM6.png",

      name: "John Doe ",
      busines: "Owner, Resto F",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odioquibusdam, facilis maiores voluptates alias labore nequerepellendus ipsum quos deserunt ut dolor, tempora expedita atque aperiam cumque est corrupti quod, suscipit autem. Non quia    eveniet harum quam omnis commodi debitis corporis aut est delectus vel, esse corrupti saepe consectetur facilis impedit   temporibus odio amet nihil",
    },
  ];

  const sliderSettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 2,
    speed: 500,
    responsive: [
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div
      id="third-section"
      className="flex flex-col items-center mt-28 xl:mt-36 "
    >
      <h1 className="text-3xl md:text-4 xl:text-5xl font-bold absolute z-10 bg-gradient-to-b from-gray-400 to-white bg-clip-text text-transparent">
        TESTIMONIAL
      </h1>
      <h2 className=" text-xl md:text-2xl xl:text-3xl font-semibold mt-4 xl:mt-6 mb-8 text-center text-purple-900 absolute z-10">
        Testimonial
      </h2>
      <div
        className="grid grid-cols-1 items-center mt-28 bg-cover  min-h-screen "
        style={{
          backgroundImage: 'url("/images/BG testimonial.png")',
        }}
      >
        <Slider {...sliderSettings}>
          {dataTestimoni.map((row, index) => (
            <div key={index} className="flex items-center mb-32">
              <div className="xl:flex bg-white rounded-2xl shadow-2xl xl:w-auto xl:h-80 mr-10 sm:mr-8 md:mr-16 lg:mr-28 xl:mr-8 2xl:mr-12 items-center ">
                <div className=" xl:w-1/3 h-full bg-cover bg-center rounded-xl">
                  <img
                    src={row.image}
                    alt={`Testimonial ${index + 1}`}
                    className="rounded-2xl shadow-xl w-full h-96 sm:w-full sm:h-80"
                  />
                </div>
                <div className=" xl:w-2/3 p-4 xl:p-0 mx-2 xl:mx-6 2xl:p-4">
                  <h2 className=" text-lg sm:text-md font-semibold mt-2">
                    {row.name}
                  </h2>
                  <li className="text-sm sm:text-xs text-gray-500 ml-2 mt-2">
                    {row.busines}
                  </li>
                  <p className="text-md sm:text-sm text-gray-500 mt-2 text-justify">
                    {row.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;

import React from "react";

const Mytopperformances = () => {
  const techs = [
    {
      id: 1,
      src: "",
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: "",
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: "",
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    
  ];

  return (
    <div
      name="My-top-performances"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            My top performances
          </p>
          <p className="py-6">your top performaces</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mytopperformances;

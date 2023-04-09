import React from "react";

const Myevents = () => {
  const port = [
    {
      id: 1,
      src: "",
    },
    {
      id: 2,
      src: "",
    },
    {
      id: 3,
      src: "",
    },
    {
      id: 4,
      src: "",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            My events
          </p>
          <p className="py-6">These are your upcoming events</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {port.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Cancel
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Start
                </button>
              </div>
              <p className="text-2xl text-500 p-4 max-w-md">sponsers list</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Myevents;

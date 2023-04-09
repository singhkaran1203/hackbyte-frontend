import React from "react";
import './Home.css'

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            karan singh
          </h2>
          <p className="text-2xl text-gray-500 py-4 max-w-md">
            Dancer Singer Gamer
          </p>

          <div>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Launch demo modal
            </button>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog ">
                <div class="modal-content">
                  <div className="inputOuter">
                  <div class="innerclass">
                    <span class="input-group-text my-3">
                      Description of the event{" "}
                    </span>
                    <textarea
                      class="form-control my-2 textkaran"
                      aria-label="With textarea"
                    ></textarea>
                  </div></div>

                  <div class="modal-body">
                    <div class="input-group mb-3">
                      <label class="input-group-text" for="inputGroupFile01">
                        Image
                      </label>
                      <input
                        type="file"
                        class="form-control"
                        id="inputGroupFile01"
                      />
                    </div>
                    <input type="datetime-local" name="datetime"></input>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-danger"
                      data-bs-dismiss="modal"
                      style={{ color: "black" }}
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary"
                      style={{ color: "black" }}
                    >
                      schedule event
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img
            src=""
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

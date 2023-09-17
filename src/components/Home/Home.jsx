import { useEffect } from "react";
import { useState } from "react";
import Cart from "../cart/Cart";

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  //   console.log(selectedCourse);

  return (
    <div className="bg-[#F3F3F3]">
      <h1 className="text-5xl text-center font-bold py-10">
        Course Registration
      </h1>

      <div className="container mx-auto flex gap-20 pb-20">
        <div className="  grid grid-cols-3 gap-10">
          {courses.map((course) => (
            <div key={course.id}>
              <div className="border-gray-200 border-2 rounded-lg p-2 w-80  ">
                <figure className="flex justify-center mt-2">
                  <img src={course?.img} alt="" />
                </figure>
                <h3 className="font-bold text-2xl text-center mt-2">
                  {course?.course_name}
                </h3>
                <p className="text-center">
                  <small>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </small>
                </p>
                <div className="mt-2 flex  justify-evenly">
                  <img src="./dollar-sign 1.png" alt="" />
                  <p>Price: {course?.price}</p>
                  <img src="./Frame.png" alt="" />
                  <p>Credit: {course?.credit}hr</p>
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={() => handleSelectCourse(course)}
                    className=" text-center mt-4 bg-blue-500 px-28 py-1 rounded-lg text-white font-medium"
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Cart
            selectedCourse={selectedCourse}
            totalTime={totalTime}
            timeLeft={timeLeft}
          ></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;

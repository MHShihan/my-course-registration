const Cart = ({ selectedCourse, totalTime, timeLeft }) => {
  //   const { course_name, id } = selectedCourse;
  //   console.log(selectedCourse);
  return (
    <div className="bg-white p-6 rounded-lg">
      <h3 className="text-l font-bold text-[#2F80ED] mb-2">
        Credit Hour Remaining {timeLeft} hr
      </h3>
      <hr />
      <h2 className="text-xl font-bold mt-2 mb-2">Course Name</h2>

      <ol className="list-decimal">
        {selectedCourse.map((course) => (
          <li key={course.id}>{course.course_name}</li>
        ))}
      </ol>
      <hr className="mt-2 mb-2" />
      <h2>Total Credit Hour : {totalTime}</h2>
    </div>
  );
};

export default Cart;

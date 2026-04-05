import "../styles/App.css";

function Courses() {
  const courses = [
    {
      id: 1,
      title: "React Basics",
      description: "Learn fundamentals of React including components and hooks."
    },
    {
      id: 2,
      title: "JavaScript Advanced",
      description: "Master advanced JavaScript concepts and asynchronous programming."
    },
    {
      id: 3,
      title: "Full Stack Development",
      description: "Become a full stack developer with frontend and backend skills."
    }
  ];

  return (
    <div className="container">
      <h1>Courses</h1>

      {courses.map((course) => (
        <div key={course.id} className="card">
          <h3>{course.title}</h3>
          <p>{course.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Courses;

const Education = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-primary border-b pb-2">Education</h2>
        <div className="mb-6">
          <h3 className="text-xl font-bold">Bachelor of Computer Science - Scholarship</h3>
          <p className="text-lg text-primary">Nile University, Cairo, Egypt</p>
          <p className="text-gray-700">First Year Student (Expected graduation: 2028)</p>
          <p className="text-gray-700 mt-2">Relevant coursework: Data Structures, Algorithms, Web Development</p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-bold">High School - 96% Thanaweya Amma</h3>
          <p className="text-lg text-primary">El Salam Language School, Sohag, Egypt</p>
          {/* <p className="text-gray-700">First Year Student (Expected graduation: 2028)</p> */}
          {/* <p className="text-gray-700 mt-2">Relevant coursework: Data Structures, Algorithms, Web Development</p> */}
        </div>
        <div>
          <h3 className="text-xl font-bold">Self-Directed Learning</h3>
          <p className="text-gray-700 mt-2">
            Extensive self-study in web development technologies, frameworks, and best practices 
            through online courses, documentation, and project-based learning since age 14.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;

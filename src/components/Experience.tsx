interface ExperienceItemProps {
  title: string;
  company: string;
  achievements: string[];
}

const ExperienceItem = ({ title, company, achievements }: ExperienceItemProps) => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold">{title}</h3>
      <h4 className="text-lg text-primary mb-3">{company}</h4>
      <ul className="list-disc pl-5 space-y-2">
        {achievements.map((achievement, index) => (
          <li key={index} className="text-gray-700">{achievement}</li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Es3af - es3af.pro",
      achievements: [
        "Developed an AI-powered bilingual medical assistant using React, Supabase, Gemini API, and Clerk Auth to deliver conversational medical insights to students."
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Hootdi Online Store - hoodti.com",
      achievements: [
        "Built a full-stack e-commerce platform with React & Supabase, role-based authentication, and a real-time admin dashboard for managing fashion products."
      ]
    },
    {
      title: "Backend Developer",
      company: "Educational Platform",
      achievements: [
        "Engineered Edu-Plat, a full-featured multilingual LMS with role-based dashboards, content delivery, quizzes, payments, and QR-based login."
      ]
    },
    {
      title: "Backend Developer",
      company: "Ektashef",
      achievements: [
        "Developed Ektashef, a Django-based bilingual tourism guide for Egypt with user auth, interactive maps, search, and admin content control."
      ]
    },
    {
      title: "Frontend Developer",
      company: "Wang Team Website",
      achievements: [
        "Designed Wang Team Website, a project portfolio site for a water desalination solution using HTML, Bootstrap, and animation libraries for a polished UI."
      ]
    },
  ];

  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-primary border-b pb-2">Professional Experience</h2>
        <div className="space-y-2">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              title={exp.title}
              company={exp.company}
              achievements={exp.achievements}
            />
          ))}
        </div>
        <h2 className="text-md font-bold text-primary mt-6 mb-4">Visit mina-emad.com for more projects.</h2>
      </div>
    </section>
  );
};

export default Experience;


interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "TailwindCSS", "Bootstrap", "Shadcn UI", "Framer Motion", "Redux", "React Router", "React Query", "React Hook Form"]
    },
    {
      title: "Backend Development",
      skills: ["Supabase", "Python", "Django", "RESTful APIs"]
    },
    {
      title: "Authentication & Security",
      skills: ["Clerk Authentication", "Role-based access control", "Data encryption", "Input validation"]
    },
    {
      title: "UI/UX",
      skills: ["Responsive design", "Animation libraries", "Dark/Light theme", "Interactive elements"]
    },
    {
      title: "Tools & Deployment",
      skills: ["Git", "Netlify", "PythonAnywhere", "Vite", "npm", "CodeSandbox"]
    },
    {
      title: "Database",
      skills: ["Supabase DB", "SQLite", "Database optimization", "Connection pooling"]
    },
    {
      title: "Additional Skills",
      skills: ["Multilingual development", "PDF generation", "Data visualization", "Form validation", "Google Maps API", "AI Integration"]
    },
    {
      title: "Languages",
      skills: ["Arabic - Native", "English - C1" , "German - A2"]
    }
  ];

  return (
    <section className="py-6 bg-muted">
      <div className="container mx-auto">
        {/* <h2 className="text-2xl font-bold mb-6 text-primary border-b pb-2">Technical Skills</h2> */}
        <h2 className="text-2xl font-bold mb-6 text-primary border-b pb-2">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={index} 
              title={category.title} 
              skills={category.skills} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

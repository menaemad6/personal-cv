
interface ExperienceItemProps {
  title: string;
  company: string;
  achievements: string[];
}

const ExperienceItem = ({ title, company, achievements }: ExperienceItemProps) => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold">{title}</h3>
      <h4 className="text-lg text-primary mb-2">{company}</h4>
      <ul className="list-disc pl-5 space-y-1">
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
      company: "Hootdi Online Store",
      achievements: [
        "Developed a modern e-commerce platform with React, TypeScript, and Supabase",
        "Implemented secure user authentication and role-based access control",
        "Created responsive product catalog with filtering and search capabilities",
        "Built comprehensive admin dashboard for inventory and order management",
        "Integrated secure payment processing and delivery slot scheduling system"
      ]
    },
    {
      title: "Lead Developer",
      company: "Es3af",
      achievements: [
        "Engineered an AI-powered medical assistant using React, TypeScript, and Google Gemini API",
        "Implemented multi-language support (English/Arabic) with structured medical explanations",
        "Developed secure authentication via Clerk and chat management functionality",
        "Created interactive chat interface with image upload capability",
        "Built PDF export functionality for medical conversations"
      ]
    },
    {
      title: "Web Developer",
      company: "Wang Team Website",
      achievements: [
        "Designed and developed a responsive single-page website showcasing water desalination project",
        "Created interactive image gallery highlighting project development process",
        "Implemented smooth animations and transitions using WOW.js and Animate CSS",
        "Built team member profiles with social media integration",
        "Optimized mobile-friendly navigation with hamburger menu"
      ]
    },
    {
      title: "Web Developer",
      company: "Ektashef",
      achievements: [
        "Built comprehensive tourist guide platform using Django and Python",
        "Implemented user authentication system and profile management",
        "Created interactive site browsing with search capabilities",
        "Integrated map functionality for location visualization",
        "Developed bilingual support (Arabic/English) and responsive design"
      ]
    },
    {
      title: "Portfolio Developer",
      company: "Bero Joseph Photography",
      achievements: [
        "Designed professional photography portfolio with responsive single-page layout",
        "Implemented dynamic hero slider showcase with animations",
        "Created portfolio gallery with image previews using Magnific Popup",
        "Built animated counters for statistics and achievements",
        "Integrated contact form for client inquiries and social media integration"
      ]
    }
  ];

  return (
    <section className="py-6">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-primary border-b pb-2">Professional Experience</h2>
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            title={exp.title}
            company={exp.company}
            achievements={exp.achievements}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;

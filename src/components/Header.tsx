
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Header = () => {
  return (
    <div className="bg-primary text-white p-8 rounded-b-lg shadow-md">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Mena Emad Nasef</h1>
        <h2 className="text-xl md:text-2xl mb-4">Full Stack Developer</h2>
        <p className="text-lg max-w-3xl mb-6">
          From building simple HTML pages at 14 to developing full-stack AI-powered platforms by 17, 
          my web development career has been driven by purpose and passion. First-year Computer Science 
          student with 3+ years of experience delivering solutions using React, TypeScript, Django, and more.
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center">
            <Mail className="w-5 h-5 mr-2" />
            <span>menaemad@example.com</span>
          </div>
          <div className="flex items-center">
            <Phone className="w-5 h-5 mr-2" />
            <span>+20 123-456-7890</span>
          </div>
          <div className="flex items-center">
            <Github className="w-5 h-5 mr-2" />
            <span>github.com/menaemad</span>
          </div>
          <div className="flex items-center">
            <Linkedin className="w-5 h-5 mr-2" />
            <span>linkedin.com/in/menaemad</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

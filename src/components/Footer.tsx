
const Footer = () => {
  return (
    <footer className="bg-primary text-white py-4 print:hidden">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Mena Emad Nasef. All rights reserved.</p>
        <p className="text-sm mt-1">ATS-Optimized Professional CV</p>
      </div>
    </footer>
  );
};

export default Footer;

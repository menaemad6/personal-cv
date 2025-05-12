
import Header from "@/components/Header";
import Summary from "@/components/Summary";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import PrintButton from "@/components/PrintButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="cv-container max-w-[1100px] mx-auto bg-white shadow-lg print:shadow-none">
        <Header />
        <div className="p-6 md:p-8">
          <Summary />
          <Experience />
          <Skills />
          <Education />
        </div>
      </div>
      <Footer />
      <PrintButton />
    </div>
  );
};

export default Index;

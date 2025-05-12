
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrintButton = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed bottom-6 right-6 print:hidden">
      <Button 
        onClick={handlePrint} 
        className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2 shadow-lg"
      >
        <Download className="h-4 w-4" /> Download CV
      </Button>
    </div>
  );
};

export default PrintButton;

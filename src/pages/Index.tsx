import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-2xl mx-auto p-6">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          Student Portal
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Your gateway to academic excellence and feedback
        </p>
        <Link to="/feedback">
          <Button className="bg-gradient-glow hover:shadow-glow transition-all duration-300 transform hover:scale-[1.02] text-white font-semibold px-8 py-3 text-lg">
            Submit Feedback
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;

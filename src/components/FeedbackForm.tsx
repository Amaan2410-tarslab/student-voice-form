import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const FeedbackForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    studentName: "",
    username: "",
    mobileNumber: "",
    gmailId: "",
    suggestions: "",
    bugReport: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.studentName || !formData.username || !formData.gmailId) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    toast({
      title: "Feedback Submitted!",
      description: "Thanks for your feedback! You're helping us improve the student experience.",
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        studentName: "",
        username: "",
        mobileNumber: "",
        gmailId: "",
        suggestions: "",
        bugReport: "",
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-gradient-card border-input-border backdrop-blur-sm">
          <CardContent className="pt-8 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Thank You!
              </h2>
              <p className="text-muted-foreground">
                Thanks for your feedback! You're helping us improve the student experience.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-gradient-card border-input-border backdrop-blur-sm shadow-glow">
        <CardHeader className="text-center pb-8">
          <CardTitle className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
            Student Feedback Portal
          </CardTitle>
          <p className="text-lg text-muted-foreground">
            Your voice shapes our platform
          </p>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="studentName" className="text-foreground font-medium">
                  Name of Student *
                </Label>
                <Input
                  id="studentName"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleInputChange}
                  className="feedback-input"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="username" className="text-foreground font-medium">
                  Username *
                </Label>
                <Input
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="feedback-input"
                  placeholder="Enter your username"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="mobileNumber" className="text-foreground font-medium">
                  Mobile Number
                </Label>
                <Input
                  id="mobileNumber"
                  name="mobileNumber"
                  type="tel"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  className="feedback-input"
                  placeholder="Enter your mobile number"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="gmailId" className="text-foreground font-medium">
                  Gmail ID *
                </Label>
                <Input
                  id="gmailId"
                  name="gmailId"
                  type="email"
                  value={formData.gmailId}
                  onChange={handleInputChange}
                  className="feedback-input"
                  placeholder="Enter your email address"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="suggestions" className="text-foreground font-medium">
                Suggestions
              </Label>
              <Textarea
                id="suggestions"
                name="suggestions"
                value={formData.suggestions}
                onChange={handleInputChange}
                className="feedback-textarea"
                placeholder="Share your suggestions to help us improve..."
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bugReport" className="text-foreground font-medium">
                Any Bug or Problem
              </Label>
              <Textarea
                id="bugReport"
                name="bugReport"
                value={formData.bugReport}
                onChange={handleInputChange}
                className="feedback-textarea"
                placeholder="Report any bugs or issues you've encountered..."
                rows={4}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-glow hover:shadow-glow transition-all duration-300 transform hover:scale-[1.02] text-white font-semibold py-3 text-lg"
            >
              Submit Feedback
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeedbackForm;
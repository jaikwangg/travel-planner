import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { User } from "lucide-react";

interface Guide {
  id: string;
  name: string;
  languages: string[];
  experience: string;
  pricePerDay: number;
}

const guides: Guide[] = [
  {
    id: "1",
    name: "Sophie Martin",
    languages: ["English", "French", "Spanish"],
    experience: "8 years",
    pricePerDay: 150,
  },
  {
    id: "2",
    name: "Marco Rossi",
    languages: ["English", "Italian", "German"],
    experience: "5 years",
    pricePerDay: 120,
  },
  {
    id: "3",
    name: "Yuki Tanaka",
    languages: ["English", "Japanese", "Mandarin"],
    experience: "6 years",
    pricePerDay: 130,
  },
];

const GuidesPage = () => {
  const [selectedGuide, setSelectedGuide] = useState<string>("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!selectedGuide) {
      toast.error("Please select a guide");
      return;
    }
    toast.success("Guide selected successfully!");
    navigate("/summary");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 animate-fade-up">
        <div className="flex items-center justify-center mb-8">
          <User className="h-12 w-12 text-secondary" />
        </div>
        <h1 className="text-3xl font-bold text-center mb-8 text-primary">Choose Your Guide</h1>
        
        <div className="space-y-4">
          {guides.map((guide) => (
            <div
              key={guide.id}
              className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                selectedGuide === guide.id
                  ? "border-secondary bg-secondary/5"
                  : "border-gray-200 hover:border-secondary"
              }`}
              onClick={() => setSelectedGuide(guide.id)}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">{guide.name}</h3>
                  <p className="text-sm text-gray-600">
                    Languages: {guide.languages.join(", ")}
                  </p>
                  <p className="text-sm text-gray-500">Experience: {guide.experience}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg">${guide.pricePerDay}</p>
                  <p className="text-sm text-gray-600">per day</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button
            onClick={handleContinue}
            className="bg-secondary hover:bg-secondary/90 text-white px-8 py-2"
          >
            Continue to Summary
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GuidesPage;
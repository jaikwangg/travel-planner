import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Activity } from "lucide-react";

interface ActivityOption {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
}

const activities: ActivityOption[] = [
  {
    id: "1",
    name: "City Walking Tour",
    description: "Explore the city's historic landmarks and hidden gems",
    duration: "3 hours",
    price: 49,
  },
  {
    id: "2",
    name: "Cooking Class",
    description: "Learn to cook local specialties with expert chefs",
    duration: "4 hours",
    price: 89,
  },
  {
    id: "3",
    name: "Wine Tasting",
    description: "Sample local wines with professional sommeliers",
    duration: "2 hours",
    price: 69,
  },
];

const ActivitiesPage = () => {
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const navigate = useNavigate();

  const toggleActivity = (id: string) => {
    setSelectedActivities((prev) =>
      prev.includes(id)
        ? prev.filter((actId) => actId !== id)
        : [...prev, id]
    );
  };

  const handleContinue = () => {
    if (selectedActivities.length === 0) {
      toast.error("Please select at least one activity");
      return;
    }
    toast.success("Activities selected successfully!");
    navigate("/restaurants");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 animate-fade-up">
        <div className="flex items-center justify-center mb-8">
          <Activity className="h-12 w-12 text-secondary" />
        </div>
        <h1 className="text-3xl font-bold text-center mb-8 text-primary">Choose Your Activities</h1>
        
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                selectedActivities.includes(activity.id)
                  ? "border-secondary bg-secondary/5"
                  : "border-gray-200 hover:border-secondary"
              }`}
              onClick={() => toggleActivity(activity.id)}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">{activity.name}</h3>
                  <p className="text-sm text-gray-600">{activity.description}</p>
                  <p className="text-sm text-gray-500">Duration: {activity.duration}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg">${activity.price}</p>
                  <p className="text-sm text-gray-600">per person</p>
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
            Continue to Restaurants
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesPage;
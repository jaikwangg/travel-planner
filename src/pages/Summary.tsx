import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { FileText } from "lucide-react";

const SummaryPage = () => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    toast.success("Booking confirmed! Thank you for choosing our service.");
    navigate("/");
  };

  // In a real app, this data would come from a global state or API
  const mockBookingData = {
    flight: {
      airline: "SkyWings",
      price: 299,
    },
    activities: [
      { name: "City Walking Tour", price: 49 },
      { name: "Wine Tasting", price: 69 },
    ],
    restaurants: [
      { name: "La Maison", priceRange: "$$$" },
    ],
    guide: {
      name: "Sophie Martin",
      pricePerDay: 150,
      days: 3,
    },
  };

  const calculateTotal = () => {
    const flightCost = mockBookingData.flight.price;
    const activitiesCost = mockBookingData.activities.reduce((sum, act) => sum + act.price, 0);
    const guideCost = mockBookingData.guide.pricePerDay * mockBookingData.guide.days;
    return flightCost + activitiesCost + guideCost;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 animate-fade-up">
        <div className="flex items-center justify-center mb-8">
          <FileText className="h-12 w-12 text-secondary" />
        </div>
        <h1 className="text-3xl font-bold text-center mb-8 text-primary">Trip Summary</h1>
        
        <div className="space-y-6">
          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold mb-2">Flight</h2>
            <p className="text-gray-600">
              {mockBookingData.flight.airline} - ${mockBookingData.flight.price}
            </p>
          </div>

          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold mb-2">Activities</h2>
            {mockBookingData.activities.map((activity, index) => (
              <p key={index} className="text-gray-600">
                {activity.name} - ${activity.price}
              </p>
            ))}
          </div>

          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold mb-2">Restaurants</h2>
            {mockBookingData.restaurants.map((restaurant, index) => (
              <p key={index} className="text-gray-600">
                {restaurant.name} - {restaurant.priceRange}
              </p>
            ))}
          </div>

          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold mb-2">Guide</h2>
            <p className="text-gray-600">
              {mockBookingData.guide.name} - ${mockBookingData.guide.pricePerDay} x {mockBookingData.guide.days} days
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-2xl font-bold">Total Cost: ${calculateTotal()}</h2>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Button
            onClick={handleConfirm}
            className="bg-secondary hover:bg-secondary/90 text-white px-8 py-2"
          >
            Confirm Booking
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;
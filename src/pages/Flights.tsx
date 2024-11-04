import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Plane } from "lucide-react";

interface Flight {
  id: string;
  airline: string;
  departure: string;
  arrival: string;
  price: number;
}

const flights: Flight[] = [
  {
    id: "1",
    airline: "SkyWings",
    departure: "10:00 AM",
    arrival: "2:00 PM",
    price: 299,
  },
  {
    id: "2",
    airline: "AirGlobe",
    departure: "2:30 PM",
    arrival: "6:30 PM",
    price: 349,
  },
  {
    id: "3",
    airline: "StarJet",
    departure: "7:00 PM",
    arrival: "11:00 PM",
    price: 279,
  },
];

const FlightsPage = () => {
  const [selectedFlight, setSelectedFlight] = useState<string>("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!selectedFlight) {
      toast.error("Please select a flight");
      return;
    }
    toast.success("Flight selected successfully!");
    navigate("/activities");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 animate-fade-up">
        <div className="flex items-center justify-center mb-8">
          <Plane className="h-12 w-12 text-secondary" />
        </div>
        <h1 className="text-3xl font-bold text-center mb-8 text-primary">Select Your Flight</h1>
        
        <div className="space-y-4">
          {flights.map((flight) => (
            <div
              key={flight.id}
              className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                selectedFlight === flight.id
                  ? "border-secondary bg-secondary/5"
                  : "border-gray-200 hover:border-secondary"
              }`}
              onClick={() => setSelectedFlight(flight.id)}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">{flight.airline}</h3>
                  <p className="text-sm text-gray-600">
                    Departure: {flight.departure} - Arrival: {flight.arrival}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg">${flight.price}</p>
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
            Continue to Activities
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FlightsPage;
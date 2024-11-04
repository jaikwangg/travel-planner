import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const destinations = [
  "France",
  "Italy",
  "Spain",
  "Japan",
  "Thailand",
  "Australia",
  "Brazil",
  "Canada",
];

const CalendarPage = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [destination, setDestination] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!date || !destination) {
      toast.error("Please select both date and destination");
      return;
    }
    navigate("/flights");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 animate-fade-up">
        <div className="flex items-center justify-center mb-8">
          <CalendarIcon className="h-12 w-12 text-secondary" />
        </div>
        <h1 className="text-3xl font-bold text-center mb-8 text-primary">Plan Your Journey</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">Select Travel Date</h2>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
              disabled={(date) => date < new Date()}
            />
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">Choose Destination</h2>
            <Select value={destination} onValueChange={setDestination}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent>
                {destinations.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-2">Selected Details:</h3>
              <p className="text-gray-600">
                Date: {date?.toLocaleDateString() || "Not selected"}
              </p>
              <p className="text-gray-600">
                Destination: {destination || "Not selected"}
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex justify-center">
          <Button
            onClick={handleContinue}
            className="bg-secondary hover:bg-secondary/90 text-white px-8 py-2"
          >
            Continue to Flights
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
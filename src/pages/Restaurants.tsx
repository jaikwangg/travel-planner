import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Utensils } from "lucide-react";

interface RestaurantOption {
  id: string;
  name: string;
  cuisine: string;
  priceRange: string;
  rating: number;
}

const restaurants: RestaurantOption[] = [
  {
    id: "1",
    name: "La Maison",
    cuisine: "French",
    priceRange: "$$$",
    rating: 4.8,
  },
  {
    id: "2",
    name: "Sakura",
    cuisine: "Japanese",
    priceRange: "$$",
    rating: 4.6,
  },
  {
    id: "3",
    name: "Trattoria",
    cuisine: "Italian",
    priceRange: "$$",
    rating: 4.7,
  },
];

const RestaurantsPage = () => {
  const [selectedRestaurants, setSelectedRestaurants] = useState<string[]>([]);
  const navigate = useNavigate();

  const toggleRestaurant = (id: string) => {
    setSelectedRestaurants((prev) =>
      prev.includes(id)
        ? prev.filter((restId) => restId !== id)
        : [...prev, id]
    );
  };

  const handleContinue = () => {
    if (selectedRestaurants.length === 0) {
      toast.error("Please select at least one restaurant");
      return;
    }
    toast.success("Restaurants selected successfully!");
    navigate("/guides");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 animate-fade-up">
        <div className="flex items-center justify-center mb-8">
          <Utensils className="h-12 w-12 text-secondary" />
        </div>
        <h1 className="text-3xl font-bold text-center mb-8 text-primary">Select Restaurants</h1>
        
        <div className="space-y-4">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                selectedRestaurants.includes(restaurant.id)
                  ? "border-secondary bg-secondary/5"
                  : "border-gray-200 hover:border-secondary"
              }`}
              onClick={() => toggleRestaurant(restaurant.id)}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">{restaurant.name}</h3>
                  <p className="text-sm text-gray-600">{restaurant.cuisine} Cuisine</p>
                  <p className="text-sm text-gray-500">Price Range: {restaurant.priceRange}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg">★ {restaurant.rating}</p>
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
            Continue to Guide Selection
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantsPage;
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sprout, MapPin, Cloud, Tractor } from "lucide-react";

const CropSuggestions = () => {
  const [location, setLocation] = useState("");
  const [soilType, setSoilType] = useState("");
  const [showResults, setShowResults] = useState(false);

  const mockSuggestions = [
    {
      crop: "Rice",
      suitability: "95%",
      expectedYield: "45-50 quintals/hectare",
      marketDemand: "High",
      reason: "Perfect for alluvial soil and monsoon season",
      icon: <Sprout className="h-8 w-8 text-primary" />
    },
    {
      crop: "Wheat",
      suitability: "88%",
      expectedYield: "40-45 quintals/hectare",
      marketDemand: "Very High",
      reason: "Excellent winter crop for your soil type",
      icon: <Tractor className="h-8 w-8 text-primary" />
    },
    {
      crop: "Sugarcane",
      suitability: "85%",
      expectedYield: "800-900 quintals/hectare",
      marketDemand: "Medium",
      reason: "Good irrigation availability in your area",
      icon: <Sprout className="h-8 w-8 text-primary" />
    }
  ];

  const handleSubmit = () => {
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-text-hero mb-4">
              AI-Powered Crop Suggestions
            </h1>
            <p className="text-lg text-text-muted">
              Get personalized crop recommendations based on your location, soil, and market conditions
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Enter Your Farm Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <Input
                    placeholder="Enter your district/state"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Soil Type</label>
                  <Select value={soilType} onValueChange={setSoilType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select soil type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="alluvial">Alluvial Soil</SelectItem>
                      <SelectItem value="black">Black Soil</SelectItem>
                      <SelectItem value="red">Red Soil</SelectItem>
                      <SelectItem value="laterite">Laterite Soil</SelectItem>
                      <SelectItem value="sandy">Sandy Soil</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button 
                onClick={handleSubmit} 
                className="w-full bg-primary hover:bg-primary-hover"
                disabled={!location || !soilType}
              >
                Get AI Recommendations
              </Button>
            </CardContent>
          </Card>

          {showResults && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-text-hero mb-6">
                Recommended Crops for Your Farm
              </h2>
              
              <div className="grid gap-6">
                {mockSuggestions.map((suggestion, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          {suggestion.icon}
                          <div>
                            <h3 className="text-xl font-semibold text-text-hero mb-2">
                              {suggestion.crop}
                            </h3>
                            <p className="text-text-muted mb-4">{suggestion.reason}</p>
                            
                            <div className="grid md:grid-cols-3 gap-4 text-sm">
                              <div>
                                <span className="font-medium">Suitability:</span>
                                <span className="text-primary ml-1">{suggestion.suitability}</span>
                              </div>
                              <div>
                                <span className="font-medium">Expected Yield:</span>
                                <span className="text-text-muted ml-1">{suggestion.expectedYield}</span>
                              </div>
                              <div>
                                <span className="font-medium">Market Demand:</span>
                                <span className="text-primary ml-1">{suggestion.marketDemand}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-2xl font-bold text-stats-accent">
                            {suggestion.suitability}
                          </div>
                          <div className="text-sm text-text-muted">Match</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CropSuggestions;
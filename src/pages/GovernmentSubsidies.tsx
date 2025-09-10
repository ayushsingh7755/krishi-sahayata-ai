import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { IndianRupee, ExternalLink, Award, Users } from "lucide-react";

const GovernmentSubsidies = () => {
  const [landSize, setLandSize] = useState("");
  const [cropType, setCropType] = useState("");
  const [showResults, setShowResults] = useState(false);

  const mockSubsidies = [
    {
      name: "PM-KISAN Scheme",
      amount: "₹6,000 per year",
      eligibility: "All farmers with cultivable land",
      description: "Direct income support to farmer families",
      applicationLink: "https://pmkisan.gov.in/",
      status: "Open",
      category: "Income Support"
    },
    {
      name: "Soil Health Card Scheme",
      amount: "₹100 per card",
      eligibility: "All farmers",
      description: "Free soil testing and health card",
      applicationLink: "https://soilhealth.dac.gov.in/",
      status: "Open",
      category: "Soil Testing"
    },
    {
      name: "Pradhan Mantri Fasal Bima Yojana",
      amount: "Up to ₹2,00,000 coverage",
      eligibility: "Farmers growing notified crops",
      description: "Crop insurance against natural calamities",
      applicationLink: "https://pmfby.gov.in/",
      status: "Open",
      category: "Insurance"
    },
    {
      name: "Kisan Credit Card",
      amount: "Up to ₹3,00,000 loan",
      eligibility: "All farmers",
      description: "Easy credit facility for agriculture needs",
      applicationLink: "https://www.india.gov.in/spotlight/kisan-credit-card-farmers",
      status: "Open",
      category: "Credit"
    },
    {
      name: "Organic Farming Subsidy",
      amount: "50% of input cost",
      eligibility: "Farmers adopting organic practices",
      description: "Support for organic farming transition",
      applicationLink: "https://pgsindia-ncof.gov.in/",
      status: "Open",
      category: "Organic Farming"
    }
  ];

  const handleSubmit = () => {
    setShowResults(true);
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Income Support": "bg-blue-100 text-blue-800",
      "Soil Testing": "bg-green-100 text-green-800",
      "Insurance": "bg-purple-100 text-purple-800",
      "Credit": "bg-orange-100 text-orange-800",
      "Organic Farming": "bg-emerald-100 text-emerald-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-text-hero mb-4">
              Government Subsidies & Schemes
            </h1>
            <p className="text-lg text-text-muted">
              Discover eligible government subsidies and apply with direct links
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Check Your Eligibility
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Land Size (in acres)</label>
                  <Input
                    placeholder="Enter your land size"
                    type="number"
                    value={landSize}
                    onChange={(e) => setLandSize(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Primary Crop</label>
                  <Select value={cropType} onValueChange={setCropType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select primary crop" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rice">Rice</SelectItem>
                      <SelectItem value="wheat">Wheat</SelectItem>
                      <SelectItem value="sugarcane">Sugarcane</SelectItem>
                      <SelectItem value="cotton">Cotton</SelectItem>
                      <SelectItem value="vegetables">Vegetables</SelectItem>
                      <SelectItem value="fruits">Fruits</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button 
                onClick={handleSubmit} 
                className="w-full bg-primary hover:bg-primary-hover"
                disabled={!landSize || !cropType}
              >
                Find Available Subsidies
              </Button>
            </CardContent>
          </Card>

          {showResults && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-text-hero">
                  Available Subsidies for You
                </h2>
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <Users className="h-4 w-4" />
                  {mockSubsidies.length} schemes found
                </div>
              </div>
              
              <div className="grid gap-6">
                {mockSubsidies.map((subsidy, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold text-text-hero">
                              {subsidy.name}
                            </h3>
                            <Badge className={getCategoryColor(subsidy.category)}>
                              {subsidy.category}
                            </Badge>
                          </div>
                          <p className="text-text-muted mb-3">{subsidy.description}</p>
                        </div>
                        
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-lg font-bold text-stats-accent">
                            <IndianRupee className="h-4 w-4" />
                            {subsidy.amount.replace('₹', '')}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <span className="text-sm font-medium text-text-hero">Eligibility: </span>
                          <span className="text-sm text-text-muted">{subsidy.eligibility}</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            {subsidy.status}
                          </Badge>
                          
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="flex items-center gap-2"
                            onClick={() => window.open(subsidy.applicationLink, '_blank')}
                          >
                            Apply Now
                            <ExternalLink className="h-4 w-4" />
                          </Button>
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

export default GovernmentSubsidies;
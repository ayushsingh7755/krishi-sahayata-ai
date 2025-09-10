import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calendar, Droplets, Sprout, Play, ExternalLink } from "lucide-react";

const CropLearning = () => {
  const [selectedCrop, setSelectedCrop] = useState("");
  const [showDetails, setShowDetails] = useState(false);

  const cropData = {
    rice: {
      name: "Rice",
      scientificName: "Oryza sativa",
      season: "Kharif (June - October)",
      duration: "120-140 days",
      details: {
        soilRequirements: "Clay loam to silty clay, pH 6.0-7.5",
        climateRequirements: "Temperature: 21-37°C, Rainfall: 1000-2000mm",
        sowingTime: "June-July (Monsoon), November-December (Winter)",
        seeds: ["Basmati 370", "IR64", "Pusa Basmati 1121", "Swarna"],
        fertilizers: [
          "NPK 120:60:40 kg/hectare",
          "Urea: 3 split doses",
          "Phosphorus: At sowing",
          "Potash: 2 split doses"
        ],
        irrigation: [
          "Keep 2-5cm standing water during vegetative stage",
          "Drain field 10 days before harvest",
          "Total water requirement: 1200-1500mm"
        ],
        majorPests: ["Brown Plant Hopper", "Rice Stem Borer", "Rice Blast"],
        expectedYield: "40-50 quintals per hectare"
      },
      videos: [
        {
          title: "Complete Rice Farming Guide",
          duration: "15:30",
          channel: "Krishi Jagran",
          url: "https://youtube.com/watch?v=example1"
        },
        {
          title: "Modern Rice Transplanting Techniques",
          duration: "12:45",
          channel: "Agriculture Today",
          url: "https://youtube.com/watch?v=example2"
        },
        {
          title: "Rice Disease Management",
          duration: "18:20",
          channel: "ICAR",
          url: "https://youtube.com/watch?v=example3"
        }
      ]
    },
    wheat: {
      name: "Wheat",
      scientificName: "Triticum aestivum",
      season: "Rabi (October - April)",
      duration: "120-150 days",
      details: {
        soilRequirements: "Well-drained loamy soil, pH 6.0-7.5",
        climateRequirements: "Temperature: 15-25°C, Rainfall: 300-400mm",
        sowingTime: "October-December",
        seeds: ["HD-2967", "PBW-550", "DBW-88", "HD-3086"],
        fertilizers: [
          "NPK 120:60:40 kg/hectare",
          "Nitrogen in 3 splits",
          "Full P and K at sowing"
        ],
        irrigation: [
          "First irrigation after 20-25 days",
          "Second at tillering stage",
          "Third at jointing stage",
          "Fourth at grain filling"
        ],
        majorPests: ["Aphids", "Termites", "Rust diseases"],
        expectedYield: "40-45 quintals per hectare"
      },
      videos: [
        {
          title: "Wheat Farming Complete Guide",
          duration: "20:15",
          channel: "Farming India",
          url: "https://youtube.com/watch?v=example4"
        },
        {
          title: "Zero Tillage Wheat Farming",
          duration: "14:30",
          channel: "Modern Farming",
          url: "https://youtube.com/watch?v=example5"
        }
      ]
    },
    tomato: {
      name: "Tomato",
      scientificName: "Solanum lycopersicum",
      season: "Year-round (protected cultivation)",
      duration: "90-120 days",
      details: {
        soilRequirements: "Well-drained sandy loam, pH 6.0-7.0",
        climateRequirements: "Temperature: 18-29°C, Moderate humidity",
        sowingTime: "July-August, October-November",
        seeds: ["Arka Rakshak", "Pusa Ruby", "Himsona", "Better Boy"],
        fertilizers: [
          "NPK 180:100:100 kg/hectare",
          "Organic matter: 20-25 tons/hectare",
          "Weekly liquid fertilizer during fruiting"
        ],
        irrigation: [
          "Drip irrigation recommended",
          "Daily water requirement: 4-5mm",
          "Avoid water stress during flowering"
        ],
        majorPests: ["Whitefly", "Fruit Borer", "Early Blight"],
        expectedYield: "400-500 quintals per hectare"
      },
      videos: [
        {
          title: "Tomato Farming from Seed to Harvest",
          duration: "25:40",
          channel: "Vegetable Growing",
          url: "https://youtube.com/watch?v=example6"
        },
        {
          title: "Hydroponic Tomato Production",
          duration: "16:20",
          channel: "Modern Agriculture",
          url: "https://youtube.com/watch?v=example7"
        }
      ]
    }
  };

  const handleCropSelect = (crop: string) => {
    setSelectedCrop(crop);
    setShowDetails(true);
  };

  const crops = ["rice", "wheat", "tomato"];
  const currentCrop = selectedCrop ? cropData[selectedCrop as keyof typeof cropData] : null;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-text-hero mb-4">
              Crop Learning Center
            </h1>
            <p className="text-lg text-text-muted">
              Comprehensive information and video resources for successful crop cultivation
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Select a Crop to Learn
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={selectedCrop} onValueChange={handleCropSelect}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose a crop to get complete cultivation guide" />
                </SelectTrigger>
                <SelectContent>
                  {crops.map((crop) => (
                    <SelectItem key={crop} value={crop}>
                      {cropData[crop as keyof typeof cropData].name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {showDetails && currentCrop && (
            <div className="space-y-8">
              {/* Crop Overview */}
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl text-text-hero mb-2">
                        {currentCrop.name}
                      </CardTitle>
                      <p className="text-text-muted italic">{currentCrop.scientificName}</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-primary/10 text-primary mb-2">
                        {currentCrop.season}
                      </Badge>
                      <div className="text-sm text-text-muted">{currentCrop.duration}</div>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              {/* Detailed Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Sprout className="h-5 w-5" />
                      Growing Requirements
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-text-hero mb-2">Soil Requirements</h4>
                      <p className="text-sm text-text-muted">{currentCrop.details.soilRequirements}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-text-hero mb-2">Climate Requirements</h4>
                      <p className="text-sm text-text-muted">{currentCrop.details.climateRequirements}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-text-hero mb-2">Expected Yield</h4>
                      <p className="text-sm font-medium text-stats-accent">{currentCrop.details.expectedYield}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Calendar className="h-5 w-5" />
                      Sowing & Seeds
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-text-hero mb-2">Best Sowing Time</h4>
                      <p className="text-sm text-text-muted">{currentCrop.details.sowingTime}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-text-hero mb-2">Recommended Seeds</h4>
                      <div className="flex flex-wrap gap-1">
                        {currentCrop.details.seeds.map((seed, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {seed}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Sprout className="h-5 w-5" />
                      Fertilizer Schedule
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {currentCrop.details.fertilizers.map((fertilizer, index) => (
                        <li key={index} className="text-sm text-text-muted flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                          {fertilizer}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Droplets className="h-5 w-5" />
                      Irrigation Guide
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {currentCrop.details.irrigation.map((irrigation, index) => (
                        <li key={index} className="text-sm text-text-muted flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                          {irrigation}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Video Resources */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Play className="h-5 w-5" />
                    Video Learning Resources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-1 gap-4">
                    {currentCrop.videos.map((video, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Play className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium text-text-hero">{video.title}</h4>
                            <p className="text-sm text-text-muted">
                              {video.channel} • {video.duration}
                            </p>
                          </div>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => window.open(video.url, '_blank')}
                          className="flex items-center gap-2"
                        >
                          Watch
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CropLearning;
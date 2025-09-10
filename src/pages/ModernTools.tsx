import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star, ShoppingCart, Tractor, Smartphone, Droplets, Zap } from "lucide-react";

const ModernTools = () => {
  const toolCategories = [
    {
      title: "Smart Irrigation",
      description: "Water-efficient irrigation solutions",
      icon: <Droplets className="h-6 w-6" />,
      tools: [
        {
          name: "Drip Irrigation Kit",
          description: "Complete drip irrigation system for 1 acre",
          price: "₹25,000",
          rating: 4.5,
          vendor: "Netafim India",
          link: "https://example.com/drip-kit",
          features: ["Water saving up to 50%", "Automated timer", "Easy installation"]
        },
        {
          name: "Smart Sprinkler System",
          description: "IoT-enabled sprinkler with mobile control",
          price: "₹15,000",
          rating: 4.3,
          vendor: "Rain Bird",
          link: "https://example.com/sprinkler",
          features: ["Mobile app control", "Weather based automation", "Zone management"]
        }
      ]
    },
    {
      title: "Farm Machinery",
      description: "Modern farming equipment and tools",
      icon: <Tractor className="h-6 w-6" />,
      tools: [
        {
          name: "Mini Tractor 25HP",
          description: "Compact tractor for small to medium farms",
          price: "₹4,50,000",
          rating: 4.7,
          vendor: "Mahindra",
          link: "https://example.com/tractor",
          features: ["Fuel efficient", "Easy maintenance", "Multi-purpose use"]
        },
        {
          name: "Power Tiller",
          description: "Versatile power tiller for land preparation",
          price: "₹85,000",
          rating: 4.4,
          vendor: "VST Tillers",
          link: "https://example.com/tiller",
          features: ["Multiple attachments", "Low maintenance", "High performance"]
        }
      ]
    },
    {
      title: "Smart Monitoring",
      description: "IoT devices for crop and soil monitoring",
      icon: <Smartphone className="h-6 w-6" />,
      tools: [
        {
          name: "Soil Sensor Kit",
          description: "Wireless soil moisture and pH monitoring",
          price: "₹8,000",
          rating: 4.6,
          vendor: "CropIn",
          link: "https://example.com/soil-sensor",
          features: ["Real-time monitoring", "Mobile alerts", "Cloud data storage"]
        },
        {
          name: "Weather Station",
          description: "Personal weather monitoring station",
          price: "₹12,000",
          rating: 4.2,
          vendor: "Davis Instruments",
          link: "https://example.com/weather-station",
          features: ["Accurate forecasting", "Historical data", "API integration"]
        }
      ]
    },
    {
      title: "Solar Solutions",
      description: "Renewable energy solutions for farms",
      icon: <Zap className="h-6 w-6" />,
      tools: [
        {
          name: "Solar Water Pump",
          description: "3HP solar powered water pump system",
          price: "₹1,20,000",
          rating: 4.5,
          vendor: "Lubi Solar",
          link: "https://example.com/solar-pump",
          features: ["No electricity bills", "25 years warranty", "Government subsidy available"]
        },
        {
          name: "Solar Fence Energizer",
          description: "Solar powered electric fence system",
          price: "₹18,000",
          rating: 4.3,
          vendor: "Gallagher",
          link: "https://example.com/solar-fence",
          features: ["Crop protection", "Low maintenance", "Animal friendly"]
        }
      ]
    }
  ];

  const techniques = [
    {
      title: "Precision Agriculture",
      description: "Use GPS and IoT sensors to optimize crop yields and reduce waste",
      benefits: ["30% increase in yield", "25% reduction in inputs", "Better crop quality"]
    },
    {
      title: "Vertical Farming",
      description: "Grow crops in vertically stacked layers to maximize space utilization",
      benefits: ["90% less water usage", "Year-round production", "No pesticides needed"]
    },
    {
      title: "Hydroponics",
      description: "Soil-less farming technique using nutrient-rich water solutions",
      benefits: ["Faster growth", "Higher yields", "Disease resistance"]
    },
    {
      title: "Organic Farming",
      description: "Sustainable farming without synthetic chemicals and fertilizers",
      benefits: ["Better soil health", "Premium market prices", "Environmental friendly"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-text-hero mb-4">
              Modern Farming Tools & Techniques
            </h1>
            <p className="text-lg text-text-muted">
              Discover cutting-edge farming equipment and innovative techniques to boost your productivity
            </p>
          </div>

          {/* Modern Techniques Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-text-hero mb-6">Innovative Farming Techniques</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {techniques.map((technique, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle className="text-lg">{technique.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text-muted mb-4">{technique.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm text-text-hero">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {technique.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm text-text-muted flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Tools Section */}
          <div className="space-y-12">
            <h2 className="text-2xl font-bold text-text-hero">Recommended Tools & Equipment</h2>
            
            {toolCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-hero">{category.title}</h3>
                    <p className="text-text-muted">{category.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {category.tools.map((tool, toolIndex) => (
                    <Card key={toolIndex} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="text-lg font-semibold text-text-hero mb-1">{tool.name}</h4>
                            <p className="text-text-muted text-sm mb-2">{tool.description}</p>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm font-medium">{tool.rating}</span>
                              </div>
                              <Badge variant="secondary" className="text-xs">
                                {tool.vendor}
                              </Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-stats-accent">{tool.price}</div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <h5 className="text-sm font-medium text-text-hero mb-2">Key Features:</h5>
                            <ul className="space-y-1">
                              {tool.features.map((feature, idx) => (
                                <li key={idx} className="text-sm text-text-muted flex items-center gap-2">
                                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex gap-2">
                            <Button 
                              className="flex-1 bg-primary hover:bg-primary-hover"
                              onClick={() => window.open(tool.link, '_blank')}
                            >
                              <ShoppingCart className="h-4 w-4 mr-2" />
                              Buy Now
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => window.open(tool.link, '_blank')}
                            >
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ModernTools;
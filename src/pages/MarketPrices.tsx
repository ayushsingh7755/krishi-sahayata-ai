import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Minus, IndianRupee, Calendar } from "lucide-react";

const MarketPrices = () => {
  const mockPrices = [
    {
      crop: "Rice (Basmati)",
      currentPrice: "₹3,200",
      previousPrice: "₹3,000",
      trend: "up",
      change: "+6.7%",
      predictedPrice: "₹3,400",
      market: "Delhi Mandi",
      date: "Today"
    },
    {
      crop: "Wheat",
      currentPrice: "₹2,150",
      previousPrice: "₹2,200",
      trend: "down",
      change: "-2.3%",
      predictedPrice: "₹2,100",
      market: "Punjab Mandi",
      date: "Today"
    },
    {
      crop: "Sugarcane",
      currentPrice: "₹350",
      previousPrice: "₹350",
      trend: "stable",
      change: "0%",
      predictedPrice: "₹360",
      market: "UP Mandi",
      date: "Today"
    },
    {
      crop: "Cotton",
      currentPrice: "₹5,800",
      previousPrice: "₹5,600",
      trend: "up",
      change: "+3.6%",
      predictedPrice: "₹6,000",
      market: "Gujarat Mandi",
      date: "Today"
    },
    {
      crop: "Tomato",
      currentPrice: "₹45",
      previousPrice: "₹55",
      trend: "down",
      change: "-18.2%",
      predictedPrice: "₹40",
      market: "Local Market",
      date: "Today"
    },
    {
      crop: "Onion",
      currentPrice: "₹28",
      previousPrice: "₹25",
      trend: "up",
      change: "+12%",
      predictedPrice: "₹32",
      market: "Maharashtra Mandi",
      date: "Today"
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-green-600" />;
      case "down":
        return <TrendingDown className="h-4 w-4 text-red-600" />;
      default:
        return <Minus className="h-4 w-4 text-gray-600" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "up":
        return "text-green-600 bg-green-50 border-green-200";
      case "down":
        return "text-red-600 bg-red-50 border-red-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-text-hero mb-4">
              Live Market Prices & Predictions
            </h1>
            <p className="text-lg text-text-muted">
              Real-time crop prices and AI-powered market predictions to help you make profitable decisions
            </p>
          </div>

          <div className="mb-8">
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <Card className="bg-feature-bg">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-stats-accent mb-1">150+</div>
                  <div className="text-sm text-text-muted">Markets Tracked</div>
                </CardContent>
              </Card>
              <Card className="bg-feature-bg">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-stats-accent mb-1">50+</div>
                  <div className="text-sm text-text-muted">Crops Monitored</div>
                </CardContent>
              </Card>
              <Card className="bg-feature-bg">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-stats-accent mb-1">95%</div>
                  <div className="text-sm text-text-muted">Prediction Accuracy</div>
                </CardContent>
              </Card>
              <Card className="bg-feature-bg">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-stats-accent mb-1">Real-time</div>
                  <div className="text-sm text-text-muted">Price Updates</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="text-sm text-text-muted">Last updated: {new Date().toLocaleString()}</span>
            </div>

            <div className="grid gap-6">
              {mockPrices.map((price, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-6 gap-4 items-center">
                      <div className="md:col-span-2">
                        <h3 className="text-lg font-semibold text-text-hero mb-1">
                          {price.crop}
                        </h3>
                        <p className="text-sm text-text-muted">{price.market}</p>
                      </div>

                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 text-xl font-bold text-text-hero mb-1">
                          <IndianRupee className="h-4 w-4" />
                          {price.currentPrice.replace('₹', '')}
                        </div>
                        <div className="text-xs text-text-muted">per quintal</div>
                      </div>

                      <div className="text-center">
                        <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full border text-sm font-medium ${getTrendColor(price.trend)}`}>
                          {getTrendIcon(price.trend)}
                          {price.change}
                        </div>
                        <div className="text-xs text-text-muted mt-1">vs yesterday</div>
                      </div>

                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 text-lg font-semibold text-primary mb-1">
                          <IndianRupee className="h-4 w-4" />
                          {price.predictedPrice.replace('₹', '')}
                        </div>
                        <div className="text-xs text-text-muted">predicted</div>
                      </div>

                      <div className="text-center">
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {price.date}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="mt-8 bg-primary/5 border-primary/20">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-text-hero mb-2">
                💡 Pro Tip
              </h3>
              <p className="text-text-muted">
                Our AI analyzes weather patterns, demand-supply data, and historical trends to predict prices 7 days ahead. 
                Use these insights to time your sales for maximum profit!
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default MarketPrices;
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/agriculture-hero.jpg";
import { 
  Sprout, 
  Award, 
  TrendingUp, 
  Wrench, 
  BookOpen, 
  Star,
  Users,
  ArrowRight
} from "lucide-react";

const Index = () => {
  const features = [
    {
      title: "Crop Suggestions",
      description: "AI-powered recommendations based on your location, soil, and market demand",
      icon: <Sprout className="h-8 w-8" />,
      link: "/crop-suggestions",
      color: "text-green-600"
    },
    {
      title: "Government Subsidies",
      description: "Find and apply for relevant subsidies with simple eligibility checks",
      icon: <Award className="h-8 w-8" />,
      link: "/subsidies",
      color: "text-blue-600"
    },
    {
      title: "Market Prices",
      description: "Real-time crop prices and AI predictions for profitable decisions",
      icon: <TrendingUp className="h-8 w-8" />,
      link: "/market-prices",
      color: "text-purple-600"
    },
    {
      title: "Modern Tools",
      description: "Discover latest farming equipment and innovative techniques",
      icon: <Wrench className="h-8 w-8" />,
      link: "/tools",
      color: "text-orange-600"
    },
    {
      title: "Crop Learning",
      description: "Complete cultivation guides with video resources for any crop",
      icon: <BookOpen className="h-8 w-8" />,
      link: "/learning",
      color: "text-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-text-hero mb-6">
              Put farmers{" "}
              <span className="relative">
                first
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary"></div>
              </span>
            </h1>
            <p className="text-lg text-text-muted mb-8 leading-relaxed">
              AI-powered agriculture advisory platform designed for Indian farmers. 
              Get personalized crop recommendations, government subsidy information, 
              and market insights to maximize your farm's profitability.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-hover text-primary-foreground px-8"
                asChild
              >
                <Link to="/crop-suggestions">Get Started</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Modern agriculture technology illustration showing mobile apps and farming tools"
              className="w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text-hero mb-4">
            Complete Agricultural Advisory Platform
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Everything you need to make informed decisions and maximize your farm's potential
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className={`inline-flex p-4 rounded-full bg-primary/10 ${feature.color} mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-text-hero mb-4">
                  {feature.title}
                </h3>
                <p className="text-text-muted mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <Link to={feature.link} className="flex items-center justify-center gap-2">
                    Explore
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;

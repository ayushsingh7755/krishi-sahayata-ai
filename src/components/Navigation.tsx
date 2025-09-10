import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sprout } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { label: "Crop Suggestions", path: "/crop-suggestions" },
    { label: "Subsidies", path: "/subsidies" },
    { label: "Market Prices", path: "/market-prices" },
    { label: "Tools", path: "/tools" },
    { label: "Learning", path: "/learning" },
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-background border-b border-border">
      <Link to="/" className="flex items-center gap-2 text-xl font-bold text-foreground">
        <Sprout className="h-6 w-6 text-primary" />
        FarmAI
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === item.path
                ? "text-primary"
                : "text-muted-foreground"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <Button variant="default" className="bg-primary hover:bg-primary-hover text-primary-foreground">
        Get Started
      </Button>
    </nav>
  );
};

export default Navigation;
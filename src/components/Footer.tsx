import { Link } from "react-router-dom";
import { Sprout, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/" },
    { label: "Contact", path: "/contact" },
    { label: "Control Panel", path: "http://10.88.32.209", external: true },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold text-foreground justify-center md:justify-start mb-4">
              <Sprout className="h-6 w-6 text-primary" />
              FarmAI
            </Link>
            <p className="text-text-muted text-sm">
              Empowering farmers with AI-powered agricultural solutions for a sustainable future.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="font-semibold text-text-hero mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.label}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.path}
                    className="text-text-muted hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-right">
            <h3 className="font-semibold text-text-hero mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-text-muted text-sm">
            © 2025 FarmAI. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
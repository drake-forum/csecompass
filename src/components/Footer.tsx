import { Link } from "react-router-dom";

const footerLinks = {
  "Quick Links": [
    { label: "Resources", href: "/resources" },
    { label: "Roadmaps", href: "/roadmaps" },
    { label: "Events", href: "/events" },
    { label: "Blog", href: "/blog" }
  ],
  "Community": [
    { label: "Join Discord", href: "/community" },
    { label: "Contribute", href: "/contact" },
    { label: "Feedback", href: "/contact" },
    { label: "Support", href: "/contact" }
  ],
  "Company": [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" }
  ]
};

const socialLinks = [
  { name: "Discord", icon: "💬", href: "https://discord.gg/SMZFvwu7MC" },
  { name: "Twitter", icon: "🐦", href: "#" },
  { name: "GitHub", icon: "🐱", href: "#" },
  { name: "LinkedIn", icon: "💼", href: "#" }
];

export function Footer() {
  return (
    <footer className="bg-card/30 border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-3">
              <img 
                src="/lovable-uploads/8e1acd5d-6e78-499b-b1aa-150c7554e856.png" 
                alt="CSE Compass Logo" 
                className="w-6 h-6"
              />
              <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent">
                CSE Compass
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4 max-w-sm">
              Your comprehensive guide to mastering Computer Science & Engineering.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-8 h-8 bg-background border border-border rounded-md flex items-center justify-center hover:border-primary/50 transition-colors group"
                  title={social.name}
                >
                  <span className="text-sm group-hover:scale-110 transition-transform">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-foreground mb-3 text-sm">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks["Quick Links"].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-xs"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-medium text-foreground mb-3 text-sm">Company</h3>
            <ul className="space-y-2">
              {footerLinks["Company"].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-xs"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-6 pt-4 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-muted-foreground text-xs">
            © 2024 CSE Compass. Made with Absolute Hate for developers.
          </p>
          <div className="flex items-center space-x-4 mt-2 sm:mt-0">
            <span className="text-xs text-muted-foreground">Open Source (not)</span>
            <span className="text-xs text-muted-foreground">90% Free</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

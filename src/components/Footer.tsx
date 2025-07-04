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
  { name: "Discord", icon: "💬", href: "#" },
  { name: "Twitter", icon: "🐦", href: "#" },
  { name: "GitHub", icon: "🐱", href: "#" },
  { name: "LinkedIn", icon: "💼", href: "#" }
];

export function Footer() {
  return (
    <footer className="bg-card/30 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent-purple rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold text-background">C</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent">
                CSE Compass
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Your comprehensive guide to mastering Computer Science & Engineering. Curated resources, clear roadmaps, and an amazing community.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center hover:border-primary/50 transition-colors group"
                  title={social.name}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">
            © 2024 CSE Compass. Made with ❤️ for the developer community.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-sm text-muted-foreground">
              Open Source
            </span>
            <span className="text-sm text-muted-foreground">
              100% Free
            </span>
            <span className="text-sm text-muted-foreground">
              Community Driven
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
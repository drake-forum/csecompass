import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const contactMethods = [
  {
    title: "General Inquiries",
    description: "Questions about CSE Compass, partnerships, or general feedback",
    email: "hello@csecompass.dev",
    icon: "📧"
  },
  {
    title: "Resource Submission",
    description: "Submit new resources, courses, or learning materials",
    email: "resources@csecompass.dev", 
    icon: "📚"
  },
  {
    title: "Community & Events",
    description: "Community partnerships, event collaborations, or speaking opportunities",
    email: "community@csecompass.dev",
    icon: "🤝"
  },
  {
    title: "Technical Support",
    description: "Bug reports, feature requests, or technical assistance",
    email: "support@csecompass.dev",
    icon: "🔧"
  }
];

const socialLinks = [
  { name: "Discord", url: "#", icon: "💬", color: "text-indigo-400" },
  { name: "Twitter", url: "#", icon: "🐦", color: "text-blue-400" },
  { name: "LinkedIn", url: "#", icon: "💼", color: "text-blue-600" },
  { name: "GitHub", url: "#", icon: "🐱", color: "text-gray-400" },
  { name: "YouTube", url: "#", icon: "📺", color: "text-red-400" }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions, suggestions, or want to collaborate? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="resources">Resource Submission</option>
                      <option value="community">Community & Events</option>
                      <option value="technical">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground resize-vertical"
                      placeholder="Tell us about your inquiry, feedback, or how we can help..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-accent-purple hover:from-primary/80 hover:to-accent-purple/80"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-lg">Quick Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-lg mt-1">{method.icon}</span>
                    <div>
                      <h4 className="font-medium text-foreground">{method.title}</h4>
                      <p className="text-sm text-muted-foreground mb-1">{method.description}</p>
                      <a 
                        href={`mailto:${method.email}`}
                        className="text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        {method.email}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-lg">Follow Us</CardTitle>
                <CardDescription>
                  Stay connected for updates and community discussions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="flex items-center space-x-2 p-3 bg-background border border-border rounded-lg hover:border-primary/50 transition-all duration-300 group"
                    >
                      <span className="text-lg">{social.icon}</span>
                      <span className="text-sm group-hover:text-primary transition-colors">{social.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-lg">Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">General Inquiries:</span>
                    <span className="text-foreground font-medium">24 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Technical Support:</span>
                    <span className="text-foreground font-medium">48 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Partnerships:</span>
                    <span className="text-foreground font-medium">3-5 days</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <Card className="bg-gradient-card backdrop-blur-sm border-border max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">How can I submit a resource?</h4>
                  <p className="text-sm text-muted-foreground">Use the contact form with "Resource Submission" as the subject, or email us directly at resources@csecompass.dev</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Is CSE Compass free to use?</h4>
                  <p className="text-sm text-muted-foreground">Yes! CSE Compass is completely free. Our mission is to make quality tech education accessible to everyone.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Can I contribute to the project?</h4>
                  <p className="text-sm text-muted-foreground">Absolutely! We welcome contributions. Contact us to learn about volunteer opportunities and how you can help.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Do you offer mentorship programs?</h4>
                  <p className="text-sm text-muted-foreground">We're working on mentorship initiatives. Join our community to stay updated on upcoming programs.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
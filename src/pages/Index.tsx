import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const featuredCategories = [
  {
    title: "Data Structures & Algorithms",
    description: "Master the fundamentals with curated problems and explanations",
    icon: "🔍",
    color: "from-primary to-accent-green",
    resources: "500+ Problems"
  },
  {
    title: "Web Development",
    description: "Full-stack development with modern frameworks and tools",
    icon: "🌐",
    color: "from-accent-purple to-primary",
    resources: "50+ Tutorials"
  },
  {
    title: "Machine Learning & AI",
    description: "Start your AI journey with practical projects and theory",
    icon: "🤖",
    color: "from-accent-green to-accent-purple",
    resources: "30+ Courses"
  },
  {
    title: "Cybersecurity",
    description: "Learn ethical hacking and security best practices",
    icon: "🔒",
    color: "from-red-500 to-primary",
    resources: "25+ Labs"
  },
  {
    title: "Cloud & DevOps",
    description: "Master cloud platforms and deployment strategies",
    icon: "☁️",
    color: "from-blue-500 to-accent-green",
    resources: "40+ Guides"
  },
  {
    title: "Mobile Development",
    description: "Build native and cross-platform mobile applications",
    icon: "📱",
    color: "from-accent-purple to-accent-green",
    resources: "35+ Projects"
  }
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Engineer at Google",
    content: "CSE Compass helped me navigate my learning journey efficiently. The curated roadmaps saved me months of confusion!",
    avatar: "SC"
  },
  {
    name: "Alex Kumar",
    role: "Full-Stack Developer",
    content: "The resource quality here is unmatched. Every recommendation has been valuable for my career growth.",
    avatar: "AK"
  },
  {
    name: "Maria Rodriguez",
    role: "ML Engineer at Tesla",
    content: "Found my passion for machine learning through CSE Compass. The learning paths are incredibly well-structured.",
    avatar: "MR"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent-purple to-accent-green bg-clip-text text-transparent leading-tight">
              Your Roadmap to<br />Tech Mastery Starts Here
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
              Discover curated resources, interactive roadmaps, and join a community of passionate developers. Navigate your CSE journey with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/resources">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent-purple hover:from-primary/80 hover:to-accent-purple/80 text-lg px-8 py-4 shadow-neon">
                  Explore Resources
                </Button>
              </Link>
              <Link to="/community">
                <Button variant="outline" size="lg" className="border-primary/30 hover:border-primary text-lg px-8 py-4">
                  Join the Community
                </Button>
              </Link>
            </div>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-glow"></span>
                <span>10,000+ Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-accent-green rounded-full animate-glow"></span>
                <span>500+ Resources</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-accent-purple rounded-full animate-glow"></span>
                <span>25+ Tech Domains</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Explore Tech Domains</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From fundamentals to advanced topics, find everything you need to excel in your chosen field
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCategories.map((category, index) => (
              <Link key={index} to="/resources" className="group">
                <Card className="bg-gradient-card backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow h-full group-hover:scale-105">
                  <CardHeader>
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:animate-float`}>
                      <span className="text-2xl">{category.icon}</span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline" className="border-primary/20 text-primary">
                      {category.resources}
                    </Badge>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Why Choose CSE Compass?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to succeed in your computer science journey, all in one place
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border text-center hover:shadow-glow transition-all duration-300">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Curated Quality</h3>
                <p className="text-sm text-muted-foreground">Hand-picked resources from industry experts and top educators</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-border text-center hover:shadow-glow transition-all duration-300">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent-green text-2xl">🗺️</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Clear Roadmaps</h3>
                <p className="text-sm text-muted-foreground">Step-by-step learning paths for every tech domain</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-border text-center hover:shadow-glow transition-all duration-300">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-accent-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent-purple text-2xl">🤝</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Active Community</h3>
                <p className="text-sm text-muted-foreground">Connect with peers, mentors, and industry professionals</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-border text-center hover:shadow-glow transition-all duration-300">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-400 text-2xl">🆓</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Completely Free</h3>
                <p className="text-sm text-muted-foreground">No hidden costs, no subscriptions. Education should be accessible</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">What Students Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of students who've accelerated their learning with CSE Compass
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card backdrop-blur-sm border-border hover:shadow-glow transition-all duration-300">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent-purple rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-background">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Ready to Start Your Journey?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already using CSE Compass to accelerate their learning and build amazing careers in tech.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/resources">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent-purple hover:from-primary/80 hover:to-accent-purple/80 text-lg px-8 py-4 shadow-neon">
                Start Learning Now
              </Button>
            </Link>
            <Link to="/roadmaps">
              <Button variant="outline" size="lg" className="border-primary/30 hover:border-primary text-lg px-8 py-4">
                View Roadmaps
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const categories = [
  "All",
  "DSA",
  "Web Dev",
  "App Dev", 
  "Cyber Security",
  "AI/ML",
  "Cloud & DevOps",
  "Automation",
  "Competitive Coding",
  "System Design",
  "Blockchain"
];

const resources = [
  {
    id: 1,
    title: "Data Structures & Algorithms Roadmap",
    description: "Complete roadmap for mastering DSA with curated resources and practice problems.",
    category: "DSA",
    type: "Roadmap",
    resources: ["LeetCode", "GeeksforGeeks", "Striver SDE Sheet"],
    featured: true
  },
  {
    id: 2,
    title: "Full Stack Web Development",
    description: "Learn React, Node.js, MongoDB and build real-world projects.",
    category: "Web Dev",
    type: "Course",
    resources: ["FreeCodeCamp", "The Odin Project", "MDN Docs"],
    featured: true
  },
  {
    id: 3,
    title: "Machine Learning Fundamentals",
    description: "Start your AI/ML journey with Python, scikit-learn, and TensorFlow.",
    category: "AI/ML",
    type: "Course",
    resources: ["Coursera", "Kaggle Learn", "Fast.ai"],
    featured: false
  },
  {
    id: 4,
    title: "Cybersecurity Essentials",
    description: "Learn ethical hacking, network security, and penetration testing.",
    category: "Cyber Security",
    type: "Roadmap",
    resources: ["TryHackMe", "HackTheBox", "OWASP"],
    featured: false
  },
  {
    id: 5,
    title: "React Native Mobile Development",
    description: "Build cross-platform mobile apps using React Native and Expo.",
    category: "App Dev",
    type: "Tutorial",
    resources: ["React Native Docs", "Expo", "YouTube"],
    featured: false
  },
  {
    id: 6,
    title: "AWS Cloud Computing",
    description: "Master cloud services with AWS fundamentals and hands-on projects.",
    category: "Cloud & DevOps",
    type: "Course",
    resources: ["AWS Training", "Cloud Guru", "YouTube"],
    featured: true
  }
];

export default function Resources() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === "All" || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent">
            Explore Learning Paths
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover curated resources, roadmaps, and tools across different CSE domains
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-primary hover:bg-primary/90" : "border-primary/20 hover:border-primary"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <Card key={resource.id} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge 
                    variant="secondary" 
                    className={`${resource.featured ? 'bg-primary/20 text-primary' : 'bg-accent-purple/20 text-accent-purple'}`}
                  >
                    {resource.type}
                  </Badge>
                  {resource.featured && (
                    <Badge className="bg-accent-green/20 text-accent-green">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {resource.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {resource.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-2">Resources include:</p>
                  <div className="flex flex-wrap gap-1">
                    {resource.resources.map((res, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-border">
                        {res}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Link to={`/resources/${resource.id}`}>
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-accent-purple hover:from-primary/80 hover:to-accent-purple/80"
                    size="sm"
                  >
                    Explore Resources
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No resources found matching your criteria.</p>
            <p className="text-muted-foreground mt-2">Try adjusting your search or category filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}
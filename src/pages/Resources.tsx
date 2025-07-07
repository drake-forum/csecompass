import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";

type Resource = Tables<"resources">;

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


export default function Resources() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchResources() {
      const { data, error } = await supabase
        .from("resources")
        .select("*")
        .order("featured", { ascending: false })
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching resources:", error);
      } else {
        setResources(data || []);
      }
      setLoading(false);
    }

    fetchResources();
  }, []);

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === "All" || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-background pt-20 pb-12 flex items-center justify-center">
        <div className="text-center">Loading resources...</div>
      </div>
    );
  }

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
                  {resource.difficulty && (
                    <Badge variant="outline" className="border-border">
                      {resource.difficulty}
                    </Badge>
                  )}
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
                {resource.resources && resource.resources.length > 0 && (
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
                )}
                {resource.tags && resource.tags.length > 0 && (
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-2">Tags:</p>
                    <div className="flex flex-wrap gap-1">
                      {resource.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs bg-accent-purple/20 text-accent-purple">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
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
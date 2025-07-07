import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";

type Roadmap = Tables<"roadmaps">;


const getDifficultyColor = (difficulty: string) => {
  if (difficulty.includes("beginner")) return "bg-accent-green/20 text-accent-green";
  if (difficulty.includes("intermediate")) return "bg-primary/20 text-primary";
  return "bg-accent-purple/20 text-accent-purple";
};

export default function Roadmaps() {
  const [roadmaps, setRoadmaps] = useState<Roadmap[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRoadmaps() {
      const { data, error } = await supabase
        .from("roadmaps")
        .select("*")
        .order("featured", { ascending: false })
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching roadmaps:", error);
      } else {
        setRoadmaps(data || []);
      }
      setLoading(false);
    }

    fetchRoadmaps();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background pt-20 pb-12 flex items-center justify-center">
        <div className="text-center">Loading roadmaps...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent">
            Interactive Roadmaps
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Visual learning paths to guide your journey in different tech domains
          </p>
        </div>

        {/* Featured Roadmaps */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Featured Roadmaps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roadmaps.filter(roadmap => roadmap.featured).map((roadmap) => (
              <Card key={roadmap.id} className="bg-gradient-card backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-accent-purple/20 rounded-bl-full" />
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-accent-green/20 text-accent-green">
                      Featured
                    </Badge>
                    <Badge className={getDifficultyColor(roadmap.difficulty)}>
                      {roadmap.difficulty.charAt(0).toUpperCase() + roadmap.difficulty.slice(1)}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {roadmap.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {roadmap.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {roadmap.technologies && roadmap.technologies.length > 0 && (
                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground mb-2">Technologies:</p>
                      <div className="flex flex-wrap gap-1">
                        {roadmap.technologies.map((tech, index) => (
                          <Badge key={index} variant="outline" className="text-xs border-border">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>Duration: {roadmap.duration || 'Self-paced'}</span>
                  </div>
                  <div className="flex gap-2">
                    <Link to={`/roadmaps/${roadmap.id}`}>
                      <Button 
                        className="flex-1 bg-gradient-to-r from-primary to-accent-purple hover:from-primary/80 hover:to-accent-purple/80"
                        size="sm"
                      >
                        View Roadmap
                      </Button>
                    </Link>
                    {roadmap.download_url ? (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-primary/20 hover:border-primary"
                        onClick={() => window.open(roadmap.download_url!, '_blank')}
                      >
                        Download
                      </Button>
                    ) : (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-primary/20 hover:border-primary opacity-50 cursor-not-allowed"
                        disabled
                      >
                        Download
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Roadmaps */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-foreground">All Roadmaps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roadmaps.filter(roadmap => !roadmap.featured).map((roadmap) => (
              <Card key={roadmap.id} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getDifficultyColor(roadmap.difficulty)}>
                      {roadmap.difficulty.charAt(0).toUpperCase() + roadmap.difficulty.slice(1)}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {roadmap.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {roadmap.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {roadmap.technologies && roadmap.technologies.length > 0 && (
                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground mb-2">Technologies:</p>
                      <div className="flex flex-wrap gap-1">
                        {roadmap.technologies.map((tech, index) => (
                          <Badge key={index} variant="outline" className="text-xs border-border">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>Duration: {roadmap.duration || 'Self-paced'}</span>
                  </div>
                  <div className="flex gap-2">
                    <Link to={`/roadmaps/${roadmap.id}`}>
                      <Button 
                        className="flex-1 bg-gradient-to-r from-primary to-accent-purple hover:from-primary/80 hover:to-accent-purple/80"
                        size="sm"
                      >
                        View Roadmap
                      </Button>
                    </Link>
                    {roadmap.download_url ? (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-primary/20 hover:border-primary"
                        onClick={() => window.open(roadmap.download_url!, '_blank')}
                      >
                        Download
                      </Button>
                    ) : (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-primary/20 hover:border-primary opacity-50 cursor-not-allowed"
                        disabled
                      >
                        Download
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Interactive Features Coming Soon */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-card backdrop-blur-sm border-border max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-xl">Interactive Features Coming Soon</CardTitle>
              <CardDescription>
                We're working on interactive roadmap viewers with zoom functionality, progress tracking, and downloadable formats.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="bg-gradient-to-r from-primary to-accent-purple hover:from-primary/80 hover:to-accent-purple/80">
                Get Notified
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Download, Clock, Trophy } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";

type Roadmap = Tables<"roadmaps">;

const getDifficultyColor = (difficulty: string) => {
  if (difficulty.includes("beginner")) return "bg-accent-green/20 text-accent-green";
  if (difficulty.includes("intermediate")) return "bg-primary/20 text-primary";
  return "bg-accent-purple/20 text-accent-purple";
};

export default function RoadmapDetail() {
  const { id } = useParams();
  const [roadmap, setRoadmap] = useState<Roadmap | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRoadmap() {
      if (!id) return;
      
      const { data, error } = await supabase
        .from("roadmaps")
        .select("*")
        .eq("id", id)
        .maybeSingle();

      if (error) {
        console.error("Error fetching roadmap:", error);
      } else {
        setRoadmap(data);
      }
      setLoading(false);
    }

    fetchRoadmap();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background pt-20 pb-12 flex items-center justify-center">
        <div className="text-center">Loading roadmap details...</div>
      </div>
    );
  }

  if (!roadmap) {
    return (
      <div className="min-h-screen bg-background pt-20 pb-12 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Roadmap Not Found</h1>
          <Link to="/roadmaps">
            <Button>Back to Roadmaps</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link to="/roadmaps">
            <Button variant="outline" size="sm" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Roadmaps
            </Button>
          </Link>
        </div>

        <Card className="bg-gradient-card backdrop-blur-sm border-border">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-2">
                <Badge className={getDifficultyColor(roadmap.difficulty)}>
                  {roadmap.difficulty}
                </Badge>
                {roadmap.featured && (
                  <Badge className="bg-accent-green/20 text-accent-green">
                    <Trophy className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                )}
              </div>
            </div>
            <CardTitle className="text-3xl font-bold text-foreground mb-4">
              {roadmap.title}
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              {roadmap.description}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Duration
                </h3>
                <p className="text-muted-foreground">{roadmap.duration || 'Self-paced'}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Difficulty Level</h3>
                <Badge className={getDifficultyColor(roadmap.difficulty)} variant="outline">
                  {roadmap.difficulty.charAt(0).toUpperCase() + roadmap.difficulty.slice(1)}
                </Badge>
              </div>
            </div>

            {roadmap.technologies && roadmap.technologies.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Technologies & Skills:</h3>
                <div className="flex flex-wrap gap-2">
                  {roadmap.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="border-primary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {roadmap.tags && roadmap.tags.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {roadmap.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-accent-purple/20 text-accent-purple">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-card/30 rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold mb-4">Roadmap Overview</h3>
              <p className="text-muted-foreground mb-4">
                This comprehensive {roadmap.difficulty} level roadmap covers all essential topics and practical skills needed to master the field. 
                Follow the structured path and build real-world projects to solidify your understanding.
              </p>
              <div className="bg-gradient-to-r from-primary/10 to-accent-purple/10 rounded-lg p-4 border border-primary/20">
                <p className="text-sm text-muted-foreground">
                  💡 <strong>Pro Tip:</strong> Take your time with each section. Practice regularly and build projects 
                  to reinforce your learning. The journey is as important as the destination!
                </p>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              {roadmap.roadmap_url && (
                <Button 
                  className="bg-gradient-to-r from-primary to-accent-purple hover:from-primary/80 hover:to-accent-purple/80"
                  onClick={() => window.open(roadmap.roadmap_url!, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Interactive Roadmap
                </Button>
              )}
              {roadmap.download_url && (
                <Button 
                  variant="outline" 
                  className="border-primary/20 hover:border-primary"
                  onClick={() => window.open(roadmap.download_url!, '_blank')}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              )}
              {!roadmap.download_url && (
                <Button 
                  variant="outline" 
                  className="border-primary/20 hover:border-primary"
                  onClick={() => {
                    // Create and download a text file with roadmap info
                    const content = `${roadmap.title}\n\n${roadmap.description}\n\nDifficulty: ${roadmap.difficulty}\nDuration: ${roadmap.duration || 'Self-paced'}\n\nTechnologies: ${roadmap.technologies?.join(', ') || 'N/A'}\n\nRoadmap URL: ${roadmap.roadmap_url || 'N/A'}`;
                    const blob = new Blob([content], { type: 'text/plain' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `${roadmap.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_roadmap.txt`;
                    a.click();
                    URL.revokeObjectURL(url);
                  }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Info
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
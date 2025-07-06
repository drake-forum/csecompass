import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Download } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";

type Resource = Tables<"resources">;

export default function ResourceDetail() {
  const { id } = useParams();
  const [resource, setResource] = useState<Resource | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchResource() {
      if (!id) return;
      
      const { data, error } = await supabase
        .from("resources")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching resource:", error);
      } else {
        setResource(data);
      }
      setLoading(false);
    }

    fetchResource();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background pt-20 pb-12 flex items-center justify-center">
        <div className="text-center">Loading resource details...</div>
      </div>
    );
  }

  if (!resource) {
    return (
      <div className="min-h-screen bg-background pt-20 pb-12 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Resource Not Found</h1>
          <Link to="/resources">
            <Button>Back to Resources</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link to="/resources">
            <Button variant="outline" size="sm" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Resources
            </Button>
          </Link>
        </div>

        <Card className="bg-gradient-card backdrop-blur-sm border-border">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-2">
                <Badge variant="secondary" className="bg-primary/20 text-primary">
                  {resource.type}
                </Badge>
                <Badge variant="outline" className="border-border">
                  {resource.category}
                </Badge>
                {resource.featured && (
                  <Badge className="bg-accent-green/20 text-accent-green">
                    Featured
                  </Badge>
                )}
                {resource.difficulty && (
                  <Badge variant="outline" className="border-border">
                    {resource.difficulty}
                  </Badge>
                )}
              </div>
            </div>
            <CardTitle className="text-3xl font-bold text-foreground mb-4">
              {resource.title}
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              {resource.description}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {resource.resources && resource.resources.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Included Resources:</h3>
                <div className="flex flex-wrap gap-2">
                  {resource.resources.map((res, index) => (
                    <Badge key={index} variant="outline" className="border-primary/20">
                      {res}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {resource.tags && resource.tags.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {resource.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-accent-purple/20 text-accent-purple">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-4 pt-6">
              {resource.url && (
                <Button 
                  className="bg-gradient-to-r from-primary to-accent-purple hover:from-primary/80 hover:to-accent-purple/80"
                  onClick={() => window.open(resource.url!, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Access Resource
                </Button>
              )}
              <Button 
                variant="outline" 
                className="border-primary/20 hover:border-primary"
                onClick={() => {
                  // Create and download a text file with resource info
                  const content = `${resource.title}\n\n${resource.description}\n\nCategory: ${resource.category}\n\nResources: ${resource.resources?.join(', ') || 'N/A'}\n\nURL: ${resource.url || 'N/A'}`;
                  const blob = new Blob([content], { type: 'text/plain' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = `${resource.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.txt`;
                  a.click();
                  URL.revokeObjectURL(url);
                }}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Info
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const communities = [
  {
    id: 1,
    name: "CSE Compass Discord",
    description: "Official Discord server for CSE Compass community. Join discussions, share resources, and connect with fellow students.",
    members: "2.5k+",
    platform: "Discord",
    category: "Official",
    featured: true,
    tags: ["General", "Study Groups", "Career", "Projects"],
    href: "https://discord.gg/SMZFvwu7MC"
  },
  {
    id: 2,
    name: "r/cscareerquestions",
    description: "Reddit community for computer science career advice, interview prep, and industry insights.",
    members: "500k+",
    platform: "Reddit",
    category: "Career",
    featured: true,
    tags: ["Career Advice", "Interviews", "Salary", "Industry"],
    href: "https://www.reddit.com/r/cscareerquestions/"
  },
  {
    id: 3,
    name: "FreeCodeCamp Community",
    description: "Learn to code for free with millions of other students in the FreeCodeCamp community.",
    members: "1M+",
    platform: "Forum",
    category: "Learning",
    featured: true,
    tags: ["Web Development", "Certificates", "Projects", "Beginner"],
    href: "https://forum.freecodecamp.org/"
  },
  {
    id: 4,
    name: "Dev.to",
    description: "Community of developers sharing knowledge, experiences, and building their careers together.",
    members: "900k+",
    platform: "Platform",
    category: "Blogging",
    featured: false,
    tags: ["Articles", "Tutorials", "Career", "Open Source"],
    href: "https://dev.to/"
  },
  {
    id: 5,
    name: "Stack Overflow",
    description: "The world's largest developer community for asking and answering coding questions.",
    members: "50M+",
    platform: "Q&A",
    category: "Help",
    featured: false,
    tags: ["Q&A", "Debugging", "Code Help", "Documentation"],
    href: "https://stackoverflow.com/questions"
  },
  {
    id: 6,
    name: "GitHub Community",
    description: "Connect with developers worldwide, contribute to open source, and showcase your projects.",
    members: "100M+",
    platform: "GitHub",
    category: "Open Source",
    featured: false,
    tags: ["Open Source", "Collaboration", "Portfolio", "Projects"],
    href: "https://github.com/community/community"
  }
];

const getPlatformColor = (platform: string) => {
  const colors: { [key: string]: string } = {
    "Discord": "bg-indigo-500/20 text-indigo-400",
    "Reddit": "bg-orange-500/20 text-orange-400",
    "Forum": "bg-accent-green/20 text-accent-green",
    "Platform": "bg-primary/20 text-primary",
    "Q&A": "bg-accent-purple/20 text-accent-purple",
    "GitHub": "bg-gray-500/20 text-gray-400"
  };
  return colors[platform] || "bg-muted/20 text-muted-foreground";
};

const getCategoryColor = (category: string) => {
  const colors: { [key: string]: string } = {
    "Official": "bg-accent-green/20 text-accent-green",
    "Career": "bg-primary/20 text-primary",
    "Learning": "bg-accent-purple/20 text-accent-purple",
    "Blogging": "bg-blue-500/20 text-blue-400",
    "Help": "bg-orange-500/20 text-orange-400",
    "Open Source": "bg-gray-500/20 text-gray-400"
  };
  return colors[category] || "bg-muted/20 text-muted-foreground";
};

export default function Community() {
  const featuredCommunities = communities.filter(community => community.featured);
  const otherCommunities = communities.filter(community => !community.featured);

  return (
    <div className="min-h-screen bg-background pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent">
            Join the Community
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with fellow developers, share knowledge, and grow together in these amazing tech communities
          </p>
        </div>

        {/* Community Guidelines */}
        <div className="mb-16">
          <Card className="bg-gradient-card backdrop-blur-sm border-border max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-xl text-center">Community Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary text-xl">🤝</span>
                  </div>
                  <h3 className="font-semibold mb-2">Be Respectful</h3>
                  <p className="text-sm text-muted-foreground">Treat everyone with kindness and respect</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-accent-green text-xl">🚀</span>
                  </div>
                  <h3 className="font-semibold mb-2">Share Knowledge</h3>
                  <p className="text-sm text-muted-foreground">Help others learn and grow together</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-accent-purple/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-accent-purple text-xl">💡</span>
                  </div>
                  <h3 className="font-semibold mb-2">Stay Curious</h3>
                  <p className="text-sm text-muted-foreground">Ask questions and embrace learning</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Communities */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-foreground">Featured Communities</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredCommunities.map((community) => (
              <Card key={community.id} className="bg-gradient-card backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/10 to-accent-purple/10 rounded-bl-full" />
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={getPlatformColor(community.platform)}>
                      {community.platform}
                    </Badge>
                    <Badge className={getCategoryColor(community.category)}>
                      {community.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {community.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {community.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">Members:</span>
                    <span className="text-sm font-semibold text-primary">{community.members}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {community.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-border">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-accent-purple hover:from-primary/80 hover:to-accent-purple/80"
                    size="sm"
                    asChild
                  >
                    <a href={community.href} target="_blank" rel="noopener noreferrer">
                      Join Community
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Communities */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-foreground">More Communities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherCommunities.map((community) => (
              <Card key={community.id} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={getPlatformColor(community.platform)}>
                      {community.platform}
                    </Badge>
                    <Badge className={getCategoryColor(community.category)}>
                      {community.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {community.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm">
                    {community.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-muted-foreground">Members:</span>
                    <span className="text-sm font-semibold text-primary">{community.members}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {community.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-border">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary/20 hover:border-primary"
                    size="sm"
                    asChild
                  >
                    <a href={community.href} target="_blank" rel="noopener noreferrer">
                      Visit Community
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Create Your Own Community */}
        <div>
          <Card className="bg-gradient-card backdrop-blur-sm border-border max-w-2xl mx-auto text-center">
            <CardHeader>
              <CardTitle className="text-2xl">Start Your Own Community</CardTitle>
              <CardDescription className="text-base">
                Have an idea for a new tech community? We'd love to help you get started and feature it here.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button className="bg-gradient-to-r from-primary to-accent-purple hover:from-primary/80 hover:to-accent-purple/80">
                  Submit Community
                </Button>
                <Button variant="outline" className="border-primary/20 hover:border-primary">
                  Community Guidelines
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

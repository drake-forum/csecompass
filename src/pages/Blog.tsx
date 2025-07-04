import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development in 2024",
    excerpt: "Exploring emerging trends, technologies, and frameworks that will shape web development this year.",
    category: "Web Dev",
    readTime: "5 min read",
    date: "Jan 15, 2024",
    featured: true,
    tags: ["React", "Next.js", "AI", "WebAssembly"]
  },
  {
    id: 2,
    title: "Master Data Structures: A Complete Guide",
    excerpt: "Everything you need to know about fundamental data structures for competitive programming and interviews.",
    category: "DSA",
    readTime: "12 min read",
    date: "Jan 12, 2024",
    featured: true,
    tags: ["Arrays", "Trees", "Graphs", "Interview Prep"]
  },
  {
    id: 3,
    title: "AI and Machine Learning Trends to Watch",
    excerpt: "Latest developments in AI/ML that every tech student should be aware of in 2024.",
    category: "AI/ML",
    readTime: "8 min read",
    date: "Jan 10, 2024",
    featured: false,
    tags: ["AI", "Machine Learning", "Trends", "Career"]
  },
  {
    id: 4,
    title: "Building Secure Applications: Security Best Practices",
    excerpt: "Essential security practices every developer should implement in their applications.",
    category: "Cyber Security",
    readTime: "10 min read",
    date: "Jan 8, 2024",
    featured: false,
    tags: ["Security", "Best Practices", "OWASP", "Development"]
  },
  {
    id: 5,
    title: "Cloud Computing for Beginners: AWS vs Azure vs GCP",
    excerpt: "Comprehensive comparison of major cloud platforms and how to choose the right one.",
    category: "Cloud & DevOps",
    readTime: "15 min read",
    date: "Jan 5, 2024",
    featured: true,
    tags: ["AWS", "Azure", "GCP", "Cloud", "Comparison"]
  }
];

const getCategoryColor = (category: string) => {
  const colors: { [key: string]: string } = {
    "Web Dev": "bg-primary/20 text-primary",
    "DSA": "bg-accent-green/20 text-accent-green",
    "AI/ML": "bg-accent-purple/20 text-accent-purple",
    "Cyber Security": "bg-red-500/20 text-red-400",
    "Cloud & DevOps": "bg-blue-500/20 text-blue-400"
  };
  return colors[category] || "bg-muted/20 text-muted-foreground";
};

export default function Blog() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent">
            Tech Insights & Updates
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest trends, tutorials, and insights from the world of technology
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-foreground">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className={`bg-gradient-card backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group ${
                  index === 0 ? 'lg:col-span-2' : ''
                }`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={getCategoryColor(post.category)}>
                      {post.category}
                    </Badge>
                    <Badge variant="outline" className="border-border">
                      Featured
                    </Badge>
                  </div>
                  <CardTitle className={`group-hover:text-primary transition-colors ${
                    index === 0 ? 'text-2xl' : 'text-xl'
                  }`}>
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-base">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs border-border">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-accent-purple hover:from-primary/80 hover:to-accent-purple/80"
                    size="sm"
                  >
                    Read Article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-foreground">Recent Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <Card key={post.id} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={getCategoryColor(post.category)}>
                      {post.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs border-border">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary/20 hover:border-primary"
                    size="sm"
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <Card className="bg-gradient-card backdrop-blur-sm border-border max-w-2xl mx-auto text-center">
            <CardHeader>
              <CardTitle className="text-2xl">Stay Updated</CardTitle>
              <CardDescription className="text-base">
                Get the latest tech insights and tutorials delivered to your inbox
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
                />
                <Button className="bg-gradient-to-r from-primary to-accent-purple hover:from-primary/80 hover:to-accent-purple/80">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const events = [
  {
    id: 1,
    title: "Google Summer of Code 2024",
    description: "Open source development program for students with mentorship from Google.",
    date: "March 18, 2024",
    deadline: "April 2, 2024",
    type: "Open Source",
    status: "Registration Open",
    location: "Remote",
    organizer: "Google",
    featured: true,
    tags: ["Open Source", "Mentorship", "Global"]
  },
  {
    id: 2,
    title: "HackMIT 2024",
    description: "MIT's premier hackathon bringing together innovators to build solutions for tomorrow.",
    date: "September 14-15, 2024",
    deadline: "August 30, 2024",
    type: "Hackathon",
    status: "Coming Soon",
    location: "MIT, Cambridge",
    organizer: "MIT",
    featured: true,
    tags: ["Hackathon", "Innovation", "Prizes"]
  },
  {
    id: 3,
    title: "CodeChef SnackDown 2024",
    description: "Global programming contest with multiple elimination rounds.",
    date: "March 25, 2024",
    deadline: "March 24, 2024",
    type: "Competitive Coding",
    status: "Registration Open",
    location: "Online",
    organizer: "CodeChef",
    featured: false,
    tags: ["Competitive Programming", "Contest", "Global"]
  },
  {
    id: 4,
    title: "AWS Cloud Resume Challenge",
    description: "Build and deploy your resume using AWS cloud services.",
    date: "Ongoing",
    deadline: "No deadline",
    type: "Challenge",
    status: "Active",
    location: "Online",
    organizer: "AWS Community",
    featured: false,
    tags: ["AWS", "Cloud", "Resume", "Portfolio"]
  },
  {
    id: 5,
    title: "TechCrunch Disrupt 2024",
    description: "The world's leading startup conference featuring the latest innovations.",
    date: "October 28-30, 2024",
    deadline: "September 15, 2024",
    type: "Conference",
    status: "Coming Soon",
    location: "San Francisco",
    organizer: "TechCrunch",
    featured: true,
    tags: ["Startups", "Innovation", "Networking"]
  },
  {
    id: 6,
    title: "Capture The Flag (CTF) Championship",
    description: "Cybersecurity competition testing penetration testing and security skills.",
    date: "April 15-16, 2024",
    deadline: "April 10, 2024",
    type: "CTF",
    status: "Registration Open",
    location: "Online",
    organizer: "CyberSec Community",
    featured: false,
    tags: ["Cybersecurity", "CTF", "Hacking", "Competition"]
  }
];

const getStatusColor = (status: string) => {
  const colors: { [key: string]: string } = {
    "Registration Open": "bg-accent-green/20 text-accent-green",
    "Coming Soon": "bg-primary/20 text-primary",
    "Active": "bg-accent-purple/20 text-accent-purple",
    "Closed": "bg-red-500/20 text-red-400"
  };
  return colors[status] || "bg-muted/20 text-muted-foreground";
};

const getTypeColor = (type: string) => {
  const colors: { [key: string]: string } = {
    "Hackathon": "bg-primary/20 text-primary",
    "Competitive Coding": "bg-accent-green/20 text-accent-green",
    "Open Source": "bg-accent-purple/20 text-accent-purple",
    "Conference": "bg-blue-500/20 text-blue-400",
    "Challenge": "bg-orange-500/20 text-orange-400",
    "CTF": "bg-red-500/20 text-red-400"
  };
  return colors[type] || "bg-muted/20 text-muted-foreground";
};

export default function Events() {
  const featuredEvents = events.filter(event => event.featured);
  const upcomingEvents = events.filter(event => !event.featured);

  return (
    <div className="min-h-screen bg-background pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent">
            Tech Events & Hackathons
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover upcoming hackathons, coding contests, conferences, and opportunities to showcase your skills
          </p>
        </div>

        {/* Featured Events */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-foreground">Featured Events</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredEvents.map((event) => (
              <Card key={event.id} className="bg-gradient-card backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-accent-purple/10 rounded-bl-full" />
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={getTypeColor(event.type)}>
                      {event.type}
                    </Badge>
                    <Badge className={getStatusColor(event.status)}>
                      {event.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Date:</span>
                      <span className="text-foreground font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Deadline:</span>
                      <span className="text-foreground font-medium">{event.deadline}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Location:</span>
                      <span className="text-foreground font-medium">{event.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Organizer:</span>
                      <span className="text-foreground font-medium">{event.organizer}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {event.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-border">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-gradient-to-r from-primary to-accent-purple hover:from-primary/80 hover:to-accent-purple/80"
                      size="sm"
                    >
                      Register Now
                    </Button>
                    <Button variant="outline" size="sm" className="border-primary/20 hover:border-primary">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-foreground">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={getTypeColor(event.type)}>
                      {event.type}
                    </Badge>
                    <Badge className={getStatusColor(event.status)}>
                      {event.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 mb-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Date:</span>
                      <span className="text-foreground font-medium text-xs">{event.date}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Location:</span>
                      <span className="text-foreground font-medium text-xs">{event.location}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {event.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-border">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary/20 hover:border-primary"
                    size="sm"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <Card className="bg-gradient-card backdrop-blur-sm border-border max-w-3xl mx-auto text-center">
            <CardHeader>
              <CardTitle className="text-2xl">Submit Your Event</CardTitle>
              <CardDescription className="text-base">
                Know about an upcoming tech event? Help the community by submitting it to our events calendar.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button className="bg-gradient-to-r from-primary to-accent-purple hover:from-primary/80 hover:to-accent-purple/80">
                  Submit Event
                </Button>
                <Button variant="outline" className="border-primary/20 hover:border-primary">
                  Event Guidelines
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Drake Forum",
    role: "Full Stack Developer",
    bio: "Passionate about creating educational platforms that empower the next generation of developers.",
    expertise: ["React", "Node.js", "UI/UX", "Education Technology"],
    avatar: "DF"
  },
  {
    name: "Bear", 
    role: "Just Bear,
    bio: "Bearing the role to code a lifeless game",
    expertise: ["Yapping", "Gosips", "Trying"],
    avatar: "B"
  },
  {
    name: "Dev Kumar",
    role: "Community Manager",
    bio: "Building bridges between students and the tech community through meaningful connections.",
    expertise: ["Community Building", "Event Management", "Student Engagement", "Networking"],
    avatar: "DK"
  }
];

const stats = [
  { number: "10,000+", label: "Students Helped" },
  { number: "500+", label: "Curated Resources" },
  { number: "50+", label: "Learning Paths" },
  { number: "25+", label: "Tech Domains" }
];

export default function About() {
  return (
    <div className="min-h-screen bg-background pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent">
            About CSE Compass
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering Computer Science & Engineering students with curated resources, clear roadmaps, and a supportive community
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gradient-card backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To democratize tech education by providing a centralized hub of high-quality, curated resources that help Computer Science & Engineering students navigate their learning journey effectively and achieve their career goals.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-accent-purple">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To become the go-to platform for CSE students worldwide, fostering a community where knowledge is shared freely, learning paths are clear, and every student has the tools they need to succeed in the tech industry.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Statistics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border text-center hover:shadow-glow transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <Card className="bg-gradient-card backdrop-blur-sm border-border max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Our Story</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                CSE Compass was born from a simple observation: Computer Science students were spending countless hours searching for quality learning resources, often feeling overwhelmed by the sheer volume of available content and unclear about which path to take.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As fellow students and developers, we experienced this challenge firsthand. We realized that what the community needed wasn't more content, but better curation, clearer guidance, and a centralized platform where students could find everything they need to succeed.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, CSE Compass serves thousands of students worldwide, providing them with carefully curated resources, interactive roadmaps, and a supportive community that celebrates learning and growth. We're proud to be part of every student's journey toward tech mastery.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-background">{member.avatar}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-accent-green font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-xl">🎯</span>
                </div>
                <h3 className="font-semibold mb-2">Quality First</h3>
                <p className="text-sm text-muted-foreground">We carefully curate only the best resources</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent-green text-xl">🤝</span>
                </div>
                <h3 className="font-semibold mb-2">Community</h3>
                <p className="text-sm text-muted-foreground">Learning is better when we do it together</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-accent-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent-purple text-xl">🚀</span>
                </div>
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">Always exploring new ways to enhance learning</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-400 text-xl">💡</span>
                </div>
                <h3 className="font-semibold mb-2">Accessibility</h3>
                <p className="text-sm text-muted-foreground">Free, high-quality education for everyone</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div>
          <Card className="bg-gradient-card backdrop-blur-sm border-border max-w-2xl mx-auto text-center">
            <CardHeader>
              <CardTitle className="text-2xl">Join Our Mission</CardTitle>
              <CardDescription className="text-base">
                Help us make tech education more accessible. Share your feedback, contribute resources, or join our community.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button className="px-6 py-2 bg-gradient-to-r from-primary to-accent-purple hover:from-primary/80 hover:to-accent-purple/80 text-background font-medium rounded-lg transition-all duration-300">
                  Get Involved
                </button>
                <button className="px-6 py-2 border border-primary/20 hover:border-primary text-foreground rounded-lg transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

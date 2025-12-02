import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Book, Music, Coffee } from "lucide-react";

const teamMembers = [
  {
    initials: "AO",
    name: "Allen Ortega",
    role: "Research Lead",
    description: "Leads the research efforts and ensures all information is accurately sourced and fact-checked.",
    selfCare: ["Morning meditation sessions", "Playing basketball on weekends", "Watching movies with family"],
    colorClass: "bg-primary/10 text-primary"
  },
  {
    initials: "EB",
    name: "Emmanuel Bautista",
    role: "Content Writer",
    description: "Crafts compelling narratives that make complex issues accessible to diverse audiences.",
    selfCare: ["Reading books before sleep", "Jogging in the morning", "Cooking healthy meals"],
    colorClass: "bg-accent/10 text-accent"
  },
  {
    initials: "JF",
    name: "James Almer Ferrer",
    role: "Data Analyst",
    description: "Analyzes trends and statistics related to corruption, providing data-driven insights.",
    selfCare: ["Playing video games", "Listening to music", "Taking short walks"],
    colorClass: "bg-primary/10 text-primary"
  },
  {
    initials: "JD",
    name: "John Patrick DelaVega",
    role: "Web Designer",
    description: "Brings creative vision to the project, designing an intuitive and engaging user experience.",
    selfCare: ["Sketching and digital art", "Watching anime series", "Playing guitar"],
    colorClass: "bg-accent/10 text-accent"
  },
  {
    initials: "KS",
    name: "Kyle Fernandez Selvistre",
    role: "Technical Developer",
    description: "Implements the technical infrastructure and ensures the website runs smoothly and efficiently.",
    selfCare: ["Coding personal projects", "Playing mobile games", "Hanging out with friends"],
    colorClass: "bg-primary/10 text-primary"
  },
  {
    initials: "MR",
    name: "Markrain Malibog Rodolfo",
    role: "Fact-Checker",
    description: "Verifies the accuracy of all claims and sources to maintain the integrity of our research.",
    selfCare: ["Reading news articles", "Swimming on weekends", "Spending time with pets"],
    colorClass: "bg-accent/10 text-accent"
  },
  {
    initials: "NM",
    name: "N'drew James Mondero",
    role: "Social Media Specialist",
    description: "Manages outreach and engagement strategies to amplify the project's message across platforms.",
    selfCare: ["Creating content for social media", "Watching YouTube videos", "Playing basketball"],
    colorClass: "bg-primary/10 text-primary"
  },
  {
    initials: "AF",
    name: "Arjay Orcela Flores",
    role: "Communications Coordinator",
    description: "Coordinates team communications and ensures smooth collaboration across all project phases.",
    selfCare: ["Listening to podcasts", "Working out at the gym", "Eating comfort food"],
    colorClass: "bg-accent/10 text-accent"
  },
  {
    initials: "RP",
    name: "Rein Paragas",
    role: "Media Relations",
    description: "Builds relationships with media outlets and handles press inquiries about the project.",
    selfCare: ["Playing online games", "Watching documentaries", "Taking afternoon naps"],
    colorClass: "bg-primary/10 text-primary"
  },
  {
    initials: "RV",
    name: "Reniel John Valerio",
    role: "Education Outreach",
    description: "Develops educational materials and workshops to spread awareness about corruption issues.",
    selfCare: ["Teaching others new skills", "Cycling around town", "Reading inspirational books"],
    colorClass: "bg-accent/10 text-accent"
  },
  {
    initials: "RC",
    name: "Ric Catcatan",
    role: "Project Manager",
    description: "Oversees project timelines, coordinates team activities, and ensures all objectives are met.",
    selfCare: ["Planning and organizing", "Watching sports events", "Quality time with loved ones"],
    colorClass: "bg-primary/10 text-primary"
  }
];

const Profile = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <Badge className="mb-4 bg-primary text-primary-foreground">About</Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Website Owners' Profile
          </h1>
          <p className="text-lg text-muted-foreground">
            Meet the team behind this research and advocacy project
          </p>
        </div>

        {/* Team Introduction */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl font-display font-bold mb-4">Our Mission</h2>
          <p className="text-foreground/90 leading-relaxed mb-4">
            We are a group of concerned students committed to raising awareness about the critical 
            issue of corruption in the Philippines. Through this project, we aim to educate our 
            fellow citizens about the damaging effects of corruption and empower them with knowledge 
            to demand accountability from public officials.
          </p>
          <p className="text-foreground/90 leading-relaxed">
            This website is part of our GEN 002 P3 academic project, but our commitment to 
            transparency and good governance extends beyond the classroom. We believe that every 
            Filipino has a role to play in creating a corruption-free society.
          </p>
        </Card>

        {/* Team Members */}
        <div className="mb-8">
          <h2 className="text-3xl font-display font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>Team Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card 
                key={member.name} 
                className="p-6 hover:shadow-lg transition-all opacity-0 animate-scale-in group"
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                <div className="mb-4">
                  <div className={`w-20 h-20 ${member.colorClass} rounded-full flex items-center justify-center text-3xl font-display font-bold mb-3 group-hover:scale-110 transition-transform`}>
                    {member.initials}
                  </div>
                  <h3 className="text-xl font-display font-bold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
                <p className="text-sm text-foreground/80 mb-4">
                  {member.description}
                </p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold flex items-center gap-2">
                    <Heart className="h-4 w-4 text-accent" />
                    Self-Care Practices:
                  </h4>
                  <ul className="text-sm text-foreground/80 space-y-1 ml-6">
                    {member.selfCare.map((practice, i) => (
                      <li key={i}>• {practice}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Self-Care Philosophy */}
        <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-accent/10 rounded-lg">
              <Heart className="h-6 w-6 text-accent animate-float" />
            </div>
            <div>
              <h2 className="text-2xl font-display font-bold mb-2">Why Self-Care Matters</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                In today's demanding world, taking care of our mental and emotional well-being 
                is more important than ever. Researching heavy topics like corruption can be 
                draining and stressful.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Each team member practices self-care in their own way, but we all believe in the 
                importance of taking breaks, pursuing hobbies, and maintaining healthy relationships. 
                <strong> Taking care of yourself is not selfish—it's essential for staying motivated, 
                engaged, and effective in creating positive change.</strong>
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="flex items-center gap-3 p-4 bg-background rounded-lg hover:shadow-md transition-all">
              <Book className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Continuous Learning</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-background rounded-lg hover:shadow-md transition-all">
              <Music className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Creative Expression</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-background rounded-lg hover:shadow-md transition-all">
              <Coffee className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Mindful Breaks</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
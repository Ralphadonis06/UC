import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AlertTriangle, Search, Shield, Users, Scale, Banknote, ArrowRight, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import corruptionHero from "@/assets/corruption-hero.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={corruptionHero} 
            alt="Corruption in the Philippines" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/70 to-background" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Eye className="h-4 w-4 text-primary" />
              <span className="text-foreground font-medium">Investigative Report</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <span className="text-foreground">Unmasking</span>{" "}
              <span className="text-gradient-gold">Corruption</span>{" "}
              <span className="text-foreground">in the Philippines</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              A comprehensive investigation into how graft undermines our nation's progress 
              and what every Filipino can do to demand accountability.
            </p>
            
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button asChild size="lg" className="gradient-gold text-foreground font-semibold px-8 glow-gold">
                <Link to="/issue">
                  Explore the Issue
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-semibold px-8">
                <Link to="/solutions">View Solutions</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Key Statistics */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-sm uppercase tracking-widest text-primary font-semibold mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              The Numbers
            </h2>
            <p className="text-3xl md:text-4xl font-display font-bold opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              The Cost of Corruption
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 border border-border rounded-lg bg-card opacity-0 animate-scale-in hover:border-primary/50 transition-all" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl md:text-6xl font-display font-bold text-gradient-gold mb-3">115th</div>
              <p className="text-muted-foreground">Corruption Perceptions Index Ranking (2023)</p>
            </div>
            <div className="text-center p-8 border border-border rounded-lg bg-card opacity-0 animate-scale-in hover:border-primary/50 transition-all" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl md:text-6xl font-display font-bold text-gradient-gold mb-3">₱700B+</div>
              <p className="text-muted-foreground">Estimated Annual Losses to Corruption</p>
            </div>
            <div className="text-center p-8 border border-border rounded-lg bg-card opacity-0 animate-scale-in hover:border-primary/50 transition-all" style={{ animationDelay: '0.3s' }}>
              <div className="text-5xl md:text-6xl font-display font-bold text-gradient-gold mb-3">34/100</div>
              <p className="text-muted-foreground">Transparency International Score</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Cards */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm uppercase tracking-widest text-primary font-semibold mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Understanding the Crisis
              </h2>
              <p className="text-3xl md:text-4xl font-display font-bold mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                How Corruption Affects Every Filipino
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                From healthcare to education, corruption's reach extends to every aspect of public life
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 border-l-4 border-l-primary hover:shadow-lg transition-all opacity-0 animate-fade-in-left group" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-start gap-5">
                  <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Scale className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-3">The Problem</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Systemic corruption pervades government institutions, from local barangays 
                      to national agencies, undermining public services and eroding trust in democracy.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-l-4 border-l-accent hover:shadow-lg transition-all opacity-0 animate-fade-in-right group" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-start gap-5">
                  <div className="p-4 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                    <Banknote className="h-7 w-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-3">The Impact</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Billions lost to graft means fewer hospitals, schools, and roads—widening 
                      inequality and keeping millions of Filipinos trapped in poverty.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-l-4 border-l-primary hover:shadow-lg transition-all opacity-0 animate-fade-in-left group" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-start gap-5">
                  <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Shield className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-3">Solutions</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Strengthening anti-corruption agencies, promoting transparency in government, 
                      and empowering citizens with tools to demand accountability.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-l-4 border-l-accent hover:shadow-lg transition-all opacity-0 animate-fade-in-right group" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-start gap-5">
                  <div className="p-4 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                    <Users className="h-7 w-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-3">Your Role</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Every citizen can contribute by reporting corrupt practices, voting for 
                      integrity, and supporting anti-corruption initiatives in their communities.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Join the Fight for Transparency
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Learn how to identify corrupt practices, protect public resources, 
            and contribute to building a more accountable government.
          </p>
          <Button asChild size="lg" className="gradient-gold text-foreground font-semibold px-10 py-6 text-lg glow-gold">
            <Link to="/solutions">
              Discover What You Can Do
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;

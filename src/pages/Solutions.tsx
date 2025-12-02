import { Card } from "@/components/ui/card";
import { GraduationCap, Shield, Users, CheckCircle2, Building2, AlertCircle, Scale, Eye, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Solutions = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="mb-16 text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">Recommendations</p>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="text-gradient-gold">Solutions</span> & Action
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Multi-stakeholder approaches to combat corruption and build a more transparent government
          </p>
        </div>

        {/* Introduction */}
        <Card className="p-10 mb-12 border-l-4 border-l-primary opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <p className="text-foreground/80 leading-relaxed text-lg">
            Addressing corruption requires coordinated efforts from government, civil society, 
            the private sector, and individual citizens. No single solution will eliminate this 
            deeply rooted problem, but together, these recommendations can significantly reduce 
            corrupt practices and <strong className="text-primary">restore public trust</strong>.
          </p>
        </Card>

        {/* Solutions */}
        <div className="space-y-12">
          {/* Institutional Reforms */}
          <div className="opacity-0 animate-fade-in-left" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 gradient-gold rounded-xl">
                <Building2 className="h-8 w-8 text-foreground" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-primary font-semibold">Step 1</p>
                <h2 className="text-2xl md:text-3xl font-display font-bold">Strengthen Anti-Corruption Agencies</h2>
              </div>
            </div>
            
            <Card className="p-8 hover:shadow-lg transition-all">
              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1 text-lg">Grant Full Independence to Ombudsman</p>
                    <p className="text-muted-foreground">
                      Ensure the Office of the Ombudsman has complete fiscal and administrative 
                      autonomy to investigate and prosecute without political interference.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1 text-lg">Increase Resources for COA</p>
                    <p className="text-muted-foreground">
                      Provide adequate funding and personnel to the Commission on Audit for 
                      comprehensive auditing of government agencies and transactions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1 text-lg">Create Special Anti-Corruption Courts</p>
                    <p className="text-muted-foreground">
                      Establish dedicated courts with trained judges to expedite corruption cases 
                      and increase conviction rates.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Transparency */}
          <div className="opacity-0 animate-fade-in-right" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-accent rounded-xl">
                <Eye className="h-8 w-8 text-accent-foreground" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-primary font-semibold">Step 2</p>
                <h2 className="text-2xl md:text-3xl font-display font-bold">Promote Transparency</h2>
              </div>
            </div>
            
            <Card className="p-8 hover:shadow-lg transition-all">
              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 bg-accent/5 rounded-xl hover:bg-accent/10 transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1 text-lg">Pass Freedom of Information Law</p>
                    <p className="text-muted-foreground">
                      Enact a comprehensive FOI law that grants citizens access to government 
                      records, contracts, and decision-making processes.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-accent/5 rounded-xl hover:bg-accent/10 transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1 text-lg">Digitize Government Transactions</p>
                    <p className="text-muted-foreground">
                      Implement e-governance systems to minimize human discretion and create 
                      traceable records of all government services.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-accent/5 rounded-xl hover:bg-accent/10 transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1 text-lg">Open Government Data</p>
                    <p className="text-muted-foreground">
                      Publish government budgets, procurement data, and audit reports in 
                      accessible formats for public monitoring.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Political Reforms */}
          <div className="opacity-0 animate-fade-in-left" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 gradient-gold rounded-xl">
                <Scale className="h-8 w-8 text-foreground" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-primary font-semibold">Step 3</p>
                <h2 className="text-2xl md:text-3xl font-display font-bold">Political Reforms</h2>
              </div>
            </div>
            
            <Card className="p-8 hover:shadow-lg transition-all">
              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1 text-lg">Pass Anti-Political Dynasty Law</p>
                    <p className="text-muted-foreground">
                      Implement constitutional provisions limiting the concentration of 
                      political power within families.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1 text-lg">Campaign Finance Reform</p>
                    <p className="text-muted-foreground">
                      Strengthen disclosure requirements and cap campaign spending to reduce 
                      the influence of money in politics.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1 text-lg">Protect Whistleblowers</p>
                    <p className="text-muted-foreground">
                      Enact comprehensive whistleblower protection laws with incentives 
                      for reporting corruption.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Individual Action */}
          <div className="opacity-0 animate-fade-in-right" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-accent rounded-xl">
                <Users className="h-8 w-8 text-accent-foreground" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-primary font-semibold">Step 4</p>
                <h2 className="text-2xl md:text-3xl font-display font-bold">Citizen Empowerment</h2>
              </div>
            </div>
            
            <Card className="p-8 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-6 text-primary">What You Can Do:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex items-start gap-4 p-4 bg-accent/5 rounded-xl">
                  <CheckCircle2 className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Report Corruption</p>
                    <p className="text-sm text-muted-foreground">
                      Use official channels like the Ombudsman hotline (8888) to report corrupt practices.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-accent/5 rounded-xl">
                  <CheckCircle2 className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Vote Wisely</p>
                    <p className="text-sm text-muted-foreground">
                      Research candidates' track records and vote for those with proven integrity.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-accent/5 rounded-xl">
                  <CheckCircle2 className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Refuse to Participate</p>
                    <p className="text-sm text-muted-foreground">
                      Don't offer or accept bribes—this breaks the cycle of corruption.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-accent/5 rounded-xl">
                  <CheckCircle2 className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Support Anti-Corruption NGOs</p>
                    <p className="text-sm text-muted-foreground">
                      Volunteer with or donate to organizations working on transparency.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Education */}
          <div className="opacity-0 animate-fade-in-left" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 gradient-gold rounded-xl">
                <GraduationCap className="h-8 w-8 text-foreground" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-primary font-semibold">Step 5</p>
                <h2 className="text-2xl md:text-3xl font-display font-bold">Education & Awareness</h2>
              </div>
            </div>
            
            <Card className="p-8 hover:shadow-lg transition-all">
              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1 text-lg">Integrate Ethics in Education</p>
                    <p className="text-muted-foreground">
                      Include values education and anti-corruption modules in school curricula 
                      from elementary to college levels.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1 text-lg">Public Information Campaigns</p>
                    <p className="text-muted-foreground">
                      Launch awareness campaigns about citizens' rights and how to report 
                      corruption through accessible channels.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1 text-lg">Community Engagement</p>
                    <p className="text-muted-foreground">
                      Empower local communities to monitor government projects and 
                      participate in budget planning processes.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <Card className="p-10 mt-16 gradient-hero text-white opacity-0 animate-scale-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-start gap-6">
            <div className="p-4 bg-white/10 rounded-xl">
              <AlertCircle className="h-8 w-8 text-primary animate-float" />
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold mb-4">The Path Forward</h3>
              <p className="text-white/80 mb-4 text-lg leading-relaxed">
                Combating corruption is not just the responsibility of government—it requires all of 
                us to be vigilant, refuse to participate in corrupt practices, and demand accountability 
                from our leaders.
              </p>
              <p className="text-white/90 text-lg font-medium">
                Together, we can build a nation where public resources serve the public good, 
                where officials are accountable to citizens, and where integrity is the norm.
              </p>
              
              <div className="mt-8">
                <Button asChild size="lg" className="gradient-gold text-foreground font-semibold px-8 glow-gold">
                  <Link to="/profile">
                    Meet Our Team
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Solutions;

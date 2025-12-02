import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { TrendingUp, Users, Building2, Globe, Banknote, Scale, FileWarning, HeartPulse } from "lucide-react";

const Issue = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="mb-16 text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">Analysis</p>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            The <span className="text-gradient-gold">Issue</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive analysis of how corruption erodes governance and affects Filipino society
          </p>
        </div>

        {/* Introduction */}
        <Card className="p-10 mb-12 border-l-4 border-l-primary opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-display font-bold mb-4">Overview</h2>
          <p className="text-foreground/80 mb-4 leading-relaxed text-lg">
            Corruption remains one of the most persistent challenges facing the Philippines today. 
            From petty bribery in local offices to large-scale graft in national agencies, corrupt 
            practices drain public resources, weaken institutions, and perpetuate poverty across 
            the nation.
          </p>
          <p className="text-foreground/80 leading-relaxed text-lg">
            The Philippines consistently ranks among the more corrupt nations in global indices, 
            with Transparency International's 2023 Corruption Perceptions Index placing the country 
            at <strong className="text-primary">115th out of 180 countries</strong> with a score of 34/100—indicating a serious corruption problem 
            that demands urgent attention.
          </p>
        </Card>

        {/* Contributing Factors */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <h2 className="text-sm uppercase tracking-widest text-primary font-semibold mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>Root Causes</h2>
            <p className="text-3xl font-display font-bold opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>Contributing Factors</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-8 opacity-0 animate-fade-in-left hover:shadow-lg transition-all border-t-4 border-t-primary/20 hover:border-t-primary" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-start gap-4">
                <div className="p-4 bg-primary/10 rounded-xl">
                  <Building2 className="h-7 w-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-bold mb-3">Weak Institutional Framework</h3>
                  <ul className="space-y-2 text-foreground/70">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Anti-corruption agencies lack <strong>independence and resources</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Complex bureaucratic processes create opportunities for bribery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Slow judicial system delays prosecution of corruption cases</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 opacity-0 animate-fade-in-right hover:shadow-lg transition-all border-t-4 border-t-accent/20 hover:border-t-accent" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start gap-4">
                <div className="p-4 bg-accent/10 rounded-xl">
                  <Users className="h-7 w-7 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-bold mb-3">Political Dynasties</h3>
                  <ul className="space-y-2 text-foreground/70">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Over <strong>80% of congressional seats</strong> held by political families</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Concentration of power enables patronage and nepotism</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Lack of anti-dynasty legislation perpetuates the problem</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 opacity-0 animate-fade-in-left hover:shadow-lg transition-all border-t-4 border-t-primary/20 hover:border-t-primary" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-start gap-4">
                <div className="p-4 bg-primary/10 rounded-xl">
                  <Banknote className="h-7 w-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-bold mb-3">Culture of Impunity</h3>
                  <ul className="space-y-2 text-foreground/70">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Low conviction rates for corruption cases (less than 10%)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Wealthy and powerful individuals often escape accountability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Whistleblowers face harassment and retaliation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 opacity-0 animate-fade-in-right hover:shadow-lg transition-all border-t-4 border-t-accent/20 hover:border-t-accent" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-start gap-4">
                <div className="p-4 bg-accent/10 rounded-xl">
                  <Globe className="h-7 w-7 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-bold mb-3">Lack of Transparency</h3>
                  <ul className="space-y-2 text-foreground/70">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Government transactions often conducted without public scrutiny</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Procurement processes vulnerable to manipulation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Limited access to public financial records and audit reports</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Different Viewpoints */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <h2 className="text-sm uppercase tracking-widest text-primary font-semibold mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>Stakeholder Views</h2>
            <p className="text-3xl font-display font-bold opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>Different Perspectives</p>
          </div>
          
          <div className="space-y-6">
            <Card className="p-8 border-l-4 border-l-primary opacity-0 animate-fade-in-left hover:shadow-lg transition-all" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-xl font-display font-bold mb-3">Government Officials' View</h3>
              <p className="text-foreground/70 mb-4">
                Government acknowledges corruption as a problem but points to ongoing reforms and initiatives:
              </p>
              <ul className="space-y-2 text-foreground/70 ml-4">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  Implementation of e-governance to reduce human discretion
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  Creation of anti-corruption task forces and hotlines
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  Claims of progress in recovering ill-gotten wealth
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-l-4 border-l-accent opacity-0 animate-fade-in-right hover:shadow-lg transition-all" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-display font-bold mb-3">Civil Society Organizations' View</h3>
              <p className="text-foreground/70 mb-4">
                NGOs and watchdog groups emphasize the need for systemic change:
              </p>
              <ul className="space-y-2 text-foreground/70 ml-4">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                  Anti-corruption efforts remain insufficient and politically motivated
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                  Need for stronger protection for whistleblowers and journalists
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                  Call for passage of anti-dynasty and freedom of information laws
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-l-4 border-l-primary opacity-0 animate-fade-in-left hover:shadow-lg transition-all" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xl font-display font-bold mb-3">Business Sector's View</h3>
              <p className="text-foreground/70 mb-4">
                The private sector highlights corruption's impact on economic competitiveness:
              </p>
              <ul className="space-y-2 text-foreground/70 ml-4">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  Corruption adds 25-30% to the cost of doing business
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  Deters foreign investment and economic growth
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  Creates unfair competition favoring connected businesses
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-l-4 border-l-accent opacity-0 animate-fade-in-right hover:shadow-lg transition-all" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-display font-bold mb-3">Ordinary Citizens' View</h3>
              <p className="text-foreground/70 mb-4">
                Average Filipinos experience corruption in daily interactions:
              </p>
              <ul className="space-y-2 text-foreground/70 ml-4">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                  "Lagay" (bribe) system seen as normal in government transactions
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                  Frustration with slow services without "grease money"
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                  Growing distrust in government institutions and officials
                </li>
              </ul>
            </Card>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Impact */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-sm uppercase tracking-widest text-primary font-semibold mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>Consequences</h2>
            <p className="text-3xl font-display font-bold opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>Impact on Society</p>
          </div>
          
          <Card className="p-10 gradient-hero text-white opacity-0 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-xl">Economic Development</h4>
                </div>
                <p className="text-white/80 leading-relaxed">
                  Corruption siphons an estimated <strong className="text-primary">₱700 billion annually</strong> from public coffers, 
                  leading to underfunded infrastructure, poor public services, and slower economic growth.
                </p>
              </div>
              
              <div className="group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <HeartPulse className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-xl">Public Services</h4>
                </div>
                <p className="text-white/80 leading-relaxed">
                  Healthcare facilities lack equipment, schools remain underfunded, and infrastructure 
                  projects are substandard because corruption diverts resources meant for public welfare.
                </p>
              </div>
              
              <div className="group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Scale className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-xl">Rule of Law</h4>
                </div>
                <p className="text-white/80 leading-relaxed">
                  When corrupt officials escape justice, it undermines faith in the legal system 
                  and encourages a culture where laws apply only to those without power.
                </p>
              </div>

              <div className="group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <FileWarning className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-xl">Poverty & Inequality</h4>
                </div>
                <p className="text-white/80 leading-relaxed">
                  Resources meant for poverty alleviation programs are stolen, widening the gap 
                  between rich and poor and trapping millions of Filipinos in cycles of poverty.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Issue;

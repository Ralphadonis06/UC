import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FileText, Newspaper, BookOpen, Globe } from "lucide-react";

const Sources = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <Badge className="mb-4 bg-primary text-primary-foreground">References</Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Sources & Citations
          </h1>
          <p className="text-lg text-muted-foreground">
            All research and data used in this website are drawn from credible, verified sources
          </p>
        </div>

        {/* Introduction */}
        <Card className="p-8 mb-8 bg-primary/5 border-primary/20">
          <p className="text-foreground/90 leading-relaxed">
            Academic integrity and factual accuracy are paramount to our mission. Below are the 
            credible sources we consulted in creating this website. All claims and statistics 
            presented can be traced back to these verified publications, reports, and research papers.
          </p>
        </Card>

        {/* Sources List */}
        <div className="space-y-6">
          {/* Academic Sources */}
          <div>
            <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              Academic Research
            </h2>
            <div className="space-y-4">
              <Card className="p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <FileText className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-bold mb-2">
                      Disinformation and Democracy in the Philippines
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Ong, J. C., & Cabañes, J. V. A. (2018). "Architects of Networked Disinformation: 
                      Behind the Scenes of Troll Accounts and Fake News Production in the Philippines." 
                      <em>Newton Tech4Dev Network</em>.
                    </p>
                    <a 
                      href="https://newtontechfordev.com/wp-content/uploads/2018/02/ARCHITECTS-OF-NETWORKED-DISINFORMATION-FULL-REPORT.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                    >
                      View Source <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <FileText className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-bold mb-2">
                      Social Media and Political Polarization
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      University of the Philippines Center for Integrative and Development Studies (2019). 
                      "The State of Philippine Democracy: 2019." <em>UP CIDS</em>.
                    </p>
                    <a 
                      href="https://cids.up.edu.ph/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                    >
                      View Source <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* News Organizations */}
          <div>
            <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-2">
              <Newspaper className="h-6 w-6 text-accent" />
              News Reports & Fact-Checking
            </h2>
            <div className="space-y-4">
              <Card className="p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <FileText className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-bold mb-2">
                      Rappler's Fact-Check Initiative
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Rappler (2020-2024). Multiple fact-check articles on viral misinformation 
                      in the Philippines. <em>Rappler.com</em>.
                    </p>
                    <a 
                      href="https://www.rappler.com/newsbreak/fact-check/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-accent hover:underline inline-flex items-center gap-1"
                    >
                      View Source <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <FileText className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-bold mb-2">
                      VERA Files Fact Check
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      VERA Files (2020-2024). Comprehensive fact-checking of political claims and 
                      viral content. <em>VeraFiles.org</em>.
                    </p>
                    <a 
                      href="https://verafiles.org/category/vera-files-fact-check/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-accent hover:underline inline-flex items-center gap-1"
                    >
                      View Source <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <FileText className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-bold mb-2">
                      CNN Philippines Reports
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      CNN Philippines (2022). "Disinformation in the 2022 Philippine Elections: 
                      Trends and Impact." <em>CNN Philippines</em>.
                    </p>
                    <a 
                      href="https://www.cnnphilippines.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-accent hover:underline inline-flex items-center gap-1"
                    >
                      View Source <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Government & International Organizations */}
          <div>
            <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-2">
              <Globe className="h-6 w-6 text-primary" />
              Government & International Reports
            </h2>
            <div className="space-y-4">
              <Card className="p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <FileText className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-bold mb-2">
                      UNESCO Media and Information Literacy
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      UNESCO (2021). "Countering Online Hate Speech and Misinformation in Southeast Asia." 
                      <em>UNESCO Bangkok Office</em>.
                    </p>
                    <a 
                      href="https://www.unesco.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                    >
                      View Source <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <FileText className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-bold mb-2">
                      Reuters Digital News Report
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Newman, N., Fletcher, R., et al. (2023). "Reuters Institute Digital News Report 2023: 
                      Philippines Country Overview." <em>Reuters Institute, University of Oxford</em>.
                    </p>
                    <a 
                      href="https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2023" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                    >
                      View Source <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <FileText className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-bold mb-2">
                      Social Weather Stations Survey
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Social Weather Stations (2023). "Survey on Social Media Usage and Trust in 
                      Information Sources Among Filipinos." <em>SWS</em>.
                    </p>
                    <a 
                      href="https://www.sws.org.ph/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                    >
                      View Source <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <Card className="p-8 mt-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
          <h2 className="text-2xl font-display font-bold mb-4">Additional Resources</h2>
          <p className="text-foreground/80 mb-4">
            For readers interested in learning more about misinformation and media literacy, we 
            recommend the following resources:
          </p>
          <ul className="space-y-2 text-foreground/80">
            <li className="flex items-start gap-2">
              <span className="font-bold text-accent">•</span>
              <span>
                <strong>Tsek.ph</strong> - Collaborative fact-checking initiative by Philippine news organizations
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-accent">•</span>
              <span>
                <strong>First Draft</strong> - Global resources and training on responsible reporting in the digital age
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-accent">•</span>
              <span>
                <strong>Media and Information Literacy - DepEd</strong> - Educational materials for students and teachers
              </span>
            </li>
          </ul>
        </Card>

        {/* Citation Note */}
        <Card className="p-6 mt-6 border-accent/20">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> All URLs and citations were accurate as of the project completion date. 
            Some online resources may have been updated or moved since publication. For the most current 
            information, please visit the respective organizations' official websites.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Sources;

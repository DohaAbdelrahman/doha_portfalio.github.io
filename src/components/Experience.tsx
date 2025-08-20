import { Card } from "@/components/ui/card"
import { Calendar, MapPin, Briefcase } from "lucide-react"

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional experience and achievements in data analysis and machine learning.
          </p>
        </div>

        <Card className="p-8 bg-card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary">
          <div className="flex items-start gap-6">
            {/* Company Logo/Icon */}
            <div className="p-4 rounded-full bg-primary/20 flex-shrink-0">
              <Briefcase className="w-8 h-8 text-primary" />
            </div>

            {/* Experience Details */}
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-2xl font-bold mb-1 bg-hero-gradient bg-clip-text text-transparent">
                  Google Data Analysis Scholarship
                </h3>
                <p className="text-lg text-foreground mb-2">Hybrid Program</p>
                <div className="text-muted-foreground">Digital Egypt Pioneers Initiative - DEPI</div>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Nov 2024 - May 2025
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Cairo, Egypt
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                The DEPI scholarship is a program from Egypt's Ministry of Communications that helps students 
                and graduates get ready for tech jobs, especially in areas like Data Science.
              </p>

              {/* Key Achievements */}
              <div>
                <h4 className="text-lg font-semibold mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></span>
                    Analyzed large datasets to identify trends and patterns
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></span>
                    Created comprehensive reports and visualizations
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></span>
                    Collaborated with cross-functional teams to drive data-driven decisions
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></span>
                    Utilized statistical methods to extract meaningful insights
                  </li>
                </ul>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Excel", "Python", "Data Analysis", "SQL", "Tableau", 
                    "Power BI", "Data Cleaning", "Exploratory Data Analysis", 
                    "Data Visualization", "Machine Learning"
                  ].map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
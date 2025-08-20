import { Card } from "@/components/ui/card"
import { HeroButton } from "@/components/ui/hero-button"
import { Github, ExternalLink } from "lucide-react"
import jobManagementSystem from "@/assets/job-management-system.jpg"
import hotelBookingPrediction from "@/assets/hotel-booking-prediction.jpg"
import turkishMarketAnalysis from "@/assets/turkish-market-analysis.jpg"

export const Projects = () => {
  const projects = [
    {
      title: "Job Management System",
      description: "This project is a freelance job board system that allows clients to post job offers and freelancers to apply for them. The system is built using Python and stores data using JSON files instead of a database.",
      features: [
        "User Authentication (Clients & Freelancers)",
        "Job Posting & Applications", 
        "Client Management & Notifications"
      ],
      image: jobManagementSystem,
      technologies: ["Python", "JSON", "Google Cloud Console"],
      githubUrl: "https://github.com/DohaAbdelrahman/job-management-system",
      liveUrl: "https://github.com/DohaAbdelrahman/job-management-system"
    },
    {
      title: "Hotel Booking Cancellation Prediction System",
      description: "The hospitality industry faces a huge challenge with booking cancellations that affect revenue, occupancy rates, and customer satisfaction. We developed a machine learning solution to predict cancellations using historical and real-time data.",
      features: [
        "Machine Learning Prediction Models",
        "Real-time Data Processing",
        "Interactive Dashboard with Streamlit"
      ],
      image: hotelBookingPrediction,
      technologies: ["Python", "Machine Learning", "Streamlit"],
      githubUrl: "https://github.com/DohaAbdelrahman/hotel-booking-prediction",
      liveUrl: "https://github.com/DohaAbdelrahman/hotel-booking-prediction"
    },
    {
      title: "Exploratory Data Analysis and Machine Learning for Turkish Market Sales",
      description: "Analyze market data to uncover trends, seasonal patterns & product performance. Cleaned 365,000+ records, performed EDA with Python, normalized data to 3NF (SQL), created interactive dashboards, and implemented Random Forest for sales prediction.",
      features: [
        "Cleaned 365,000+ records",
        "EDA with Python (Pandas, Seaborn)",
        "Normalized data to 3NF (SQL)",
        "Interactive Dashboards (Power BI)",
        "Random Forest for Sales Prediction"
      ],
      image: turkishMarketAnalysis,
      technologies: ["Python", "SQL", "EDA", "Machine Learning", "Power BI"],
      githubUrl: "https://github.com/DohaAbdelrahman/turkish-market-analysis",
      liveUrl: "https://github.com/DohaAbdelrahman/turkish-market-analysis"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my programming projects, demonstrating expertise in data analysis, 
            algorithm design, and software development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="p-6 bg-card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary group overflow-hidden">
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-hero-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div>
                  <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <HeroButton variant="outline" size="sm" asChild className="flex-1">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </HeroButton>
                  <HeroButton variant="hero" size="sm" asChild className="flex-1">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </HeroButton>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
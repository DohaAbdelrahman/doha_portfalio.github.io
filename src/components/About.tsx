import { Card } from "@/components/ui/card"
import { Code, Users, Lightbulb, BookOpen } from "lucide-react"

export const About = () => {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time"
    },
    {
      icon: Lightbulb,
      title: "Problem Solver", 
      description: "Turning complex challenges into elegant, user-friendly solutions"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborating effectively with designers, developers, and stakeholders"
    },
    {
      icon: BookOpen,
      title: "Continuous Learner",
      description: "Always exploring new technologies and best practices"
    }
  ]

  const stats = [
    { number: "2+", label: "Projects Completed" },
    { number: "1+", label: "Years Experience" },
    { number: "8+", label: "Technologies" },
    { number: "2027", label: "Graduation Year" }
  ]

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate Data Analyst and Computer Science student majoring in Information Technology. 
            I love transforming raw data into actionable insights that drive strategic decision-making.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={feature.title} className="p-6 bg-card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary group">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Journey Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Currently pursuing my Bachelor's Degree in Computer Science and Information Technology at 
              Helwan National University. I'm gaining hands-on experience through the Digital Egypt Pioneers Initiative, 
              where I work as a Data Analysis Intern.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm experienced in data cleaning, exploration, visualization, statistical analysis, and predictive modeling 
              using Python, SQL, Excel, and Power BI. I focus on translating business needs into actionable data solutions.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={stat.label} className="p-6 text-center bg-card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
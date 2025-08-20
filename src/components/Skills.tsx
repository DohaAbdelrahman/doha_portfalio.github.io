import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "Java", level: 75 },
        { name: "C++", level: 70 }
      ]
    },
    {
      title: "Data Analysis & ML",
      skills: [
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 85 },
        { name: "Scikit-learn", level: 80 },
        { name: "Machine Learning", level: 85 }
      ]
    },
    {
      title: "Data Visualization",
      skills: [
        { name: "Power BI", level: 90 },
        { name: "Tableau", level: 85 },
        { name: "Matplotlib", level: 80 },
        { name: "Seaborn", level: 85 }
      ]
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "SQL", level: 88 },
        { name: "Excel", level: 92 },
        { name: "Git", level: 75 },
        { name: "Streamlit", level: 80 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks for building scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="p-6 bg-card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300">
              <h3 className="text-xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
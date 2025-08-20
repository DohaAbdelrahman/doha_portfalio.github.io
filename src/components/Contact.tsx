import { Card } from "@/components/ui/card"
import { HeroButton } from "@/components/ui/hero-button"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "dohaabd757@gmail.com",
      href: "mailto:dohaabd757@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone", 
      value: "01029474155",
      href: "tel:01029474155"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Al-Manib, Al-Giza",
      href: "#"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? I'm always open to discussing new opportunities and exciting projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
                Get in Touch
              </h3>
              <p className="text-muted-foreground mb-6">
                Whether you have a project in mind, need technical consultation, or just want to say hello, 
                I'd love to hear from you. Let's create something amazing together!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={info.title} className="p-4 bg-card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary group">
                  <a href={info.href} className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.title}</div>
                      <div className="font-medium group-hover:text-primary transition-colors">{info.value}</div>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/DohaAbdelrahman" target="_blank" rel="noopener noreferrer"
                 className="p-4 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow-primary group">
                <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="p-4 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow-primary group">
                <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* CTA Card */}
          <Card className="p-8 bg-card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary text-center">
            <div className="space-y-6">
              <div className="w-20 h-20 bg-hero-gradient rounded-full flex items-center justify-center mx-auto">
                <Mail className="w-10 h-10 text-white" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-2">Ready to Start?</h3>
                <p className="text-muted-foreground">
                  Let's discuss your project and see how I can help bring your vision to life.
                </p>
              </div>

              <HeroButton variant="hero" size="lg" className="w-full">
                <Mail className="w-5 h-5 mr-2" />
                Send Message
              </HeroButton>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
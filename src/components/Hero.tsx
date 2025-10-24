import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, Play, Target, Lightbulb, Rocket, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: `url(${heroImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          

          <h1 className="animate-fade-in-up text-balance">
            Welcome to <span className="gradient-text">Ravi Rautela's</span>{" "}
            Innovation Hub
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up text-balance">
            Driving innovation at the intersection of technology, agriculture, and education with 25+ years 
            of transformative leadership. Join gamified events, receive mentorship, and earn professional certifications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <Button size="lg" className="w-full sm:w-auto bg-gradient-primary hover:shadow-primary group" asChild>
              <Link to="/connect">
                Connect Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto group" asChild>
              <Link to="/portfolio">
                <Play className="mr-2 w-5 h-5" />
                View Portfolio
              </Link>
            </Button>
          </div>

          {/* Vision, Mission, Impact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 animate-slide-in-right">
            <Card className="glass-card hover-lift border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-primary">Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To create a global ecosystem where innovation thrives through technology, 
                  sustainable practices, and transformative education.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="glass-card hover-lift border-secondary/20">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-secondary">Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Empowering startups and entrepreneurs with mentorship, resources, and 
                  cutting-edge solutions to drive impactful change.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="glass-card hover-lift border-accent/20">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-accent">Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  25+ years of experience, 100+ startups mentored, and 50+ products incubated 
                  across technology, agriculture, and education sectors.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Partner Logos Carousel */}
          <div className="pt-16 space-y-6">
            <h3 className="text-2xl font-semibold text-center">Trusted Partners & Collaborators</h3>
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent className="-ml-4">
                {[
                  { name: "Tech Accelerator", icon: Building2 },
                  { name: "Innovation Hub", icon: Rocket },
                  { name: "Startup Incubator", icon: Lightbulb },
                  { name: "Venture Partners", icon: Target },
                  { name: "Growth Lab", icon: Building2 },
                  { name: "Future Ventures", icon: Rocket },
                ].map((partner, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/3 lg:basis-1/4">
                    <div className="p-6 glass-card rounded-lg hover-lift transition-all duration-300 grayscale hover:grayscale-0 group">
                      <div className="flex flex-col items-center justify-center space-y-3">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <partner.icon className="w-8 h-8 text-primary" />
                        </div>
                        <p className="text-sm font-medium text-center">{partner.name}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{
      animationDelay: "1s"
    }} />
    </section>;
};
export default Hero;
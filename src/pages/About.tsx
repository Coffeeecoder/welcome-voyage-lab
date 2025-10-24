import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Briefcase, 
  GraduationCap, 
  Heart, 
  Lightbulb, 
  Target, 
  TrendingUp, 
  Users, 
  Zap,
  ArrowRight,
  BookOpen,
  Trophy,
  Rocket,
  Building2
} from "lucide-react";
import sirPortrait from "@/assets/sir-portrait.jpg";

const milestones = [
  {
    year: "2022 - Present",
    title: "Director – Innovation",
    company: "MangosOrange Group",
    icon: Rocket,
    description: "Leading innovation initiatives across multiple verticals, driving strategic technology adoption"
  },
  {
    year: "2020 - Present",
    title: "Founder & CEO",
    company: "MangosOrange Agritech India Pvt. Ltd.",
    icon: Building2,
    description: "Founded agritech venture focused on sustainable farming and IoT-enabled agriculture"
  },
  {
    year: "2018 - 2022",
    title: "Business Vertical Head",
    company: "Multigraphics Group",
    icon: Briefcase,
    description: "Managed strategic operations and drove 300% revenue growth"
  },
  {
    year: "2006 - 2018",
    title: "Professional Journey",
    company: "Multiple Organizations",
    icon: TrendingUp,
    description: "Progressive career from Technical Faculty to Senior Management roles"
  }
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Constantly pushing boundaries and exploring new possibilities in technology and business"
  },
  {
    icon: Users,
    title: "People Empowerment",
    description: "Committed to mentoring and enabling individuals to achieve their full potential"
  },
  {
    icon: Heart,
    title: "Social Impact",
    description: "Creating sustainable solutions that benefit communities and the environment"
  },
  {
    icon: Target,
    title: "Results Driven",
    description: "Focused on delivering measurable outcomes and tangible value"
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Believing in lifelong learning and staying ahead of industry trends"
  },
  {
    icon: Trophy,
    title: "Excellence",
    description: "Maintaining highest standards in every project and initiative undertaken"
  }
];

const achievements = [
  {
    number: "25+",
    label: "Years of Experience",
    description: "Across technology, agriculture, and education sectors"
  },
  {
    number: "100+",
    label: "Startups Mentored",
    description: "Guided entrepreneurs from idea to successful businesses"
  },
  {
    number: "5000+",
    label: "Professionals Trained",
    description: "Through various certification programs and workshops"
  },
  {
    number: "15+",
    label: "Products Incubated",
    description: "Innovative solutions launched across multiple domains"
  },
  {
    number: "₹50M+",
    label: "Funding Facilitated",
    description: "Helped startups raise significant investments"
  },
  {
    number: "1000+",
    label: "Farms Transformed",
    description: "Through agritech solutions and sustainable practices"
  }
];

const expertise = [
  "Technology & Product Incubation",
  "Startup Consulting & Development",
  "Team & Youth Mentoring",
  "Social Entrepreneurship",
  "Digital Marketing & Cloud Technologies",
  "Research & Development",
  "AgriTech Innovation",
  "EdTech Solutions",
  "Business Strategy",
  "Leadership Development"
];

const certifications = [
  "AWS Certified Solutions Architect",
  "Certified Innovation Leader",
  "Digital Marketing Expert",
  "Agritech Specialist",
  "Leadership & Management",
  "Project Management Professional"
];

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
                  <Zap className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">Visionary Leader • Innovator • Mentor</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold">
                  Meet <span className="gradient-text">Ravi Rautela</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  A passionate innovator with 25+ years of experience in driving transformation across 
                  technology, agriculture, and education sectors. Dedicated to empowering startups, 
                  mentoring youth, and creating sustainable solutions.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button size="lg" className="bg-gradient-primary hover:shadow-primary group">
                    Connect With Me
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button size="lg" variant="outline">Download Resume</Button>
                </div>
              </div>
              
              <div className="relative animate-fade-in">
                <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
                <img 
                  src={sirPortrait} 
                  alt="Ravi Rautela" 
                  className="relative rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Stats */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="gradient-text mb-4">Impact & Achievements</h2>
            <p className="text-lg text-muted-foreground">
              Measurable outcomes from years of dedication and hard work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover-lift text-center">
                <CardHeader>
                  <div className="text-4xl font-bold gradient-text mb-2">{achievement.number}</div>
                  <CardTitle className="text-lg">{achievement.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{achievement.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="gradient-text mb-4 pb-2">Professional Journey</h2>
            <p className="text-lg text-muted-foreground">
              A progressive career spanning leadership roles across multiple industries
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <Card key={index} className="hover-lift">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                          <div>
                            <CardTitle className="text-xl">{milestone.title}</CardTitle>
                            <CardDescription className="text-base font-medium text-foreground/80">
                              {milestone.company}
                            </CardDescription>
                          </div>
                          <Badge variant="outline">{milestone.year}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="gradient-text mb-4 pb-2">Core Values & Principles</h2>
            <p className="text-lg text-muted-foreground">
              The guiding principles that drive every decision and action
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="hover-lift">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{value.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise & Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Expertise */}
            <Card className="hover-lift">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle>Areas of Expertise</CardTitle>
                </div>
                <CardDescription>
                  Specialized knowledge and skills across multiple domains
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {expertise.map((item, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="hover-lift">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-accent" />
                  </div>
                  <CardTitle>Certifications & Credentials</CardTitle>
                </div>
                <CardDescription>
                  Professional certifications and qualifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-card border-primary/20">
              <CardHeader className="text-center pb-6">
                <Target className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-2xl">Mission & Vision</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <Rocket className="w-5 h-5 text-primary" />
                    Mission
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To empower individuals and organizations through innovation, technology, and sustainable practices. 
                    By bridging the gap between traditional industries and modern technology, I aim to create solutions 
                    that drive economic growth while ensuring environmental sustainability and social impact.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <Eye className="w-5 h-5 text-accent" />
                    Vision
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To build an ecosystem where technology serves humanity, agriculture becomes sustainable and profitable, 
                    and education transforms lives. Through mentorship, innovation, and social entrepreneurship, create 
                    lasting positive impact across communities and industries.
                  </p>
                </div>

                <div className="glass-card p-6 rounded-xl text-center">
                  <blockquote className="text-lg italic text-muted-foreground">
                    "Innovation happens at the intersection of technology, education, and agriculture – 
                    where sustainable solutions meet real-world impact."
                  </blockquote>
                  <footer className="text-sm font-semibold gradient-text mt-3">— Ravi Rautela</footer>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center glass-card p-12 rounded-2xl">
            <Users className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl font-bold mb-4">Let's Connect & Collaborate</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're a startup founder, student, educator, or entrepreneur – let's explore 
              how we can work together to create something meaningful.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-primary group">
                Schedule a Meeting
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">Send a Message</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Eye icon component (since it's not in lucide-react by default)
const Eye = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export default AboutPage;

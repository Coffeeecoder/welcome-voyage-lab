import { useEffect } from "react";
import { Mail, Phone, Linkedin, Award, TrendingUp, Users, Briefcase, Target, Lightbulb, Rocket, Building2, GraduationCap, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
const Portfolio = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        const element = document.getElementById(id || '');
        element?.scrollIntoView({
          behavior: 'smooth'
        });
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
  const stats = [{
    value: "25+",
    label: "Years Experience",
    icon: Briefcase
  }, {
    value: "100+",
    label: "Startups Mentored",
    icon: Users
  }, {
    value: "50+",
    label: "Products Incubated",
    icon: Lightbulb
  }, {
    value: "15+",
    label: "Industry Awards",
    icon: Award
  }];
  const expertise = [{
    icon: Lightbulb,
    title: "Technology & Product Incubation",
    description: "Leading innovation labs and product development from concept to market launch with 5 innovation labs established and 15+ patents filed"
  }, {
    icon: Rocket,
    title: "Startup Consulting & Development",
    description: "Strategic guidance for 100+ startups across ideation, funding, and scaling phases with $50M+ funding raised and 80% success rate"
  }, {
    icon: GraduationCap,
    title: "Team, Teacher & Youth Mentoring",
    description: "Empowering educators, professionals, and young entrepreneurs through structured mentorship with 5000+ professionals trained across 20+ certification programs"
  }, {
    icon: Target,
    title: "Social Entrepreneurship",
    description: "Creating sustainable business models that drive positive social and environmental impact with solutions deployed across 1000+ farms achieving 40% yield increase"
  }, {
    icon: Building2,
    title: "Digital Marketing & Cloud Technologies",
    description: "AWS expertise, IT infrastructure, and comprehensive digital transformation strategies with 100+ digital projects and 50+ cloud migrations achieving 99.9% uptime"
  }, {
    icon: TrendingUp,
    title: "Research & Development",
    description: "Leading R&D initiatives in agritech, edtech, and emerging technology sectors with pioneering IoT-enabled agriculture systems and sustainable farming solutions"
  }];
  const experiences = [{
    role: "Director – Innovation",
    company: "MangosOrange Group",
    period: "2022 - Present",
    description: "Leading innovation initiatives across multiple verticals, driving strategic technology adoption and overseeing R&D operations for next-generation products.",
    achievements: ["Launched 5 innovative product lines", "Established 3 Centers of Excellence", "Led digital transformation initiatives"],
    current: true
  }, {
    role: "Founder & CEO",
    company: "MangosOrange Agritech India Pvt. Ltd.",
    period: "2020 - Present",
    description: "Founded and leading agritech venture focused on sustainable farming solutions, IoT-enabled agriculture, and farmer empowerment programs.",
    achievements: ["Deployed solutions across 1000+ farms", "Raised Series A funding", "Built team of 50+ professionals"],
    current: true
  }, {
    role: "Business Vertical Head",
    company: "Multigraphics Group",
    period: "2018 - 2022",
    description: "Managed strategic business vertical operations, drove revenue growth, and established new market partnerships in the graphics and technology sector.",
    achievements: ["Increased vertical revenue by 300%", "Expanded to 8 new markets", "Led team of 40+ professionals"]
  }, {
    role: "Business Head",
    company: "Digians Global",
    period: "2016 - 2018",
    description: "Spearheaded business development initiatives, managed client relationships, and drove digital transformation projects for enterprise clients.",
    achievements: ["Secured $5M+ in new business", "Implemented digital solutions for 50+ clients", "Built strategic partnerships"]
  }, {
    role: "Manager – Business Development",
    company: "vStacks Infotech",
    period: "2014 - 2016",
    description: "Led business development efforts, identified new market opportunities, and managed key client relationships in the IT services sector.",
    achievements: ["Expanded client base by 150%", "Launched 3 new service offerings", "Established offshore development centers"]
  }, {
    role: "Vertical Head – Training & Development",
    company: "Cat-7 Business Solutions",
    period: "2012 - 2014",
    description: "Established and managed training programs, developed curriculum for emerging technologies, and led corporate learning initiatives.",
    achievements: ["Trained 2000+ professionals", "Developed 15+ certification programs", "Established training partnerships"]
  }, {
    role: "Manager Projects",
    company: "Advait Life-Education",
    period: "2010 - 2012",
    description: "Managed educational technology projects, developed e-learning platforms, and drove innovation in educational delivery methods.",
    achievements: ["Launched 10+ edtech projects", "Implemented LMS for 50+ institutions", "Developed mobile learning solutions"]
  }, {
    role: "Sr. Training Manager",
    company: "HCL CR+",
    period: "2008 - 2010",
    description: "Led corporate training initiatives, developed technical curriculum, and managed learning and development programs for IT professionals.",
    achievements: ["Conducted 500+ training sessions", "Achieved 98% satisfaction rating", "Developed cloud computing curriculum"]
  }, {
    role: "Faculty",
    company: "Jetking Infotrain Limited",
    period: "2006 - 2008",
    description: "Started career as technical faculty, teaching networking and IT infrastructure courses, and mentoring students in technology careers.",
    achievements: ["Taught 1000+ students", "Developed hands-on lab programs", "Achieved 95% placement rate"]
  }];
  const achievements = [{
    category: "Innovation Leadership",
    metrics: [{
      value: "5",
      label: "Innovation Labs"
    }, {
      value: "15+",
      label: "Patents Filed"
    }, {
      value: "3",
      label: "Industry Awards"
    }]
  }, {
    category: "Startup Mentorship",
    metrics: [{
      value: "100+",
      label: "Startups"
    }, {
      value: "$50M+",
      label: "Funding Raised"
    }, {
      value: "80%",
      label: "Success Rate"
    }]
  }, {
    category: "Agritech Innovation",
    metrics: [{
      value: "1000+",
      label: "Farms"
    }, {
      value: "40%",
      label: "Yield Increase"
    }, {
      value: "60%",
      label: "Water Savings"
    }]
  }, {
    category: "Business Growth",
    metrics: [{
      value: "300%",
      label: "Revenue Growth"
    }, {
      value: "8",
      label: "New Markets"
    }, {
      value: "$25M+",
      label: "Revenue Generated"
    }]
  }];
  const awards = [{
    title: "Innovation Excellence Award",
    organization: "AgriTech India Forum",
    year: "2023",
    description: "For outstanding contribution to sustainable agriculture technology"
  }, {
    title: "Startup Mentor of the Year",
    organization: "Indian Startup Council",
    year: "2022",
    description: "Recognizing exceptional mentorship and startup ecosystem contribution"
  }, {
    title: "Digital Transformation Leader",
    organization: "Tech Leadership Awards",
    year: "2021",
    description: "For driving digital innovation across multiple industry verticals"
  }, {
    title: "Excellence in Education Technology",
    organization: "EdTech Association India",
    year: "2020",
    description: "For innovative contributions to educational technology advancement"
  }];
  return <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white">
                Ravi Rautela
              </h1>
              <div className="flex flex-wrap justify-center gap-3 text-lg md:text-2xl">
                <Badge variant="secondary" className="px-4 py-2 text-base">Visionary Leader</Badge>
                <Badge variant="secondary" className="px-4 py-2 text-base">Startup Mentor</Badge>
                <Badge variant="secondary" className="px-4 py-2 text-base">Agritech & EdTech Innovator</Badge>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Driving innovation at the intersection of technology, agriculture, and education with <span className="font-bold text-accent">25+ years</span> of transformative leadership
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => {
              const Icon = stat.icon;
              return <div key={index} className="glass-card p-6 rounded-2xl text-center hover-lift">
                    <Icon className="w-8 h-8 mx-auto mb-3 text-accent" />
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>;
            })}
            </div>

            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Button size="lg" className="gap-2" onClick={() => document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                <Mail className="w-5 h-5" />
                Get In Touch
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-white/10 text-white border-white/20 hover:bg-white/20" asChild>
                <a href="https://www.linkedin.com/in/ravi-rautela-b8a34643" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="gradient-text">Transformational Leadership</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over <strong>25 years of distinguished experience</strong> spanning education, technology, startups, and agritech innovation, Ravi Rautela stands as a visionary leader who transforms ideas into impactful realities.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently serving as <strong>Director – Innovation at MangosOrange Group</strong> and <strong>Founder & CEO of MangosOrange Agritech India Pvt. Ltd.</strong>, Ravi bridges the gap between cutting-edge technology and sustainable agricultural practices.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              His entrepreneurial journey is marked by successful ventures, innovative product incubations, and a passion for mentoring the next generation of leaders and entrepreneurs.
            </p>
            
            <blockquote className="glass-card p-8 rounded-2xl mt-12">
              <p className="text-xl italic text-muted-foreground mb-4">
                "Innovation happens at the intersection of technology, education, and agriculture – 
                where sustainable solutions meet real-world impact."
              </p>
              <footer className="text-sm font-semibold gradient-text">— Ravi Rautela</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="gradient-text mb-4">Core Expertise</h2>
            <p className="text-lg text-muted-foreground">
              A comprehensive skill set built through decades of hands-on experience in technology innovation, startup development, and transformational leadership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {expertise.map((item, index) => {
            const Icon = item.icon;
            return <Card key={index} className="hover-lift group">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">{item.description}</CardDescription>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* Professional Journey Section - Timeline */}
      <section id="journey" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="gradient-text mb-4 pb-2">Professional Journey</h2>
            <p className="text-lg text-muted-foreground">
              A progressive career spanning leadership roles across innovation, technology, agritech, and education sectors
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent -translate-x-1/2" />
              
              {experiences.map((exp, index) => <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-[calc(50%+2rem)]' : 'md:pl-[calc(50%+2rem)]'}`}>
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute top-8 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-glow z-10" />
                  
                  <Card className={`hover-lift ${exp.current ? 'border-primary shadow-primary' : ''} ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <CardHeader>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 justify-between flex-wrap">
                          <CardTitle className="text-xl flex items-center gap-2">
                            {exp.role}
                            {exp.current && <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                                Current
                              </Badge>}
                          </CardTitle>
                          <span className="text-sm font-medium text-muted-foreground px-3 py-1 rounded-full bg-muted">
                            {exp.period}
                          </span>
                        </div>
                        <CardDescription className="text-base font-semibold text-foreground/80">
                          {exp.company}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Key Achievements:</h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>)}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements & Impact */}
      <section id="achievements" className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="gradient-text mb-4">Achievements & Impact</h2>
            <p className="text-lg text-muted-foreground">
              Measurable contributions across innovation, mentorship, agritech advancement, and transformational leadership initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => <Card key={index} className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-xl mb-6">{achievement.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {achievement.metrics.map((metric, idx) => <div key={idx} className="text-center">
                        <div className="text-3xl font-bold gradient-text mb-1">{metric.value}</div>
                        <div className="text-sm text-muted-foreground">{metric.label}</div>
                      </div>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section id="awards" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="gradient-text mb-4 pb-2">Awards & Recognition</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {awards.map((award, index) => <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{award.title}</CardTitle>
                      <CardDescription className="font-medium text-foreground/70">{award.organization}</CardDescription>
                    </div>
                    <Badge variant="outline" className="text-lg px-3 py-1">{award.year}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{award.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Connect</h2>
            <p className="text-xl text-white/90">
              Ready to explore innovation opportunities, startup mentorship, or strategic partnerships?
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="glass-card border-white/20 hover-lift">
                <CardHeader>
                  <Mail className="w-8 h-8 text-accent mb-2" />
                  <CardTitle className="text-orange-500">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="mailto:ravi@mangosorange.com" className="text-accent hover:text-accent/80 transition-colors">
                    ravi@mangosorange.com
                  </a>
                </CardContent>
              </Card>

              <Card className="glass-card border-white/20 hover-lift">
                <CardHeader>
                  <Phone className="w-8 h-8 text-accent mb-2" />
                  <CardTitle className="text-orange-500">Mobile</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="tel:+919910018925" className="text-accent hover:text-accent/80 transition-colors">
                    +91-9910018925
                  </a>
                </CardContent>
              </Card>

              <Card className="glass-card border-white/20 hover-lift">
                <CardHeader>
                  <Linkedin className="w-8 h-8 text-accent mb-2" />
                  <CardTitle className="text-orange-500">LinkedIn</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="https://www.linkedin.com/in/ravi-rautela-b8a34643" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">
                    Connect on LinkedIn
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 justify-center mt-12">
              <Button size="lg" variant="secondary" className="gap-2" asChild>
                <a href="mailto:ravi@mangosorange.com">
                  <Mail className="w-5 h-5" />
                  Send Message
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-white/10 text-white border-white/20 hover:bg-white/20" asChild>
                <a href="tel:+919910018925">
                  <Phone className="w-5 h-5" />
                  Schedule Call
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Portfolio;
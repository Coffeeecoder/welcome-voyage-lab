import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const courses = [
  {
    title: "Full Stack Development Masterclass",
    description: "Master React, Node.js, and database design in this comprehensive course",
    level: "Intermediate",
    duration: "12 weeks",
    students: 1250,
    rating: 4.8,
    subject: "Full Stack Development",
  },
  {
    title: "UI/UX Design Fundamentals",
    description: "Learn design thinking, wireframing, prototyping, and user research",
    level: "Beginner",
    duration: "8 weeks",
    students: 890,
    rating: 4.9,
    subject: "UI/UX Design",
  },
  {
    title: "Data Science & Analytics",
    description: "Python, machine learning, and data visualization for beginners",
    level: "Beginner",
    duration: "10 weeks",
    students: 2100,
    rating: 4.7,
    subject: "Data Science",
  },
  {
    title: "Mobile App Development",
    description: "Build cross-platform mobile apps with React Native",
    level: "Intermediate",
    duration: "10 weeks",
    students: 750,
    rating: 4.8,
    subject: "Mobile Development",
  },
];

const Courses = () => {
  const [selectedLevel, setSelectedLevel] = useState<string>("All");
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);

  const levelOptions = [
    { label: "All", value: "All" },
    { label: "Beginner", value: "Beginner" },
    { label: "Intermediate", value: "Intermediate" },
    { label: "Advanced", value: "Advanced" },
  ];

  const subjectOptions = [
    "Full Stack Development",
    "UI/UX Design", 
    "Data Science",
    "Mobile Development",
  ];

  const toggleSubject = (subject: string) => {
    setSelectedSubjects(prev => 
      prev.includes(subject) 
        ? prev.filter(s => s !== subject)
        : [...prev, subject]
    );
  };

  const filteredCourses = courses.filter(course => {
    const levelMatch = selectedLevel === "All" || course.level === selectedLevel;
    const subjectMatch = selectedSubjects.length === 0 || selectedSubjects.includes(course.subject);
    return levelMatch && subjectMatch;
  });

  return (
    <section id="courses" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-5 relative z-10">
          <h2 className="gradient-text pb-2">Courses by Sir</h2>
          <p className="text-lg text-muted-foreground">
            Learn from industry experts with structured courses designed for your success
          </p>
        </div>

        {/* Filters */}
        <div className="space-y-6 mb-12">
          {/* Difficulty Level Filter */}
          <div className="text-center">
            <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">Difficulty Level</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {levelOptions.map((option) => (
                <Button
                  key={option.value}
                  size="sm"
                  variant={selectedLevel === option.value ? "default" : "outline"}
                  onClick={() => setSelectedLevel(option.value)}
                  className={selectedLevel === option.value ? "bg-gradient-primary hover:shadow-primary" : ""}
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Subject Filter */}
          <div className="text-center">
            <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">Subjects</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {subjectOptions.map((subject) => (
                <Button
                  key={subject}
                  size="sm"
                  variant={selectedSubjects.includes(subject) ? "default" : "outline"}
                  onClick={() => toggleSubject(subject)}
                  className={selectedSubjects.includes(subject) ? "bg-gradient-primary hover:shadow-primary" : ""}
                >
                  {subject}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[400px]">
          {filteredCourses.map((course, index) => (
            <div key={index} className="glass-card rounded-xl p-8 hover-lift group animate-fade-in">
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-primary-foreground" />
                </div>
                <Badge variant="secondary">{course.level}</Badge>
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {course.title}
              </h3>
              <p className="text-muted-foreground mb-6">{course.description}</p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-accent text-accent" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-muted-foreground text-sm">(1000+ reviews)</span>
                </div>
              </div>

              <Button className="w-full bg-gradient-primary hover:shadow-primary" asChild>
                <Link to="/courses/enroll">
                  Enroll Now
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button size="lg" variant="outline" className="group" asChild>
            <Link to="/courses">
              View All Courses
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;

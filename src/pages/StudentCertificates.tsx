import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Award, Download, Share2, Search, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const StudentCertificates = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const certificates = [
    {
      id: 1,
      name: "Leadership & Team Management",
      type: "Course Completion",
      issueDate: "2024-01-15",
      status: "available",
      description: "Successfully completed the Leadership & Team Management course with distinction",
    },
    {
      id: 2,
      name: "Tech Workshop - Web Development",
      type: "Event Participation",
      issueDate: "2024-01-20",
      status: "available",
      description: "Participated in and completed the Tech Workshop on Web Development",
    },
    {
      id: 3,
      name: "AWS Cloud Architecture Mastery",
      type: "Course In Progress",
      issueDate: null,
      status: "pending",
      description: "Complete the course to earn your certificate (30% complete)",
    },
  ];

  const stats = [
    { label: "Total Certificates", value: 2, icon: Award },
    { label: "Pending", value: 1, icon: Award },
    { label: "LinkedIn Shared", value: 1, icon: Share2 },
  ];

  const filteredCertificates = certificates.filter(cert =>
    cert.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/dashboard/student")}
                className="mb-4"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                My <span className="gradient-text">Certificates</span>
              </h1>
              <p className="text-muted-foreground">
                View and manage your earned certificates
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                        <p className="text-2xl font-bold">{stat.value}</p>
                      </div>
                      <stat.icon className="h-8 w-8 text-primary" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Search */}
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search certificates..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Certificates Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredCertificates.map((cert) => (
                <Card key={cert.id} className="glass-card">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{cert.name}</CardTitle>
                        <Badge
                          variant={cert.status === "available" ? "default" : "secondary"}
                        >
                          {cert.type}
                        </Badge>
                      </div>
                      <Award className="h-8 w-8 text-primary ml-2" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {cert.description}
                    </p>
                    
                    {cert.issueDate && (
                      <div className="flex items-center justify-between text-sm mb-4">
                        <span className="text-muted-foreground">Issue Date</span>
                        <span className="font-medium">{cert.issueDate}</span>
                      </div>
                    )}

                    {cert.status === "available" ? (
                      <div className="flex gap-2">
                        <Button variant="outline" className="flex-1">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Share2 className="h-4 w-4 mr-2" />
                          Share on LinkedIn
                        </Button>
                      </div>
                    ) : (
                      <Button variant="outline" className="w-full" disabled>
                        Certificate Pending
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredCertificates.length === 0 && (
              <Card className="p-12">
                <div className="text-center">
                  <Award className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No certificates found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search or complete more courses to earn certificates
                  </p>
                </div>
              </Card>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StudentCertificates;

import { Github, Linkedin, Mail, MapPin, Phone, Code, Database, Cloud, Gamepad2, Users, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Index = () => {
  const skills = [
    { category: "Programming", items: ["PHP", "Java", "C", "C++", "C#", "Python", "JavaScript", "HTML5", "CSS3"] },
    { category: "Frameworks", items: ["React", "Node.js"] },
    { category: "Databases", items: ["MySQL", "PostgreSQL"] },
    { category: "Cloud & Tools", items: ["GCP", "Git", "Figma", "WordPress"] },
  ];

  const projects = [
    {
      title: "Municipal HR Management System",
      description: "Led a 5-person team to develop a comprehensive HR system using HTML/CSS/JS, Bootstrap, PHP, and database (MySQL). Created design waiver for deployment to local municipalities in the Philippines.",
      tech: ["PHP", "MySQL", "Bootstrap", "HTML/CSS", "JavaScript"],
      type: "Team Leadership",
      link: "https://kennethosorio91.github.io/Municipal-HR-Management-System/Landing%20Page/landing.html",
      embed: true,
      embedUrl: "https://kennethosorio91.github.io/Municipal-HR-Management-System/Landing%20Page/landing.html"
    },
    {
      title: "Gamified Pomodoro (Focus Fighter)",
      description: "Designed a gamified productivity application that combines the Pomodoro technique with RPG elements. Created comprehensive UI/UX design using Figma with focus on user engagement and motivation.",
      tech: ["Figma", "UI/UX Design", "Gamification", "User Research"],
      type: "Design Project",
      link: "https://www.figma.com/design/KJ6oqUFkSZoI9O6bULUOSd/HCI-Focus-Fighter?node-id=53-82&m=dev",
      embed: true,
      embedUrl: "https://embed.figma.com/proto/KJ6oqUFkSZoI9O6bULUOSd/HCI-Focus-Fighter?node-id=53-83&m=dev&scaling=scale-down&content-scaling=fixed&page-id=53%3A82&starting-point-node-id=53%3A83&embed-host=share"
    }
  ];

  const experience = [
    {
      title: "Curriculum Analyst (Cloud Solutions)",
      company: "Google Developer Student Clubs - PUP",
      period: "Dec 2024 - Present",
      description: "Researched and curated 12+ cloud computing topics for study sessions (GCP fundamentals, cloud security, serverless architecture). Co-facilitated monthly 'Cloud Study Jams' for 50+ participants. Structured learning paths based on Google Cloud Skills Boost."
    },
    {
      title: "Junior Web Developer",
      company: "PUP Microsoft Student Community",
      period: "Dec 2024 - Present",
      description: "Gained proficiency in responsive design principles. Learned version control using Git for collaborative coding. Developed problem-solving skills through hands-on projects."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-sm border-b border-slate-700 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-400">Kenneth P. Osorio</h1>
            <div className="flex gap-6">
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center gap-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Kenneth P. Osorio
                </h1>
                <p className="text-xl lg:text-2xl text-slate-300">
                  Full-Stack Developer & IT Student
                </p>
                <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                  Results-driven IT professional with expertise in building scalable solutions. 
                  Passionate about innovation through collaboration, with growing cloud proficiency 
                  and hands-on experience in real-world applications.
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white">
                  <a href="#projects">View Projects</a>
                </Button>
                <Button variant="outline" asChild className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
                  <a href="#contact">Get In Touch</a>
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Gen. Mariano Alvarez, Cavite</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+63 985 540 4917</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    {skillGroup.category === "Programming" && <Code className="w-5 h-5 text-blue-400" />}
                    {skillGroup.category === "Databases" && <Database className="w-5 h-5 text-green-400" />}
                    {skillGroup.category === "Cloud & Tools" && <Cloud className="w-5 h-5 text-purple-400" />}
                    {skillGroup.category === "Frameworks" && <Gamepad2 className="w-5 h-5 text-orange-400" />}
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-slate-600 text-slate-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-white">{project.title}</CardTitle>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="border-blue-500 text-blue-400">
                        {project.type}
                      </Badge>
                      {project.link && (
                        <Button asChild size="sm" variant="ghost" className="text-blue-400 hover:text-blue-300 hover:bg-slate-600/50">
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  <CardDescription className="text-slate-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} className="bg-blue-600/20 text-blue-300 border-blue-500/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.embed && (
                    <div className="mt-4">
                      <iframe 
                        style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} 
                        width="100%" 
                        height="300" 
                        src={project.embedUrl}
                        allowFullScreen
                        className="rounded-lg"
                        title={project.title}
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-6 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-white">{exp.title}</CardTitle>
                      <p className="text-blue-400 font-medium mt-1">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-blue-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                  <CardDescription className="text-slate-300">
                    {exp.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">Education</h2>
          <Card className="bg-slate-700/50 border-slate-600">
            <CardHeader>
              <CardTitle className="text-white">Diploma in Information Technology</CardTitle>
              <CardDescription className="text-slate-300">
                Polytechnic University of the Philippines
              </CardDescription>
              <div className="flex items-center gap-2 text-blue-400 text-sm">
                <Calendar className="w-4 h-4" />
                <span>Oct 2023 - Present</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-slate-300">
                <p><strong>Previous:</strong> Philippine Christian University (Science and Technology Track)</p>
                <p><strong>Achievements:</strong> Consistent President's Lister, maintained top academic standing</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">Let's Connect</h2>
          <p className="text-slate-300 mb-8 text-lg">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
              <a href="mailto:kennethtosorio@gmail.com" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email Me
              </a>
            </Button>
            
            <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
              <a href="https://linkedin.com/in/kenneth-osorio-4b0a042b1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
            
            <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
              <a href="https://github.com/kennethosorio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>&copy; 2024 Kenneth P. Osorio. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;


import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-slate-900 text-white">
      <!-- Navigation -->
      <nav class="nav fixed top-0 left-0 right-0 bg-slate-900/90 backdrop-blur-sm z-50 border-b border-slate-800">
        <div class="nav-content max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div class="text-xl font-bold text-blue-400">John Doe</div>
          <div class="nav-links flex gap-8">
            <a href="#about" class="nav-link text-slate-300 hover:text-blue-400 transition-colors">About</a>
            <a href="#experience" class="nav-link text-slate-300 hover:text-blue-400 transition-colors">Experience</a>
            <a href="#projects" class="nav-link text-slate-300 hover:text-blue-400 transition-colors">Projects</a>
            <a href="#education" class="nav-link text-slate-300 hover:text-blue-400 transition-colors">Education</a>
            <a href="#skills" class="nav-link text-slate-300 hover:text-blue-400 transition-colors">Skills</a>
            <a href="#contact" class="nav-link text-slate-300 hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <!-- Hero Section -->
      <section class="hero min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
        <div class="text-center">
          <h1 class="hero-name text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            John Doe
          </h1>
          <p class="text-xl md:text-2xl text-slate-300 mb-8">Full Stack Developer & Technology Enthusiast</p>
          <div class="flex gap-4 justify-center">
            <a href="#contact" class="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors">
              Get In Touch
            </a>
            <a href="#projects" class="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              View Projects
            </a>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="py-20 px-6">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-12 text-blue-400">About Me</h2>
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p class="text-lg text-slate-300 mb-6">
                I'm a passionate full-stack developer with 5+ years of experience building scalable web applications. 
                I love creating efficient, user-friendly solutions that solve real-world problems.
              </p>
              <p class="text-lg text-slate-300 mb-6">
                My expertise spans modern web technologies including React, Node.js, Python, and cloud platforms. 
                I'm always eager to learn new technologies and tackle challenging projects.
              </p>
              <div class="flex gap-4">
                <a href="mailto:john@example.com" class="text-blue-400 hover:text-blue-300">Email</a>
                <a href="https://linkedin.com/in/johndoe" class="text-blue-400 hover:text-blue-300">LinkedIn</a>
                <a href="https://github.com/johndoe" class="text-blue-400 hover:text-blue-300">GitHub</a>
              </div>
            </div>
            <div class="bg-slate-800 p-8 rounded-lg">
              <h3 class="text-xl font-semibold mb-4 text-blue-400">Quick Facts</h3>
              <ul class="space-y-2 text-slate-300">
                <li>🎓 Computer Science Graduate</li>
                <li>💼 5+ Years Experience</li>
                <li>🌍 Based in San Francisco</li>
                <li>☕ Coffee Enthusiast</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Experience Section -->
      <section id="experience" class="py-20 px-6 bg-slate-800/50">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-12 text-blue-400">Experience</h2>
          <div class="space-y-8">
            <div class="experience-card bg-slate-800 p-6 rounded-lg border border-slate-700">
              <div class="flex justify-between items-start mb-4">
                <div>
                  <h3 class="text-xl font-semibold text-blue-400">Senior Full Stack Developer</h3>
                  <p class="text-lg text-slate-300">TechCorp Inc.</p>
                </div>
                <span class="text-slate-400">2021 - Present</span>
              </div>
              <p class="text-slate-300 mb-4">
                Lead development of scalable web applications serving 100k+ users. Architected microservices 
                infrastructure and mentored junior developers.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">React</span>
                <span class="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">Node.js</span>
                <span class="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">AWS</span>
              </div>
            </div>
            
            <div class="experience-card bg-slate-800 p-6 rounded-lg border border-slate-700">
              <div class="flex justify-between items-start mb-4">
                <div>
                  <h3 class="text-xl font-semibold text-blue-400">Full Stack Developer</h3>
                  <p class="text-lg text-slate-300">StartupXYZ</p>
                </div>
                <span class="text-slate-400">2019 - 2021</span>
              </div>
              <p class="text-slate-300 mb-4">
                Built the entire web platform from scratch using modern technologies. Implemented real-time 
                features and optimized performance.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">Vue.js</span>
                <span class="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">Python</span>
                <span class="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects" class="py-20 px-6">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-12 text-blue-400">Featured Projects</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="project-card bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
              <div class="h-48 bg-gradient-to-br from-blue-600 to-purple-600"></div>
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-2 text-blue-400">E-Commerce Platform</h3>
                <p class="text-slate-300 mb-4">
                  Full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.
                </p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-sm">React</span>
                  <span class="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-sm">Node.js</span>
                  <span class="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-sm">MongoDB</span>
                </div>
                <div class="flex gap-4">
                  <a href="#" class="text-blue-400 hover:text-blue-300">Live Demo</a>
                  <a href="#" class="text-blue-400 hover:text-blue-300">GitHub</a>
                </div>
              </div>
            </div>

            <div class="project-card bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
              <div class="h-48 bg-gradient-to-br from-green-600 to-blue-600"></div>
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-2 text-blue-400">Task Management App</h3>
                <p class="text-slate-300 mb-4">
                  Collaborative task management application with real-time updates, team collaboration, and analytics.
                </p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-sm">Vue.js</span>
                  <span class="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-sm">Firebase</span>
                  <span class="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-sm">Tailwind</span>
                </div>
                <div class="flex gap-4">
                  <a href="#" class="text-blue-400 hover:text-blue-300">Live Demo</a>
                  <a href="#" class="text-blue-400 hover:text-blue-300">GitHub</a>
                </div>
              </div>
            </div>

            <div class="project-card bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
              <div class="h-48 bg-gradient-to-br from-purple-600 to-pink-600"></div>
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-2 text-blue-400">Weather Dashboard</h3>
                <p class="text-slate-300 mb-4">
                  Beautiful weather dashboard with forecasts, maps, and detailed weather analytics for multiple cities.
                </p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-sm">React</span>
                  <span class="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-sm">Chart.js</span>
                  <span class="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-sm">API</span>
                </div>
                <div class="flex gap-4">
                  <a href="#" class="text-blue-400 hover:text-blue-300">Live Demo</a>
                  <a href="#" class="text-blue-400 hover:text-blue-300">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Education Section -->
      <section id="education" class="py-20 px-6 bg-slate-800/50">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-12 text-blue-400">Education</h2>
          <div class="space-y-8">
            <div class="education-card bg-slate-800 p-6 rounded-lg border border-slate-700">
              <div class="flex justify-between items-start mb-4">
                <div>
                  <h3 class="text-xl font-semibold text-blue-400">Bachelor of Science in Computer Science</h3>
                  <p class="text-lg text-slate-300">University of California, Berkeley</p>
                </div>
                <span class="text-slate-400">2015 - 2019</span>
              </div>
              <p class="text-slate-300">
                Graduated Magna Cum Laude with focus on Software Engineering and Data Structures. 
                Active member of the Computer Science Club and hackathon organizer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section id="skills" class="py-20 px-6">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-12 text-blue-400">Skills & Technologies</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="skill-card bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 class="text-lg font-semibold mb-4 text-blue-400">Frontend</h3>
              <div class="space-y-2">
                <div class="flex justify-between">
                  <span class="text-slate-300">React</span>
                  <span class="text-blue-400">Expert</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-300">Vue.js</span>
                  <span class="text-blue-400">Advanced</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-300">TypeScript</span>
                  <span class="text-blue-400">Advanced</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-300">Tailwind CSS</span>
                  <span class="text-blue-400">Expert</span>
                </div>
              </div>
            </div>

            <div class="skill-card bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 class="text-lg font-semibold mb-4 text-blue-400">Backend</h3>
              <div class="space-y-2">
                <div class="flex justify-between">
                  <span class="text-slate-300">Node.js</span>
                  <span class="text-blue-400">Expert</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-300">Python</span>
                  <span class="text-blue-400">Advanced</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-300">PostgreSQL</span>
                  <span class="text-blue-400">Advanced</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-300">MongoDB</span>
                  <span class="text-blue-400">Advanced</span>
                </div>
              </div>
            </div>

            <div class="skill-card bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 class="text-lg font-semibold mb-4 text-blue-400">DevOps & Tools</h3>
              <div class="space-y-2">
                <div class="flex justify-between">
                  <span class="text-slate-300">AWS</span>
                  <span class="text-blue-400">Advanced</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-300">Docker</span>
                  <span class="text-blue-400">Advanced</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-300">Git</span>
                  <span class="text-blue-400">Expert</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-300">CI/CD</span>
                  <span class="text-blue-400">Advanced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="py-20 px-6 bg-slate-800/50">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-8 text-blue-400">Get In Touch</h2>
          <p class="text-xl text-slate-300 mb-8">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <div class="flex flex-wrap justify-center gap-6">
            <a href="mailto:john@example.com" 
               class="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors">
              Send Email
            </a>
            <a href="https://linkedin.com/in/johndoe" 
               class="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/johndoe" 
               class="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="py-8 px-6 border-t border-slate-800">
        <div class="max-w-4xl mx-auto text-center text-slate-400">
          <p>&copy; 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'portfolio';

  ngOnInit() {
    // Component initialization
  }

  ngAfterViewInit() {
    // Initialize all the interactive features after view loads
    this.initSmoothScrolling();
    this.initActiveNavHighlight();
    this.initAnimations();
    this.initTypingEffect();
    this.initParallax();
    this.initMobileNav();
  }

  private initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = (e.target as HTMLElement).getAttribute('href');
        const targetSection = document.querySelector(targetId!);
        
        if (targetSection) {
          const navHeight = document.querySelector('.nav')!.getBoundingClientRect().height;
          const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  private initActiveNavHighlight() {
    const updateActiveNavLink = () => {
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.nav-link');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id');
        const correspondingNavLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach(link => link.classList.remove('active'));
          if (correspondingNavLink) {
            correspondingNavLink.classList.add('active');
          }
        }
      });
    };
    
    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink();
  }

  private initAnimations() {
    const animateOnScroll = () => {
      const cards = document.querySelectorAll('.skill-card, .project-card, .experience-card, .education-card');
      
      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (cardTop < windowHeight - 100) {
          (card as HTMLElement).style.opacity = '1';
          (card as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    };
    
    // Initialize cards with fade-in effect
    const cards = document.querySelectorAll('.skill-card, .project-card, .experience-card, .education-card');
    cards.forEach(card => {
      (card as HTMLElement).style.opacity = '0';
      (card as HTMLElement).style.transform = 'translateY(20px)';
      (card as HTMLElement).style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
  }

  private initTypingEffect() {
    const heroName = document.querySelector('.hero-name');
    if (heroName) {
      const originalText = heroName.textContent || '';
      heroName.textContent = '';
      
      let i = 0;
      const typeWriter = () => {
        if (i < originalText.length) {
          heroName.textContent += originalText.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
        }
      };
      
      setTimeout(typeWriter, 500);
    }
  }

  private initParallax() {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('.hero') as HTMLElement;
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    });
  }

  private initMobileNav() {
    const createMobileNav = () => {
      if (window.innerWidth <= 768) {
        if (!document.querySelector('.mobile-menu-btn')) {
          const navContent = document.querySelector('.nav-content');
          const mobileBtn = document.createElement('button');
          mobileBtn.className = 'mobile-menu-btn';
          mobileBtn.innerHTML = '☰';
          mobileBtn.style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            display: block;
          `;
          
          navContent?.appendChild(mobileBtn);
          
          mobileBtn.addEventListener('click', () => {
            const navLinks = document.querySelector('.nav-links') as HTMLElement;
            if (navLinks.style.display === 'flex') {
              navLinks.style.display = 'none';
            } else {
              navLinks.style.display = 'flex';
              navLinks.style.flexDirection = 'column';
              navLinks.style.position = 'absolute';
              navLinks.style.top = '100%';
              navLinks.style.left = '0';
              navLinks.style.right = '0';
              navLinks.style.background = 'rgba(15, 23, 42, 0.95)';
              navLinks.style.padding = '1rem';
              navLinks.style.gap = '1rem';
            }
          });
        }
      }
    };
    
    createMobileNav();
    window.addEventListener('resize', createMobileNav);
  }
}


// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Add click event listeners for smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Calculate offset for fixed navigation
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Highlight active navigation link based on scroll position
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const correspondingNavLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all nav links
                navLinks.forEach(link => link.classList.remove('active'));
                // Add active class to current nav link
                if (correspondingNavLink) {
                    correspondingNavLink.classList.add('active');
                }
            }
        });
    }
    
    // Listen for scroll events
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Call once to set initial state
    updateActiveNavLink();
    
    // Add animation on scroll for cards
    function animateOnScroll() {
        const cards = document.querySelectorAll('.skill-card, .project-card, .experience-card, .education-card');
        
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight - 100) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initialize cards with fade-in effect
    const cards = document.querySelectorAll('.skill-card, .project-card, .experience-card, .education-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Listen for scroll events for animations
    window.addEventListener('scroll', animateOnScroll);
    
    // Call once to animate visible cards
    animateOnScroll();
    
    // Mobile navigation toggle (for future enhancement)
    const createMobileNav = () => {
        if (window.innerWidth <= 768) {
            // Add mobile menu button if not exists
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
                
                navContent.appendChild(mobileBtn);
                
                // Toggle mobile menu
                mobileBtn.addEventListener('click', () => {
                    const navLinks = document.querySelector('.nav-links');
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
    
    // Call on load and resize
    createMobileNav();
    window.addEventListener('resize', createMobileNav);
    
    // Add typing effect to hero title (optional enhancement)
    const heroName = document.querySelector('.hero-name');
    if (heroName) {
        const originalText = heroName.textContent;
        heroName.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                heroName.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }
    
    // Add parallax effect to hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });
    
    // Add click tracking for external links (for analytics if needed)
    const externalLinks = document.querySelectorAll('a[href^="http"], a[href^="mailto"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('External link clicked:', this.href);
            // Here you could add analytics tracking code
        });
    });
    
    // Add loading animation
    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
});

// Add active nav link styles
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #60a5fa !important;
        font-weight: 600;
    }
    
    @media (max-width: 768px) {
        .nav-links {
            display: none !important;
        }
    }
`;
document.head.appendChild(style);

import React, { useEffect, useRef } from 'react';

const ParticleEffect: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const particleCount = 15;
    const particles: HTMLDivElement[] = [];
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random size between 5 and 25px
      const size = Math.random() * 20 + 5;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random starting position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Random opacity
      particle.style.opacity = `${Math.random() * 0.5 + 0.1}`;
      
      // Add to container and keep reference
      container.appendChild(particle);
      particles.push(particle);
      
      // Start animation
      animateParticle(particle);
    }
    
    function animateParticle(particle: HTMLDivElement) {
      // Random animation duration between 10 and 30 seconds
      const duration = Math.random() * 20000 + 10000;
      
      // Random target position
      const targetX = Math.random() * 100;
      const targetY = Math.random() * 100;
      
      // Current position
      const startX = parseFloat(particle.style.left);
      const startY = parseFloat(particle.style.top);
      
      let startTime: number;
      
      function moveParticle(timestamp: number) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Simple easing
        const easing = 0.5 - Math.cos(progress * Math.PI) / 2;
        
        // Update position
        const currentX = startX + (targetX - startX) * easing;
        const currentY = startY + (targetY - startY) * easing;
        
        particle.style.left = `${currentX}%`;
        particle.style.top = `${currentY}%`;
        
        if (progress < 1) {
          requestAnimationFrame(moveParticle);
        } else {
          // Reset animation when complete
          animateParticle(particle);
        }
      }
      
      requestAnimationFrame(moveParticle);
    }
    
    return () => {
      // Clean up particles on unmount
      particles.forEach(particle => {
        if (container.contains(particle)) {
          container.removeChild(particle);
        }
      });
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};

export default ParticleEffect;
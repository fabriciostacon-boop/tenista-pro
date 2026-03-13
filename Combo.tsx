@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

@layer base {
  :root {
    --background: 0 0% 4%;
    --foreground: 0 0% 100%;
    --card: 0 0% 8%;
    --card-foreground: 0 0% 100%;
    --popover: 0 0% 8%;
    --popover-foreground: 0 0% 100%;
    --primary: 76 100% 50%;
    --primary-foreground: 0 0% 0%;
    --secondary: 76 90% 53%;
    --secondary-foreground: 0 0% 0%;
    --muted: 0 0% 12%;
    --muted-foreground: 0 0% 63%;
    --accent: 76 100% 50%;
    --accent-foreground: 0 0% 0%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 16%;
    --input: 0 0% 16%;
    --ring: 76 100% 50%;
    --radius: 0.75rem;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    @apply bg-[#0A0A0A] text-white antialiased;
    font-family: 'Inter', system-ui, sans-serif;
  }
}

@layer components {
  .text-gradient {
    @apply bg-clip-text text-transparent;
    background-image: linear-gradient(135deg, #CCFF00 0%, #9EF916 100%);
  }
  
  .bg-gradient-primary {
    background: linear-gradient(135deg, #CCFF00 0%, #9EF916 100%);
  }
  
  .glow-primary {
    box-shadow: 0 0 20px rgba(204, 255, 0, 0.3), 0 0 40px rgba(204, 255, 0, 0.1);
  }
  
  .glow-primary-strong {
    box-shadow: 0 0 30px rgba(204, 255, 0, 0.5), 0 0 60px rgba(204, 255, 0, 0.2);
  }
  
  .border-glow {
    border: 1px solid rgba(204, 255, 0, 0.3);
  }
  
  .card-hover {
    @apply transition-all duration-300;
  }
  
  .card-hover:hover {
    @apply -translate-y-2;
    border-color: rgba(204, 255, 0, 0.3);
    box-shadow: 0 8px 30px rgba(204, 255, 0, 0.1);
  }
}

@layer utilities {
  .animation-delay-100 {
    animation-delay: 100ms;
  }
  .animation-delay-200 {
    animation-delay: 200ms;
  }
  .animation-delay-300 {
    animation-delay: 300ms;
  }
  .animation-delay-400 {
    animation-delay: 400ms;
  }
  .animation-delay-500 {
    animation-delay: 500ms;
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #0A0A0A;
}

::-webkit-scrollbar-thumb {
  background: #333;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #CCFF00;
}

/* Floating orbs animation */
@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(20px, -30px) scale(1.05);
  }
  50% {
    transform: translate(-10px, 20px) scale(0.95);
  }
  75% {
    transform: translate(-20px, -10px) scale(1.02);
  }
}

@keyframes float-slow {
  0%, 100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(30px, -40px);
  }
}

@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(204, 255, 0, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(204, 255, 0, 0.6);
  }
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.animate-float {
  animation: float 20s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 25s ease-in-out infinite;
}

.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

/* Selection color */
::selection {
  background: rgba(204, 255, 0, 0.3);
  color: white;
}

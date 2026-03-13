/* App-specific styles */

/* Ensure smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Prevent horizontal scroll */
body {
  overflow-x: hidden;
}

/* Custom focus styles */
*:focus-visible {
  outline: 2px solid #CCFF00;
  outline-offset: 2px;
}

/* Button hover lift effect */
button:not(:disabled):hover {
  transform: translateY(-1px);
}

button:not(:disabled):active {
  transform: translateY(0);
}

/* Card transitions */
.card-hover {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Gradient text animation */
@keyframes gradient-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.text-gradient-animated {
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
}

/* Loading skeleton */
.skeleton {
  background: linear-gradient(
    90deg,
    #141414 25%,
    #1E1E1E 50%,
    #141414 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

/* Mobile touch improvements */
@media (hover: none) {
  .card-hover:hover {
    transform: none;
  }
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

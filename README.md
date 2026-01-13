# Neuro_Linker

Student Name: Pingul, Michael Luis Benedick R.
Student ID: 111806
Section: 2A - IT ELEC 3

Live Website URL: [We will generate this in Step 2]

Project Title: Neuro-Linker Landing Page

Project Description: "Neuro-Linker" is a conceptual high-fidelity landing page for a fictional neural interface wearable. The design merges a sleek, industrial aesthetic with a high-contrast cyberpunk visual style, featuring a "Neo-Tokyo" narrative. Built using semantic HTML5 and advanced CSS3, the project emphasizes a mobile-responsive architecture. The interface utilizes a dark mode color palette (neon green, pink, and blue against a dark background) and interactive JavaScript elements to simulate a futuristic operating system environment.

External Resources:

Typography: Google Fonts implementation utilizing "Orbitron" (weights 400, 700) for headings and "Rajdhani" (weights 300, 500, 700) for body text.

Icons: Font Awesome 6.4.0 library used for UI elements (e.g., the brain/chip SVG logo in the header).

Visual Assets: High-resolution cyberpunk and tech-themed photography sourced from Pexels and Unsplash, integrated via direct URL.

Technical Highlights & Features:

Responsive Architecture:

CSS Grid: Implemented in the .features-grid to create a responsive, card-based layout for the "System Capabilities" section that adapts to screen width (repeat(auto-fit, minmax(250px, 1fr))).

Flexbox: Used extensively for the sticky navigation header, hero section alignment, and the hardware specs container to ensure fluid positioning across devices.

Mobile Menu: A JavaScript-driven slide-out navigation menu (.nav-links) that triggers on mobile viewports (max-width: 768px) with a custom hamburger icon animation.

Interactive JavaScript Systems:

Dynamic Pricing Switch: A toggle event listener that updates pricing text (.dynamic-price) and billing period labels (.text-period) between monthly and yearly data attributes in real-time.

"Cyber-Modal" System: A custom modal overlay (#cyber-modal) that intercepts plan selection clicks. It injects specific HTML messages based on the button's data-msg attribute before triggering a final system alert() upon confirmation.

Console Easter Egg: A stylized console log message mimicking a system boot-up sequence.

Visual Effects:

Neon Aesthetics: Extensive use of CSS variables (--neon-green, --neon-pink, --neon-blue) for glowing borders, text shadows, and button hover states.

Glitch Effect: A CSS/HTML data-attribute setup (data-text) on the main heading to simulate digital distortion.

Backdrop Filter: Applied backdrop-filter: blur(4px) to the modal overlay for a modern, frosted-glass depth effect.
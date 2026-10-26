document.addEventListener('DOMContentLoaded', () => {
    // Animate progress bar in the card after a short delay
    setTimeout(() => {
        const progress = document.querySelector('.progress');
        if (progress) {
            progress.style.width = '85%';
        }
    }, 500);

    // Add subtle parallax effect to floating cards
    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual) {
        document.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 40;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 40;

            const mainCard = document.querySelector('.main-card');
            const card1 = document.querySelector('.card-1');
            const card2 = document.querySelector('.card-2');

            if (mainCard) mainCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) scale(1.02)`;
            if (card1) card1.style.transform = `translate(${xAxis * 1.5}px, ${yAxis * 1.5}px)`;
            if (card2) card2.style.transform = `translate(${xAxis * -1.5}px, ${yAxis * -1.5}px)`;
        });

        // Reset transform on mouse leave
        document.addEventListener('mouseleave', () => {
            const mainCard = document.querySelector('.main-card');
            const card1 = document.querySelector('.card-1');
            const card2 = document.querySelector('.card-2');
            
            if (mainCard) mainCard.style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
            if (card1) card1.style.transform = `translate(0px, 0px)`;
            if (card2) card2.style.transform = `translate(0px, 0px)`;
        });
    }

    // Map interaction toggle
    const mapWrapper = document.querySelector('.map-wrapper');
    const mapIframe = document.querySelector('.map-iframe');
    
    if (mapWrapper && mapIframe) {
        // Disable initially to allow page scrolling
        mapIframe.style.pointerEvents = 'none';
        
        // Enable map interactions on click
        mapWrapper.addEventListener('click', () => {
            mapIframe.style.pointerEvents = 'auto';
            mapWrapper.style.boxShadow = 'inset 0 0 0 3px #10b981'; // Add green highlight to show it's active
        });

        // Disable map interactions when mouse leaves the map area
        mapWrapper.addEventListener('mouseleave', () => {
            mapIframe.style.pointerEvents = 'none';
            mapWrapper.style.boxShadow = 'inset 0 0 20px rgba(0,0,0,0.5)'; // Reset highlight
        });
    }

    // Region Selector Logic
    const regionItems = document.querySelectorAll('.region-item');
    
    if (regionItems.length > 0 && mapIframe) {
        regionItems.forEach(item => {
            item.addEventListener('click', () => {
                // Remove active class from all
                regionItems.forEach(r => r.classList.remove('active'));
                
                // Add active class to clicked
                item.classList.add('active');
                
                // Get bbox data and update iframe
                const bbox = item.getAttribute('data-bbox');
                if (bbox) {
                    // OpenStreetMap export URL format
                    const newSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(bbox)}&layer=mapnik`;
                    mapIframe.src = newSrc;
                }
            });
        });
    }
    // Scramble Text Hover Effect (from hover.html)
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
    const scrambleElements = document.querySelectorAll('.logo span, .nav-links a');

    scrambleElements.forEach(element => {
        // Store original text
        const originalText = element.innerText;
        
        element.addEventListener('mouseover', () => {
            let iteration = 0;
            let interval = null;
            
            clearInterval(interval);
            
            // Set monospace font during animation to match 'Brute Force' style
            const originalFont = element.style.fontFamily;
            element.style.fontFamily = "'Courier New', Courier, monospace";
            
            interval = setInterval(() => {
                element.innerText = originalText
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return originalText[index];
                        }
                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("");

                if (iteration >= originalText.length) {
                    clearInterval(interval);
                    // Optionally reset font or keep it techy
                    // element.style.fontFamily = originalFont; 
                }

                iteration += 1 / 3;
            }, 30);
        });
        
        element.addEventListener('mouseleave', () => {
            // Restore original font/text immediately if mouse leaves early
            // element.style.fontFamily = "";
        });
    });

    const gotTheme = {
        background: '#070b09',
        surface: '#101a15',
        surfaceHigh: '#1c2b24',
        surfaceLow: '#070d0c',
        primary: '#2f4b3b',
        primaryGlow: '#6c8a5d',
        secondary: '#d9b15f',
        secondarySoft: '#f3d98d',
        tertiary: '#7d2b24',
        text: '#f6e8c9',
        textMuted: '#d0bb8b',
        border: 'rgba(217, 177, 95, 0.28)',
        shadow: 'rgba(0, 0, 0, 0.52)'
    };

    document.documentElement.style.setProperty('--background', gotTheme.background);
    document.documentElement.style.setProperty('--surface', gotTheme.surface);
    document.documentElement.style.setProperty('--surface-high', gotTheme.surfaceHigh);
    document.documentElement.style.setProperty('--surface-low', gotTheme.surfaceLow);
    document.documentElement.style.setProperty('--primary', gotTheme.primary);
    document.documentElement.style.setProperty('--primary-glow', gotTheme.primaryGlow);
    document.documentElement.style.setProperty('--secondary', gotTheme.secondary);
    document.documentElement.style.setProperty('--secondary-soft', gotTheme.secondarySoft);
    document.documentElement.style.setProperty('--tertiary', gotTheme.tertiary);
    document.documentElement.style.setProperty('--text', gotTheme.text);
    document.documentElement.style.setProperty('--text-muted', gotTheme.textMuted);
    document.documentElement.style.setProperty('--border', gotTheme.border);
    document.documentElement.style.setProperty('--shadow', gotTheme.shadow);

    const customThemeCSS = `
        :root {
            --background: ${gotTheme.background};
            --surface: ${gotTheme.surface};
            --surface-high: ${gotTheme.surfaceHigh};
            --surface-low: ${gotTheme.surfaceLow};
            --primary: ${gotTheme.primary};
            --primary-glow: ${gotTheme.primaryGlow};
            --secondary: ${gotTheme.secondary};
            --secondary-soft: ${gotTheme.secondarySoft};
            --tertiary: ${gotTheme.tertiary};
            --text: ${gotTheme.text};
            --text-muted: ${gotTheme.textMuted};
            --border: ${gotTheme.border};
            --shadow: ${gotTheme.shadow};
        }

        body {
            background:
                radial-gradient(circle at 18% 12%, rgba(69, 97, 69, 0.28), transparent 26%),
                radial-gradient(circle at 82% 20%, rgba(217, 177, 95, 0.14), transparent 24%),
                radial-gradient(circle at 30% 85%, rgba(125, 43, 36, 0.18), transparent 28%),
                linear-gradient(135deg, #060b09 0%, #0e1713 28%, #121d18 52%, #0a120f 100%);
            color: var(--text);
        }

        .bg-background {
            background-color: var(--background) !important;
        }

        .bg-surface-container,
        .bg-surface-container-low,
        .bg-surface-container-high,
        .bg-surface {
            background-color: var(--surface) !important;
        }

        .bg-surface-container-high,
        .bg-surface-container-highest {
            background-color: var(--surface-high) !important;
        }

        .bg-surface-container-low,
        .bg-surface-container-lowest {
            background-color: var(--surface-low) !important;
        }

        .bg-primary {
            background-color: var(--primary) !important;
        }

        .bg-secondary {
            background-color: var(--secondary) !important;
        }

        .bg-tertiary,
        .bg-error {
            background-color: var(--tertiary) !important;
        }

        .text-primary {
            color: var(--primary) !important;
        }

        .text-secondary {
            color: var(--secondary) !important;
        }

        .text-tertiary,
        .text-error {
            color: var(--tertiary) !important;
        }

        .text-on-surface,
        .text-white {
            color: var(--text) !important;
        }

        .text-on-surface-variant,
        .text-slate-400,
        .text-slate-500,
        .text-slate-300,
        .text-slate-200 {
            color: var(--text-muted) !important;
        }

        .text-on-primary {
            color: #0d120d !important;
        }

        .text-on-secondary {
            color: #1d1707 !important;
        }

        .text-on-tertiary {
            color: #fbe7dc !important;
        }

        .border-primary, .border-primary\/30, .border-outline-variant, .border-white\/5 {
            border-color: rgba(217, 177, 95, 0.30) !important;
        }

        .glass-panel {
            background: rgba(15, 21, 18, 0.8) !important;
            border: 1px solid rgba(217, 177, 95, 0.24) !important;
            box-shadow: 0 22px 42px rgba(0, 0, 0, 0.44) !important;
            backdrop-filter: blur(18px);
        }

        .hero-gradient {
            background:
                radial-gradient(circle at top right, rgba(217, 177, 95, 0.16), transparent 34%),
                radial-gradient(circle at bottom left, rgba(126, 155, 96, 0.12), transparent 28%),
                linear-gradient(135deg, rgba(7, 11, 9, 0.9), rgba(18, 29, 24, 0.92));
        }

        nav,
        .bg-black\/60,
        footer {
            background: rgba(7, 11, 9, 0.9) !important;
            border-color: rgba(217, 177, 95, 0.18) !important;
        }

        .nav-hover-link:hover,
        .nav-hover-link:focus {
            color: var(--secondary-soft) !important;
        }

        .bg-secondary-container,
        .bg-primary\/10,
        .bg-secondary\/10 {
            background-color: rgba(107, 138, 93, 0.18) !important;
        }

        .text-secondary-container,
        .text-secondary-container\/80 {
            color: var(--secondary) !important;
        }

        .bg-primary\/5,
        .bg-primary\/20,
        .bg-primary\/30 {
            background-color: rgba(47, 75, 59, 0.18) !important;
        }

        .shadow-\[0_8px_32px_0_rgba\(0\,0\,0\,0\.5\)\] {
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.42) !important;
        }

        .stock-line {
            stroke: var(--secondary) !important;
        }

        .bg-primary\/5.rounded-3xl.blur-3xl,
        .bg-primary\/10,
        .bg-secondary\/10 {
            filter: saturate(1.25);
        }

        a.bg-primary,
        button.bg-primary,
        .bg-primary.text-on-primary {
            box-shadow: 0 0 0 1px rgba(246, 232, 201, 0.1), 0 12px 26px rgba(47, 75, 59, 0.35);
        }

        .border-dashed {
            border-style: dashed !important;
        }
    `;

    const existingStyle = document.getElementById('got-theme-overrides');
    if (existingStyle) {
        existingStyle.remove();
    }

    const themeStyle = document.createElement('style');
    themeStyle.id = 'got-theme-overrides';
    themeStyle.textContent = customThemeCSS;
    document.head.appendChild(themeStyle);
});

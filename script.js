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
});

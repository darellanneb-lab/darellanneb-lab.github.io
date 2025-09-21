 // Gallery images array
        const images = [
            'ACT12_BERSAMIRA/g.jpg',
            'ACT12_BERSAMIRA/b.jpg',
            'ACT12_BERSAMIRA/c.jpg',
            'ACT12_BERSAMIRA/d.jpg',
            'ACT12_BERSAMIRA/e.jpg',
            'ACT12_BERSAMIRA/a.jpg',
            'ACT12_BERSAMIRA/f.jpg',
            'ACT12_BERSAMIRA/g.jpg',
            'ACT12_BERSAMIRA/b.jpg',
            'ACT12_BERSAMIRA/c.jpg',
            'ACT12_BERSAMIRA/d.jpg',
            'ACT12_BERSAMIRA/e.jpg',
            'ACT12_BERSAMIRA/a.jpg',
            'ACT12_BERSAMIRA/f.jpg',
        ];

        let currentImageIndex = 0;
        let isHexagonView = true;

        // Create floating particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 8 + 's';
                particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // Toggle between hexagon and grid view
        function toggleView() {
            const hexagonGallery = document.getElementById('hexagonGallery');
            const gridGallery = document.getElementById('gridGallery');
            
            if (isHexagonView) {
                hexagonGallery.style.display = 'none';
                gridGallery.classList.add('active');
                isHexagonView = false;
            } else {
                hexagonGallery.style.display = 'flex';
                gridGallery.classList.remove('active');
                isHexagonView = true;
            }
        }

        // Open modal with image
        function openModal(index) {
            currentImageIndex = index;
            const modal = document.getElementById('modal');
            const modalImage = document.getElementById('modalImage');
            
            modalImage.src = images[index];
            modal.classList.add('active');
            
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
        }

        // Close modal
        function closeModal() {
            const modal = document.getElementById('modal');
            modal.classList.remove('active');
            
            // Restore body scroll
            document.body.style.overflow = 'auto';
        }

        // Navigate to previous image
        function prevImage() {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            document.getElementById('modalImage').src = images[currentImageIndex];
        }

        // Navigate to next image
        function nextImage() {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            document.getElementById('modalImage').src = images[currentImageIndex];
        }

        // Scroll to top
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            const modal = document.getElementById('modal');
            if (modal.classList.contains('active')) {
                switch(e.key) {
                    case 'Escape':
                        closeModal();
                        break;
                    case 'ArrowLeft':
                        prevImage();
                        break;
                    case 'ArrowRight':
                        nextImage();
                        break;
                }
            }
        });

        // Close modal when clicking outside
        document.getElementById('modal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        // Initialize particles on load
        window.addEventListener('load', createParticles);

        // Add smooth scroll behavior
        document.documentElement.style.scrollBehavior = 'smooth';

          // Binary Rain Effect
        function createBinaryRain() {
            const container = document.getElementById('binaryRain');
            const characters = '01';
            const columns = Math.floor(window.innerWidth / 20);
            
            for (let i = 0; i < columns; i++) {
                const column = document.createElement('div');
                column.className = 'binary-column';
                column.style.left = (i * 20) + 'px';
                column.style.animationDuration = (Math.random() * 3 + 2) + 's';
                column.style.animationDelay = Math.random() * 2 + 's';
                
                let text = '';
                for (let j = 0; j < 20; j++) {
                    text += characters[Math.floor(Math.random() * characters.length)] + '<br>';
                }
                column.innerHTML = text;
                
                container.appendChild(column);
            }
        }

        // Initialize on load
        window.addEventListener('load', () => {
            createBinaryRain();
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Add click sound effect (optional)
        document.querySelectorAll('.nav-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                // You can add sound effect here if desired
            });
        });

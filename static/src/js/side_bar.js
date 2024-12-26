

document.addEventListener('DOMContentLoaded', function() {
    // Side-menu veya carousel'e hover olduğunda overlay gösterilir
    const sideMenu = document.querySelector('.side-menu');
    const overlay = document.querySelector('.overlay');
    
    if (sideMenu && overlay) {
        sideMenu.addEventListener('mouseenter', function() {
        overlay.style.display = 'block';
        });

        overlay.addEventListener('click', function() {
        overlay.style.display = 'none';
        });

        sideMenu.addEventListener('mouseleave', function() {
        overlay.style.display = 'none';
        });
    }

    // Carousel kaydırma işlevi
    function slideCarousel() {
        const carousels = document.querySelectorAll('.carousel');
        
        carousels.forEach(carousel => {
        const carouselInner = carousel.querySelector('.carousel-inner');
        const carouselItems = carousel.querySelectorAll('.carousel-item');
        const totalItems = carouselItems.length;
        
        if (totalItems === 0) return;

        let currentIndex = 0;
        const visibleItems = 4;
        
        for (let i = 0; i < visibleItems; i++) {
            if (carouselItems[i]) {
            const clone = carouselItems[i].cloneNode(true);
            carouselInner.appendChild(clone);
            }
        }

        setInterval(() => {
            currentIndex++;

            if (currentIndex === totalItems) {
            carouselInner.style.transition = 'none';
            currentIndex = 0;
            const resetOffset = -currentIndex * 190;
            carouselInner.style.transform = `translateX(${resetOffset}px)`;

            setTimeout(() => {
                carouselInner.style.transition = 'transform 0.5s ease';
            }, 0);
            } else {
            const offset = -currentIndex * 190;
            carouselInner.style.transform = `translateX(${offset}px)`;
            }
        }, 3000);
        });
    }

    slideCarousel();

    // Arrow tıklama işlevi ve animasyon
        const arrowElement = document.querySelector('.arrow');
        if (arrowElement) {
            // Tıklama ile sayfanın en üstüne kaydır
            arrowElement.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            console.log("Başa dön butonuna tıklandı");
            });
            
            let upInteractive = false;

            function autoToggle() {
            arrowElement.classList.toggle('auto');
            }

            arrowElement.addEventListener('mouseenter', function() {
            upInteractive = true;
            arrowElement.classList.remove('auto');
            });

            setInterval(function() {
            if (!upInteractive) {
                autoToggle();
            }
            }, 2000);
        }
});


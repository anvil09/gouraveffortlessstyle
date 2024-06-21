document.addEventListener('DOMContentLoaded', function () {
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        let index = 0;
        const slides = product.querySelectorAll('.slideshow img');
        
        function showNextSlide() {
            slides[index].classList.remove('active');
            index = (index + 1) % slides.length;
            slides[index].classList.add('active');
        }

        slides[index].classList.add('active');
        product.addEventListener('mouseover', () => {
            product.slideshowInterval = setInterval(showNextSlide, 2000);
        });

        product.addEventListener('mouseout', () => {
            clearInterval(product.slideshowInterval);
        });
    });
});


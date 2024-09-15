document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.getElementById('prevSlide');
    const nextButton = document.getElementById('nextSlide');
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showSlide(index) {
        items.forEach((item, i) => {
            item.classList.remove('active');
            if (i === index) {
                item.classList.add('active');
            }
        });
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        showSlide(currentIndex);
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showSlide(currentIndex);
    }

    nextButton.addEventListener('click', showNextSlide);
    prevButton.addEventListener('click', showPrevSlide);

    showSlide(currentIndex); // Show the first slide initially
});

// Navbar Toggle
document.getElementById('navbarToggler').addEventListener('click', function () {
    const navbarLinks = document.getElementById('navbarLinks');
    navbarLinks.classList.toggle('active');
});


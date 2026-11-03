document.addEventListener('DOMContentLoaded', () => {
    // Аккордеон (Прайс и FAQ)
    const accordions = document.querySelectorAll('.accordion__header');
    accordions.forEach(acc => {
        acc.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    // Кнопка "Показать ещё отзывы"
    const showMoreBtn = document.getElementById('showMoreReviews');
    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', () => {
            const hiddenReviews = document.querySelectorAll('.hidden-review');
            hiddenReviews.forEach(review => {
                review.style.display = 'block';
                // Небольшая анимация появления
                review.style.opacity = '0';
                setTimeout(() => {
                    review.style.transition = 'opacity 0.5s';
                    review.style.opacity = '1';
                }, 50);
            });
            showMoreBtn.style.display = 'none';
        });
    }

    // Плавный скролл для якорных ссылок (если добавите навигацию)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
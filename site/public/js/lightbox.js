document.addEventListener('DOMContentLoaded', function () {
    const photos = document.querySelectorAll('.photo');
    const lightbox = document.getElementById('lightbox');
    const lightboximg = document.getElementById('lightboximg');
    const closeBtn = document.querySelector('.close');

    photos.forEach(photo => {
        photo.addEventListener('click', function () {
            const img = this.querySelector('img');
            lightboximg.src = img.src;
            lightbox.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', function () {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', function (event) {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});

const imageSequence = document.getElementById('sequence-img');
const totalImages = 15;
let currentImageIndex = 0;

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = scrollPosition / maxScroll;
    const newIndex = Math.min(
        totalImages - 1,
        Math.max(0, Math.floor(scrollFraction * totalImages))
    );
    if (newIndex !== currentImageIndex) {
        currentImageIndex = newIndex;
        imageSequence.src = `JPEGSeq/img${currentImageIndex}.png`;
    }
});
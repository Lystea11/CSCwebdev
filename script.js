const imageSequence = document.getElementById('sequence-img');
const totalImages = 14;
let currentImageIndex = 0;
const lockPosition = 803;

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = Math.min(1, scrollPosition / maxScroll);
    const newIndex = Math.min(
        totalImages - 1,
        Math.max(0, Math.floor(scrollFraction * totalImages))
    );
    if (newIndex !== currentImageIndex) {
        currentImageIndex = newIndex;
        imageSequence.src = `img${currentImageIndex}.png`;
    }
    if (scrollPosition <= lockPosition) {
        imageSequence.style.position = 'fixed';
        imageSequence.style.top = '50%';
        imageSequence.style.transform = 'translateY(-50%)';
    } else {
        imageSequence.style.position = 'absolute';
        imageSequence.style.top = `${lockPosition}px`;
        imageSequence.style.transform = 'translateY(0)';
    }
});

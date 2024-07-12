document.addEventListener('DOMContentLoaded', function() {
    const circleFrame = document.getElementById('circleFrame');
    const segments = 10; // Number of segments

    for (let i = 0; i < segments; i++) {
        const segment = document.createElement('div');
        segment.classList.add('segment');
        segment.style.transform = `rotate(${(360 / segments) * i}deg)`;
        circleFrame.appendChild(segment);
    }
});


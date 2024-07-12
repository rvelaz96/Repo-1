document.addEventListener('DOMContentLoaded', () => {
    const keys = document.querySelectorAll('.key');

    const circleOfFifths = {
        "C": ["G", "F"],
        "G": ["D", "C"],
        "D": ["A", "G"],
        "A": ["E", "D"],
        "E": ["B", "A"],
        "B": ["Gb", "E"],
        "Gb": ["Db", "B"],
        "Db": ["Ab", "Gb"],
        "Ab": ["Eb", "Db"],
        "Eb": ["Bb", "Ab"],
        "Bb": ["F", "Eb"],
        "F": ["C", "Bb"],
    };

    keys.forEach(key => {
        key.addEventListener('click', () => {
            const currentKey = key.getAttribute('data-key');
            const compatibleKeys = circleOfFifths[currentKey];

            keys.forEach(k => k.classList.remove('highlight'));
            key.classList.add('highlight');
            compatibleKeys.forEach(ck => {
                document.querySelector(`.key[data-key="${ck}"]`).classList.add('highlight');
            });
        });
    });
});

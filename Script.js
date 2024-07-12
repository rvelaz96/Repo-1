document.addEventListener('DOMContentLoaded', () => {
    const keys = document.querySelectorAll('.key');

    const circleOfFifths = {
        "C": ["G", "F", "A Minor"],
        "G": ["D", "C", "E Minor"],
        "D": ["A", "G", "B Minor"],
        "A": ["E", "D", "F# Minor"],
        "E": ["B", "A", "C# Minor"],
        "B": ["Gb", "E", "G# Minor"],
        "Gb": ["Db", "B", "D# Minor"],
        "Db": ["Ab", "Gb", "A# Minor"],
        "Ab": ["Eb", "Db", "F Minor"],
        "Eb": ["Bb", "Ab", "C Minor"],
        "Bb": ["F", "Eb", "G Minor"],
        "F": ["C", "Bb", "D Minor"],
    };

    keys.forEach(key => {
        key.addEventListener('click', () => {
            const currentKey = key.getAttribute('data-key');
            const compatibleKeys = circleOfFifths[currentKey];

            // Remove previous highlights
            keys.forEach(k => k.classList.remove('highlight', 'selected'));

            // Highlight the selected key
            key.classList.add('selected');

            // Highlight compatible keys
            compatibleKeys.forEach(ck => {
                document.querySelector(`.key[data-key="${ck}"]`).classList.add('highlight');
            });
        });
    });
});

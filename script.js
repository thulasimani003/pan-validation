document.getElementById('panForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const pan = document.getElementById('pan').value.toUpperCase();
    const panError = document.getElementById('panError');

    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    if (panRegex.test(pan)) {
        panError.textContent = 'Valid PAN Number';
        panError.style.color = 'green';
    } else {
        panError.textContent = 'Invalid PAN Number';
        panError.style.color = 'red';
    }
});

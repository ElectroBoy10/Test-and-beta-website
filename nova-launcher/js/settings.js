function toggleSettings() {
    const settingsDiv = document.getElementById('settings');
    settingsDiv.style.display = settingsDiv.style.display === 'none' ? 'block' : 'none';
}

const slider = document.getElementById('font-size-slider');
slider.addEventListener('input', (event) => {
    document.body.style.fontSize = `${event.target.value}px`;
    localStorage.setItem('fontSize', event.target.value);
});

const themeSelector = document.getElementById('theme');
themeSelector.addEventListener('change', (event) => {
    document.body.className = event.target.value;
    localStorage.setItem('theme', event.target.value);
});

function loadSettings() {
    const fontSize = localStorage.getItem('fontSize');
    if (fontSize) {
        document.body.style.fontSize = `${fontSize}px`;
        slider.value = fontSize;
    }

    const theme = localStorage.getItem('theme');
    if (theme) {
        document.body.className = theme;
        themeSelector.value = theme;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadSettings();
});

function clearSettings() {
    localStorage.removeItem('fontSize');
    localStorage.removeItem('theme');
    location.reload();
                               }

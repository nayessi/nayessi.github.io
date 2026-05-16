const titleSpan = document.getElementById('typed-title');
const subtitleSpan = document.getElementById('typed-subtitle');
const titleCursor = document.querySelector('.title-cursor');
const subtitleCursor = document.querySelector('.subtitle-cursor');

const titleText = "nayessi";
const subtitleText = "Developer in the making";

let titleIndex = 0;
let subtitleIndex = 0;

function typeTitle() {
    if (titleIndex < titleText.length) {
        titleSpan.textContent += titleText.charAt(titleIndex);
        titleIndex++;
        setTimeout(typeTitle, 100);
    } else {
        titleCursor.style.animation = 'none';
        titleCursor.style.opacity = '0';
        startTypeSubtitle();
    }
}

function typeSubtitle() {
    if (subtitleIndex < subtitleText.length) {
        subtitleSpan.textContent += subtitleText.charAt(subtitleIndex);
        subtitleIndex++;
        setTimeout(typeSubtitle, 70);
    } else {
        subtitleCursor.style.animation = 'none';
        subtitleCursor.style.opacity = '0';
    }
}

function startTypeSubtitle() {
    // Показываем курсор подзаголовка
    subtitleCursor.style.display = 'inline-block';
    setTimeout(typeSubtitle, 300);
}

typeTitle();

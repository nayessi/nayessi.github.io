const titleElement = document.getElementById('typed-title');
const subtitleElement = document.getElementById('typed-subtitle');

const titleText = "nayessi";
const subtitleText = "Developer in the making";

let titleIndex = 0;
let subtitleIndex = 0;

function addCursorTo(element) {
    
    const oldCursor = element.parentNode.querySelector('.typed-cursor');
    if (oldCursor) oldCursor.remove();
    
    const cursor = document.createElement('span');
    cursor.className = 'typed-cursor';
    element.parentNode.insertBefore(cursor, element.nextSibling);
}

function removeCursorFrom(element) {
    const cursor = element.parentNode.querySelector('.typed-cursor');
    if (cursor) cursor.remove();
}

function typeTitle() {
    if (titleIndex === 0) {
        addCursorTo(titleElement);
    }
    
    if (titleIndex < titleText.length) {
        titleElement.textContent += titleText.charAt(titleIndex);
        titleIndex++;
        setTimeout(typeTitle, 100);
    } else {
        removeCursorFrom(titleElement);
        startTypeSubtitle();
    }
}

function typeSubtitle() {
    if (subtitleIndex === 0) {
        addCursorTo(subtitleElement);
    }
    
    if (subtitleIndex < subtitleText.length) {
        subtitleElement.textContent += subtitleText.charAt(subtitleIndex);
        subtitleIndex++;
        setTimeout(typeSubtitle, 70);
    } else {
        removeCursorFrom(subtitleElement);
    }
}

function startTypeSubtitle() {
    typeSubtitle();
}

typeTitle();
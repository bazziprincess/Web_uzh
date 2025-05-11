/**
 * Get the value correspondin to the query parameter
 * @param {string} name - The name of the url query parameter
 * @return {string} The value of the query paramter
 */
function getUrlParameter(name) {
    name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    if (results == null) {
        return null;
    } else {
        return decodeURIComponent(results[1].replace(/\+/g, ' '));
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var title = getUrlParameter('title');
    document.getElementById('title-placeholder').innerHTML
        = title == null ? 'Not found': title;
    document.getElementById('text-placeholder').innerHTML
        = title == null ? '' : 'This page is currently under construction.';
}, false);

// Font size scaling functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the buttons
    const increaseButton = document.getElementById('font-increase-button');
    const decreaseButton = document.getElementById('font-decrease-button');

    // Set default font size (in px) if not already set
    if (!document.documentElement.style.fontSize) {
        document.documentElement.style.fontSize = '16px';
    }

    // Get current font size
    function getCurrentFontSize() {
        const currentSize = window.getComputedStyle(document.documentElement).fontSize;
        return parseFloat(currentSize);
    }

    // Increase font size
    increaseButton.addEventListener('click', function() {
        const currentSize = getCurrentFontSize();
        const newSize = currentSize * 1.1; // Increase by 10%
        document.documentElement.style.fontSize = `${newSize}px`;
    });

    // Decrease font size
    decreaseButton.addEventListener('click', function() {
        const currentSize = getCurrentFontSize();
        const newSize = currentSize * 0.9; // Decrease by 10%
        document.documentElement.style.fontSize = `${newSize}px`;
    });

    // Optional: Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + Plus to increase font size
        if ((e.ctrlKey || e.metaKey) && e.key === '+') {
            e.preventDefault();
            increaseButton.click();
        }

        // Ctrl/Cmd + Minus to decrease font size
        if ((e.ctrlKey || e.metaKey) && e.key === '-') {
            e.preventDefault();
            decreaseButton.click();
        }
    });
});

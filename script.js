// Add a click event listener to all images with the class "clickable"
const images = document.querySelectorAll('.clickable');
images.forEach(image => {
    image.addEventListener('click', () => {
        // Get the URL from the data-url attribute
        const url = image.dataset.url;
        // Open the URL in a new tab
        window.open(url, '_blank');
    });
});

// Use CSS media queries to adjust the layout based on screen size
const mediaQuery = window.matchMedia('(max-width: 768px)');
if (mediaQuery.matches) {
    // Change layout for small screens
    // For example, hide a sidebar or reduce font size
} else {
    // Change layout for large screens
    // For example, show a sidebar or increase font size
}

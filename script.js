// Sample Markdown content
const markdownContent = `
# Slide 1
Content for slide 1

---

# Slide 2
Content for slide 2

... add more slides
`;

// Function to inject Markdown content into HTML
function injectMarkdownIntoSlides() {
  const htmlContent = marked(markdownContent);
  const slideArray = htmlContent.split('<hr>');
  const container = document.querySelector('.slideshow-container');

  slideArray.forEach((slide, index) => {
    const slideDiv = document.createElement('div');
    slideDiv.className = 'slide';
    slideDiv.innerHTML = slide;
    container.appendChild(slideDiv);
  });
}

// Initialize slideshow after injecting Markdown
window.onload = function () {
  injectMarkdownIntoSlides();
  // Assume you have showSlides function implemented
  // showSlides();
  // setInterval(() => showSlides(1), 2000); // Automatic slideshow every 2 seconds
};

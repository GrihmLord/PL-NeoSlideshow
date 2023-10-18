# PRJCT LAZRUS: A Social Finance Platform

## About

PRJCT LAZRUS is a social finance platform that aims to elevate financial literacy within the Black community. This repository houses an interactive slideshow that discusses key financial issues and potential solutions. The project is built using HTML5, CSS3, and JavaScript, and incorporates user-friendly UI elements and linting checks for code quality.

## Features

- **Interactive Slides:** Slides contain clickable elements that offer more information.
- **Smooth Transitions:** The slideshow uses CSS transitions for smooth navigation between slides.
- **Linting Checks:** CSS and JavaScript files have active linting checks for quality assurance.

## Getting Started

### Prerequisites

You need to have a basic understanding of HTML, CSS, and JavaScript to understand the codebase.

### Installation

1. Clone the repository

   ```bash
   git clone <https://github.com/yourusername/PL--NEO---SlideShow-.git>
   ```

2. Open `Pl-SS.html` in your preferred web browser to view the slideshow.

### How to Run the Slideshow

1. Navigate to the project directory where `Pl-SS.html` is located.
2. Double-click on `Pl-SS.html` to open it with your default web browser.
3. The slideshow will start automatically. Use the "Next" button to manually navigate through the slides, or click on interactive elements to see more information.

#### Main Step: Run the Marp Presentation

To convert your Markdown presentation into a viewable format, navigate to the directory where your `presentation.md` is saved. Open the terminal and run:

```bash
marp presentation.md
```

### Git Commit Sequence

For beginners, contributors or maintainers, the following Git sequence is recommended:

1. Check for changes: `git status`
2. Stage changes: `git add .`
3. Commit changes: `git commit -m "Description of changes"`
4. Pull latest changes: `git pull origin main`
5. Resolve conflicts, if any.
6. Push changes: `git push origin main`

### Expected Behavior

1. A new file should be generated in the same directory where `presentation.md` is located. This file will be named `presentation.html` or `presentation.pdf` depending on the default output setting.

2. You can open this HTML or PDF file in a browser or a PDF viewer to see your rendered presentation.

### Troubleshooting

- **Command Not Found**: If you still see a "Command Not Found" error, ensure that the Marp CLI is installed and available in your PATH environment variable.

- **Directory Not Found**: Make sure you are in the correct directory where `presentation.md` exists. Use `ls` or `dir` to list files and verify that `presentation.md` is there.

- **Other Errors**: If you encounter errors like "input file not found", make sure the file name and path are correct.

### Usage

- Navigate through the slideshow to view content.
- Click on interactive elements for more information.

### Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new pull request.

## License

[Include license information here]

## Contact

workman@prjctlazrus.com

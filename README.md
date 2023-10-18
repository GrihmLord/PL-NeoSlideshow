# PL-NeoSlideshow Project

Welcome to my PL-NeoSlideshow project. This project uses Marp to generate presentations from Markdown files.

## Prerequisites

- Install [Node.js and npm](https://nodejs.org/en/download/)
- Install Marp CLI by running `npm install -g @marp-team/marp-cli`

## Main Step: Run the Marp Presentation

To convert your Markdown presentation into a viewable format, navigate to the directory where your `presentation.md` is saved. Open the terminal and run:

```bash
marp presentation.md
```

### Expected Behavior

1. A new file should be generated in the same directory where `presentation.md` is located. This file will either be named `presentation.html` or `presentation.pdf`, depending on the default output setting.

2. You can open this HTML or PDF file in a browser or a PDF viewer to see your rendered presentation.

### Troubleshooting

- **Command Not Found**: If you still see a "Command Not Found" error, ensure that Marp CLI is installed and available in your PATH environment variable.

- **Directory Not Found**: Make sure you are in the correct directory where `presentation.md` exists. Use `ls` or `dir` to list files and verify that `presentation.md` is there.

- **Other Errors**: If you encounter errors like "input file not found," make sure the file name and path are correct.

## Contributing

Feel free to fork this repository and submit pull requests or issues.

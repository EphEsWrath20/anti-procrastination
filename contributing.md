# Contributing Guide

Thank you for your interest in contributing to the Anti-Procrastination Chrome Extension. This document outlines the process for proposing changes, reporting bugs, and contributing to the overall development of the project.

---

## Code of Conduct

By participating in this project, you agree to maintain a respectful, constructive, and professional environment for all contributors.

---

## How to Get Started

### Reporting Bugs
If you encounter a bug or unexpected behavior, please open an "Issue" providing the following information:
* A clear description of the problem.
* Detailed steps to reproduce the error.
* The version of Chrome being used.
* Screenshots or console error messages where applicable.

### Suggesting Enhancements
Ideas for new features are welcome. Open an "Issue" describing the proposal and explaining how it would add value to the extension's users.

---

## Development Process

### 1. Environment Setup
1. Fork the repository.
2. Clone your fork locally: `git clone https://github.com/your-username/repo-name.git`
3. Load the extension in Chrome via `chrome://extensions/` by enabling Developer Mode.

### 2. Branching Strategy
Create a specific branch to work on your contribution:
`git checkout -b feature/improvement-name` or `git checkout -b fix/bug-name`

### 3. Coding Standards
To maintain consistency throughout the project, please ensure:
* Use descriptive variable names (English is preferred for the codebase).
* Maintain a 2-space indentation.
* Document complex functions or critical logic with comments.

---

## Submitting Pull Requests (PR)

Once your changes are complete, follow these steps to submit your proposal:

1. Verify that the code does not generate errors
2. Commit your changes with clear messages: `git commit -m "Brief description of the change"`.
3. Push the changes to your fork: `git push origin branch-name`.
4. Open a Pull Request describing:
   * The specific problem it solves or the feature it adds.
   * Any changes made to the file structure or `manifest.json` permissions.

---

## Code Review

All Pull Requests will be reviewed by the maintainers before being merged. Changes or clarifications may be requested before final approval.

We appreciate your time and effort in making this tool better for everyone.
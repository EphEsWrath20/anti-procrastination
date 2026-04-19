# Contribution Guide

Thank you for your interest in collaborating on the **Anti-Procrastination Chrome Extension**. This document outlines the process for proposing changes, reporting bugs, and contributing to the project's development.

---

## Code of Conduct

By participating in this project, you agree to maintain a respectful, constructive, and professional environment with all collaborators.

---

## Getting Started

### Reporting Bugs
If you find a bug or unexpected behavior, please open an **Issue** providing the following information:
* A clear description of the problem.
* Detailed steps to reproduce the error.
* The Chrome version you are using.
* Screenshots or console error messages, if possible.

### Suggesting Improvements
Ideas for new features are welcome. Open an **Issue** describing your proposal and why you believe it would add value to the extension's users.

---

## Development Process

### 1. Environment Setup
1. **Fork** the repository.
2. **Clone** your fork locally:  
   `git clone https://github.com/your-username/repo-name.git`
3. **Load** the extension in Chrome via `chrome://extensions/` by enabling **Developer Mode**.

### 2. Creating Branches
Create a specific branch to work on your contribution:  
`git checkout -b feature/improvement-name` or `git checkout -b fix/bug-name`

### 3. Coding Style
To maintain consistency within the project, please ensure you:
* Use descriptive variable names in English or Spanish (following the current code standard).
* Use **2-space indentation**.
* Comment on complex functions or critical logic.

---

## Submitting Pull Requests (PR)

Once your changes are complete, follow these steps to submit your proposal:
1. Ensure the code does not generate errors in the Chrome Developer Tools console.
2. **Commit** your changes with clear messages:  
   `git commit -m "Brief description of the change"`.
3. **Push** the changes to your fork:  
   `git push origin branch-name`.
4. Open a **Pull Request** describing:
   * What problem it solves or what functionality it adds.
   * Any changes made to the file structure or `manifest.json` permissions.

---

## Code Review

All Pull Requests will be reviewed by maintainers before being merged. Changes or clarifications may be requested before final approval.

We appreciate your time and effort in helping improve this tool!

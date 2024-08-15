---
marp: true
theme: default
class:
  - invert
---

# Git Refresh

**Git** is a version control system that manages changes to your source code over time. It allows multiple people to work on a project and keeps track of changes, enabling you to revert to earlier versions if needed.

---

# Why Learn Git on the Command Line?

- **Deeper Understanding**: Learn the underlying mechanics of Git.
- **Advanced Functionality**: Command-line Git offers more features than GUI counterparts.
- **Professional Environments**: Command-line Git is often required in professional settings.

---

# Key Concepts in Git

- **Repository**: Storage space for your project, containing all files and their history.
- **Commit**: A snapshot of your files at a particular point in time.
- **Branch**: A parallel version of the repository for independent development.
- **Fork**: A personal copy of another's repository for experimentation.
- **Cloning**: Creating a local copy of a remote repository.

---

# Basic Git Commands

1. **Install Git**
   ```bash
   git --version
   ```
   Download and install Git from [Git's official website](https://git-scm.com/downloads).

2. **Configure Git**
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

---

# Creating a New Repository

- Navigate to your project directory and initialize a new Git repository:
  ```bash
  cd path/to/your/project
  git init
  ```

- Add files to the repository:
  ```bash
  git add .
  ```

- Commit changes:
  ```bash
  git commit -m "Initial commit"
  ```

---

# Understanding Git Branching

**Branches** allow you to work on different features or bug fixes without affecting the main codebase.

**Basic Branching Commands:**

- Create a new branch:
  ```bash
  git branch new-feature
  ```
- Switch to a branch:
  ```bash
  git checkout new-feature
  ```

---

# Merging Branches

- To merge changes from a branch into `main`:
  ```bash
  git checkout main
  git merge new-feature
  ```

- Resolve conflicts if they occur and complete the merge.

---

# Rebasing in Git

Rebasing is used to move or combine a sequence of commits to a new base commit, maintaining a clean, linear project history.

- Rebase `feature-branch` onto `main`:
  ```bash
  git checkout feature-branch
  git rebase main
  ```

---

# Basic GitHub Usage

**GitHub** is a platform that hosts Git repositories and provides collaboration tools.

- **Clone a Repository**:
  ```bash
  git clone https://github.com/username/repository.git
  ```

- **Push Changes to GitHub**:
  ```bash
  git push origin main
  ```

---

# Advanced Git Commands

- **Pull Changes**:
  ```bash
  git pull origin main
  ```

- **Fork and Create Pull Request**:
  - Fork a repository on GitHub.
  - Clone it locally, make changes, and push to your fork.
  - Create a pull request to propose changes to the original repository.

---

# Example Workflow

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/username/repository.git
   ```

2. **Create a New Branch**:
   ```bash
   git checkout -b feature-branch
   ```

3. **Commit Changes**:
   ```bash
   git add .
   git commit -m "Add new feature"
   ```

4. **Push to GitHub**:
   ```bash
   git push origin feature-branch
   ```

---

# Branching in Git

Branching allows developers to work independently on different features without affecting the main codebase.

- **Create and Switch Branch**:
  ```bash
  git checkout -b new-feature
  ```

- **Merge Branches**:
  ```bash
  git checkout main
  git merge new-feature
  ```

- **Delete Branches**:
  ```bash
  git branch -d new-feature
  ```

---

# Merging in Git

Merging combines changes from different branches into one.

- **Merge Changes**:
  ```bash
  git checkout main
  git merge feature-branch
  ```

- Handle conflicts if any, and complete the merge process.

---

# Rebasing in Git

Rebasing re-applies commits from one branch onto another, creating a linear project history.

- **Rebase a Branch**:
  ```bash
  git checkout feature-branch
  git rebase main
  ```

- Resolve conflicts and continue rebasing as needed.

---

# Best Practices

- Regularly merge or rebase to keep branches up-to-date.
- Use descriptive commit messages.
- Review changes before merging or rebasing.

---

# Questions?

---

🧪 Experiment No. 16: Deployment Process
# Aim
To implement and automate the deployment process of a full-stack application using CI/CD pipelines with GitHub Actions, including backend testing and preparation for frontend testing.

# Tools & Technologies Used
Git & GitHub

GitHub Actions (CI/CD)

Python 3.10

Pytest (for backend testing)

Node.js (for frontend – optional)

Virtual Environment (venv)

VS Code

# Theory
Deployment is the process of making an application available for use. In modern full-stack development, deployment is automated using CI/CD (Continuous Integration / Continuous Deployment) pipelines.

Continuous Integration (CI): Automatically tests code when changes are pushed.

Continuous Deployment (CD): Automatically deploys code after successful testing.

In this experiment, we use GitHub Actions, a CI/CD tool that runs workflows when events (like push or pull request) occur.

Workflow Features:
Runs on every push to main branch

Sets up backend environment

Installs dependencies

Executes backend test cases using pytest

(Frontend testing setup is included but commented)

This ensures:

Code reliability

Early bug detection

Automated testing before deployment

# Learning Outcomes
After completing this experiment, you will be able to:

Understand CI/CD concepts in full-stack development

Automate backend testing using GitHub Actions

Configure workflow files using YAML

Set up virtual environments and dependency installation

Integrate testing into deployment pipelines

Prepare scalable deployment-ready applications
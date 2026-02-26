# Experiment 8: Developing RESTful APIs with Flask

1. Aim
To develop and deploy a functional RESTful API using the Flask framework to perform CRUD (Create, Read, Update, Delete) operations on student data.

# Tools Used
Backend Framework: Flask (Python).

Production Server: Gunicorn.

Environment Management: Python venv (virenv).

Version Control: Git & GitHub.

Deployment Platform: Render.

API Testing: Postman or Browser.

# Theory
REST (Representational State Transfer): An architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other.

Flask Blueprints: A way to organize a group of related routes, allowing for a modular and maintainable codebase as the application grows.

Application Factory Pattern: A design pattern where the Flask app instance is created inside a function (create_app), which allows for better testing and multiple configurations.

CRUD Operations: The four basic functions of persistent storage: Create (POST), Read (GET), Update (PUT), and Delete (DELETE).

# Procedure
1. Project Initialization: Created the directory structure FSD-2/backend/rest-api-lab and initialized a virtual environment.

2. Dependency Management: Installed flask, gunicorn, and flask-cors, then generated a requirements.txt file.

3. Code Implementation: * Defined student routes inside student_routes.py using Blueprints.

4. Implemented the Application Factory in app.py to initialize the Flask instance.

5. Version Control: Created a .gitignore to exclude virenv/ and pushed the source code to a GitHub repository.

6. Deployment: Configured a Web Service on Render with the Root Directory set to backend/rest-api-lab and the start command gunicorn "app:create_app()".

# Learning Outcomes
1. Learned how to structure a professional Flask application using the Factory Pattern and Blueprints.

2. Gained experience in managing Python dependencies and virtual environments.

3. Successfully deployed a backend service to the cloud (Render) and handled environment-specific configurations like Root Directories.

4. Understood the importance of .gitignore in maintaining a clean production repository.
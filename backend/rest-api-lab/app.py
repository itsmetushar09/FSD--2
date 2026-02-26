from flask import Flask
from routes.student_routes import student_bp

def create_app():
    # Use double underscores: __name__
    app = Flask(__name__)

    # Register Blueprints
    app.register_blueprint(student_bp)

    # Move home route INSIDE the factory for Render/Gunicorn to see it
    @app.route("/")
    def home():
        return {"message": "Backend Server is running"}

    return app

# This creates the 'app' object for run.py to import
app = create_app()
from flask import Flask
from routes.student_routes import student_bp

def create_app():
    app = Flask(__name__)
    
    # Register Blueprints
    app.register_blueprint(student_bp)

    # By moving this here, Pylance recognizes it's part of the 'app' 
    # being returned by this function.
    @app.route("/")
    def home():
        return {"message": "Backend Server is running"}

    return app

# DELETE the old lines 12-16 that were outside this function.
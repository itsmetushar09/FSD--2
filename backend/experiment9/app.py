from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity

app = Flask(__name__)  # Must be double underscores
app.config["JWT_SECRET_KEY"] = "super-secret-key"
jwt = JWTManager(app)

# ... (rest of your users and login routes)

@app.route("/")
def home():
    return jsonify({"message": "Authentication Experiment Running"})

if __name__ == "__main__":  # Must be double underscores
    app.run(host="0.0.0.0", port=5000, debug=True)
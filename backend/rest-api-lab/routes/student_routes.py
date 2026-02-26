from flask import Blueprint, request, jsonify

# Use double underscores: __name__
student_bp = Blueprint("students", __name__)

# In-memory storage
students = []
current_id = 1

@student_bp.route("/students", methods=["POST"])
def create_student():
    global current_id
    data = request.get_json()
    if not data or "name" not in data:
        return jsonify({"error": "Name is required"}), 400
    student = {"id": current_id, "name": data["name"], "age": data.get("age", None)}
    students.append(student)
    current_id += 1
    return jsonify(student), 201

@student_bp.route("/students", methods=["GET"])
def get_students():
    return jsonify(students), 200

# (Keep your other routes: get_student, update_student, delete_student as you wrote them)
from flask import Flask, request, jsonify
import mysql.connector

app = Flask(__name__)

# DB Connection
conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="1234",
    database="student_db"
)
cursor = conn.cursor(dictionary=True)

# Validation function
def validate(data):
    if not data.get('name') or not data.get('course'):
        return "Name and Course required"
    if not isinstance(data.get('age'), int) or data['age'] <= 0:
        return "Invalid age"
    return None

# CREATE
@app.route('/students', methods=['POST'])
def add_student():
    data = request.get_json()
    
    error = validate(data)
    if error:
        return jsonify({"error": error}), 400

    query = "INSERT INTO student (name, age, course) VALUES (%s, %s, %s)"
    cursor.execute(query, (data['name'], data['age'], data['course']))
    conn.commit()

    return jsonify({"message": "Student added successfully"})

# READ ALL
@app.route('/students', methods=['GET'])
def get_students():
    cursor.execute("SELECT * FROM student")
    result = cursor.fetchall()
    return jsonify(result)

# READ ONE
@app.route('/students/<int:id>', methods=['GET'])
def get_student(id):
    cursor.execute("SELECT * FROM student WHERE id=%s", (id,))
    result = cursor.fetchone()
    return jsonify(result)

# UPDATE
@app.route('/students/<int:id>', methods=['PUT'])
def update_student(id):
    data = request.get_json()

    error = validate(data)
    if error:
        return jsonify({"error": error}), 400

    query = "UPDATE student SET name=%s, age=%s, course=%s WHERE id=%s"
    cursor.execute(query, (data['name'], data['age'], data['course'], id))
    conn.commit()

    return jsonify({"message": "Student updated"})

# DELETE
@app.route('/students/<int:id>', methods=['DELETE'])
def delete_student(id):
    cursor.execute("DELETE FROM student WHERE id=%s", (id,))
    conn.commit()

    return jsonify({"message": "Student deleted"})

if __name__ == '__main__':
    app.run(debug=True)
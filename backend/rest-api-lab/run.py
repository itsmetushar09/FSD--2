from app import app

if __name__ == "__main__":
    # Host 0.0.0.0 is required for containerized environments like Render
    app.run(host="0.0.0.0", port=5000, debug=True)
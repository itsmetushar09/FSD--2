from flask import Flask, request, jsonify
import os

app = Flask(__name__)

# In-memory data
orders = {
    101: {"item": "Laptop", "status": "Pending"},
    102: {"item": "Phone", "status": "Shipped"},
    103: {"item": "Shoes", "status": "Delivered"}
}

# ✅ Home route (important for Render)
@app.route('/')
def home():
    return "Order Service is Running 🚀"

# ✅ Update order API
@app.route('/orders/<int:order_id>', methods=['PUT'])
def update_order(order_id):
    if order_id not in orders:
        return jsonify({"error": "Order not found"}), 404

    data = request.get_json()

    # Handle case when no JSON is sent
    if not data:
        return jsonify({"error": "No data provided"}), 400

    status = data.get("status")

    if not status:
        return jsonify({"error": "Status required"}), 400

    orders[order_id]["status"] = status

    return jsonify({
        "message": "Order updated",
        "order": orders[order_id]
    })

# ✅ Correct deployment block
if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
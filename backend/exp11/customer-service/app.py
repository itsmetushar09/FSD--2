from flask import Flask, jsonify

app = Flask(__name__)

# In-memory data
customers = {
    1: {"name": "Tushar", "orders": [101, 102]},
    2: {"name": "Rahul", "orders": [103]}
}

orders = {
    101: {"item": "Laptop", "status": "Pending"},
    102: {"item": "Phone", "status": "Shipped"},
    103: {"item": "Shoes", "status": "Delivered"}
}

@app.route('/customers/<int:customer_id>/orders', methods=['GET'])
def get_customer_orders(customer_id):
    if customer_id not in customers:
        return jsonify({"error": "Customer not found"}), 404

    order_ids = customers[customer_id]["orders"]
    customer_orders = {oid: orders[oid] for oid in order_ids}

    return jsonify({
        "customer": customers[customer_id]["name"],
        "orders": customer_orders
    })

if __name__ == '__main__':
    import os
port = int(os.environ.get("PORT", 5000))
app.run(host="0.0.0.0", port=port)
# Aim

To design and implement a simple microservices architecture using Python Flask by creating two independent backend services:

Customer Service to fetch customer orders
Order Service to update order status
and to test APIs using Postman and deploy services on Render.

# Tools Used
Programming Language: Python
Framework: Flask
API Testing Tool: Postman
Deployment Platform: Render
IDE/Editor: VS Code / PyCharm
Browser: Chrome / Edge

# Theory

Microservices architecture is a software design approach in which an application is divided into small, independent services that communicate through APIs.

Each service:

Performs a specific function
Runs independently
Can be developed, deployed, and scaled separately

In this experiment:

Customer Service retrieves customer order details
Order Service updates the status of orders

Flask is a lightweight Python web framework used to create REST APIs easily.
APIs (Application Programming Interfaces) allow communication between different services using HTTP methods such as:

GET → Retrieve data
PUT → Update data

Data is stored in-memory using Python dictionaries for simplicity instead of using a database.

# Procedure
Step 1: Setup Project Structure
Create two folders:
customer-service
order-service
Step 2: Implement Customer Service
Create a Flask app
Store customer and order data in dictionaries

Create API:

GET /customers/<id>/orders
Run service on port 5000
Step 3: Implement Order Service
Create another Flask app
Store order data in dictionary

Create API:

PUT /orders/<id>
Accept JSON input to update order status
Run service on port 5001
Step 4: Install Dependencies

Install Flask using:

pip install flask
Step 5: Run Services

Run both services in separate terminals:

python app.py
Step 6: Test APIs using Postman

Test GET request:

http://127.0.0.1:5000/customers/1/orders

Test PUT request:

http://127.0.0.1:5001/orders/101

Send JSON body:

{
  "status": "Delivered"
}
Step 7: Deploy on Render
Upload code to GitHub
Deploy both services separately on Render
Obtain live URLs

# Learning Outcomes

After completing this experiment, I learned:

How to design a microservices architecture
How to build REST APIs using Flask
Understanding of HTTP methods (GET, PUT)
How to store and manage data using in-memory structures
How to test APIs using Postman
Basics of deploying backend services on Render
Importance of independent services in scalable applications
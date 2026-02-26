
# Experiment 9: Implementing Authentication using JWT and Basic Auth

## 1. Aim
To implement and compare different web authentication mechanisms—Basic Auth, Simple Token, and JSON Web Tokens (JWT)—using Flask to secure backend routes.

## 2. Theory
* **Basic Authentication:** Sends credentials (username/password) encoded in the `Authorization` header with every request.
* **Token Authentication:** A method where the server provides a unique string (token) after login, which the client must present for subsequent requests.
* **JWT (JSON Web Token):** An industry-standard, compact, and self-contained way for securely transmitting information between parties as a JSON object. Unlike simple tokens, JWTs are cryptographically signed.

## 3. Procedure
1. **Environment Setup:** Created a dedicated folder and virtual environment.
2. **Security Implementation:** - Integrated `Flask-JWT-Extended` for managing token creation and verification.
   - Configured a `JWT_SECRET_KEY` for signing tokens.
3. **Route Protection:** - Used the `@jwt_required()` decorator to protect sensitive endpoints.
   - Implemented a login route to issue tokens upon successful credential verification.

## 4. Learning Outcomes
- Successfully implemented multiple authentication strategies in a single Flask app.
- Learned the importance of `CORS` in allowing authenticated requests from frontend applications.
- Understood the lifecycle of a JWT, from creation (`create_access_token`) to identity retrieval (`get_jwt_identity`).
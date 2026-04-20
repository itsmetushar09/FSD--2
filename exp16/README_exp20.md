
# Experiment 16 - CI/CD Pipeline

## Objective
To implement Continuous Deployment using Docker and GitHub Actions.

## Steps Performed
1. Created Dockerfile for backend
2. Built Docker image using docker build
3. Ran container using docker run
4. Created GitHub Actions workflow
5. Automated deployment on push

## Commands Used

### Build Image
docker build -t exp16-backend .

### Run Container
docker run -d -p 5000:5000 exp16-backend

## Output
- Docker image created successfully
- Container running successfully
- GitHub Actions workflow executed

## Screenshots
FSD2\exp16\screenshots_exp20
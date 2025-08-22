# E-commerce Application with CI/CD Pipeline

## Project Overview

This project is a simple e-commerce application with a React frontend and an Express backend. It demonstrates a full CI/CD pipeline using Jenkins, Docker, and Kubernetes for automated testing, building, and deployment.

---

## Project Structure

/ecommerce-app-root
│
├── /server # Backend API (Node.js + Express)
├── /client # Frontend app (React)
├── /k8s # Kubernetes deployment files
├── Jenkinsfile # Jenkins pipeline configuration
├── docker-compose.yml # Docker Compose file (optional)
└── README.md # This documentation

---

## Getting Started

### Prerequisites

- Node.js and npm installed
- Docker installed
- Kubernetes cluster (minikube, kind, or cloud)
- Jenkins set up for CI/CD (optional for local dev)

---

### Run Locally

#### Backend

```bash
cd server
npm install
npm start
Backend API will run on: http://localhost:5000

Frontend
cd client
npm install
npm start


Frontend app will run on: http://localhost:3000

Docker
Build images

From project root:

docker build -t yourusername/ecommerce-backend:latest ./server
docker build -t yourusername/ecommerce-frontend:latest ./client

Run containers locally
docker run -p 5000:5000 yourusername/ecommerce-backend:latest
docker run -p 3000:80 yourusername/ecommerce-frontend:latest

Kubernetes Deployment

Apply deployment files:

kubectl apply -f k8s/deployment.yaml

CI/CD Pipeline

Uses Jenkins to automate:

Build

Test

Docker image creation

Kubernetes deployment

Includes manual approval before production deployment

Monitoring with Prometheus & Grafana (configuration coming soon)

Tests

Backend API tests using Jest and Supertest located in /server/test

Frontend tests with React Testing Library located in /client/src/__tests__/

Run backend tests:

cd server
npm test

Future Improvements

Add Selenium for UI testing

Enhance monitoring dashboard

Add end-to-end tests

Implement rollback strategies in Jenkins pipeline

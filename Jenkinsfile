pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        bat 'docker build -t your-dockerhub-username/ecommerce-backend:latest .\\server'
        bat 'docker build -t your-dockerhub-username/ecommerce-frontend:latest .\\client'
      }
    }
    stage('Test') {
      steps {
        bat 'cd server && npm test'
        bat 'cd client && npm test'
      }
    }
    stage('Push') {
      steps {
        withCredentials([string(credentialsId: 'dockerhub-pw', variable: 'DOCKER_PASSWORD')]) {
          bat 'echo %DOCKER_PASSWORD% | docker login -u your-dockerhub-username --password-stdin'
          bat 'docker push your-dockerhub-username/ecommerce-backend:latest'
          bat 'docker push your-dockerhub-username/ecommerce-frontend:latest'
        }
      }
    }
    stage('Deploy to Kubernetes') {
      steps {
        bat 'kubectl apply -f k8s\\deployment.yaml'
      }
    }
  }
}

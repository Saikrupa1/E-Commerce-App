pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t your-dockerhub-username/ecommerce-backend:latest ./server'
        sh 'docker build -t your-dockerhub-username/ecommerce-frontend:latest ./client'
      }
    }
    stage('Test') {
      steps {
        sh 'cd server && npm test'
        sh 'cd client && npm test'
      }
    }
    stage('Push') {
      steps {
        withCredentials([string(credentialsId: 'dockerhub-pw', variable: 'DOCKER_PASSWORD')]) {
          sh 'echo $DOCKER_PASSWORD | docker login -u your-dockerhub-username --password-stdin'
          sh 'docker push your-dockerhub-username/ecommerce-backend:latest'
          sh 'docker push your-dockerhub-username/ecommerce-frontend:latest'
        }
      }
    }
    stage('Deploy to Kubernetes') {
      steps {
        sh 'kubectl apply -f k8s/deployment.yaml'
      }
    }
  }
}

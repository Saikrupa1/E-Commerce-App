pipeline {
    agent any

    stages {
stage('Checkout') {
    steps {
        git branch: 'main', url: 'https://github.com/Saikrupa1/E-Commerce-App.git'
    }
}

        stage('Build') {
            steps {
                echo '🔧 Building application...'
                // Example: npm install or python setup
            }
        }

        stage('Test') {
            steps {
                echo '🧪 Running tests...'
                // Example: npm test or pytest
            }
        }

        stage('Docker Build') {
            steps {
                echo '🐳 Building Docker image...'
                sh 'docker build -t ecommerce-app:latest .'
            }
        }
    }
}

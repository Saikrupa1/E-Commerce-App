pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git'
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

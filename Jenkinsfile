pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo '📥 Cloning repository...'
                git branch: 'main', url: 'https://github.com/Saikrupa1/E-Commerce-App.git'
            }
        }

        stage('Build & Test') {
            steps {
                echo '🔧 Building and testing app inside Docker...'
                sh 'docker build --target build-stage -t ecommerce-app-builder .'
            }
        }

        stage('Build Production Image') {
            steps {
                echo '🐳 Building production Docker image...'
                sh 'docker build -t ecommerce-app:latest .'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline completed successfully!'
        }
        failure {
            echo '❌ Pipeline failed. Check console logs for errors.'
        }
    }
}

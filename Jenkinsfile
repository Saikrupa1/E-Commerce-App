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
                script {
                    if (isUnix()) {
                        sh 'docker build --target build-stage -t ecommerce-app-builder .'
                    } else {
                        bat 'docker build --target build-stage -t ecommerce-app-builder .'
                    }
                }
            }
        }

        stage('Build Production Image') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'docker build -t ecommerce-app:latest .'
                    } else {
                        bat 'docker build -t ecommerce-app:latest .'
                    }
                }
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

pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "ecommerce-app"
        DOCKER_TAG = "latest"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Saikrupa1/E-Commerce-App.git'
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}")
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    docker.image("${DOCKER_IMAGE}:${DOCKER_TAG}").inside {
                        sh 'pytest tests/'
                    }
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-cred', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    script {
                        sh "echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin"
                        sh "docker push ${DOCKER_IMAGE}:${DOCKER_TAG}"
                    }
                }
            }
        }

        stage('Deploy to Staging') {
            steps {
                sh 'kubectl apply -f k8s/staging/'
            }
        }

        stage('Approval for Production') {
            steps {
                input "Approve deployment to Production?"
            }
        }

        stage('Deploy to Production') {
            steps {
                sh 'kubectl apply -f k8s/production/'
            }
        }
    }

    post {
        always {
            cleanWs()
        }
        failure {
            echo "Build or tests failed!"
        }
        success {
            echo "Pipeline completed successfully!"
        }
    }
}

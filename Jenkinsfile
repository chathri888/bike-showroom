pipeline {
    agent any

    environment {
        IMAGE_NAME  = 'bike-showroom'
        IMAGE_TAG   = 'latest'
    }

    stages {

        stage('Checkout') {
            steps {
                echo '📥 Checking out source code...'
                checkout scm
            }
        }

        stage('Start Minikube') {
            steps {
                echo '🚀 Ensuring Minikube is running...'
                sh '''
                    minikube status || minikube start --driver=docker
                    minikube status
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                echo '🐳 Building Docker image...'
                sh '''#!/bin/bash
                    eval $(minikube docker-env)
                    docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .
                    echo "✅ Image built successfully"
                    docker images | grep ${IMAGE_NAME}
                '''
            }
        }

        stage('Deploy to Minikube') {
            steps {
                echo '🚀 Deploying to Minikube...'
                sh '''
                    kubectl apply -f k8s/deployment.yaml
                    kubectl apply -f k8s/service.yaml
                    kubectl rollout restart deployment/bike-showroom
                    kubectl rollout status deployment/bike-showroom --timeout=120s
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                echo '✅ Verifying deployment...'
                sh '''
                    echo "--- Pods ---"
                    kubectl get pods -l app=bike-showroom
                    echo ""
                    echo "--- Service ---"
                    kubectl get svc bike-showroom-service
                    echo ""
                    echo "--- Access URL ---"
                    minikube service bike-showroom-service --url
                '''
            }
        }
    }

    post {
        success {
            echo '🎉 Bike Showroom deployed successfully!'
        }
        failure {
            echo '❌ Pipeline failed. Check the logs above.'
        }
    }
}

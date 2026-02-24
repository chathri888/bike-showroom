pipeline {
    agent any

    environment {
        IMAGE_NAME  = 'bike-showroom'
        IMAGE_TAG   = 'latest'
        MINIKUBE    = 'sudo minikube'
        KUBECTL     = 'sudo kubectl'
    }

    triggers {
        pollSCM('* * * * *')
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
                    if sudo minikube status | grep -q "Running"; then
                        echo "✅ Minikube is already running"
                    else
                        echo "Starting Minikube..."
                        sudo minikube start --driver=none
                    fi
                    sudo minikube status
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                echo '🐳 Building Docker image...'
                sh '''#!/bin/bash
                    eval $(sudo minikube docker-env)
                    sudo docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .
                    echo "✅ Image built successfully"
                    sudo docker images | grep ${IMAGE_NAME}
                '''
            }
        }

        stage('Deploy to Minikube') {
            steps {
                echo '🚀 Deploying to Minikube...'
                sh '''
                    sudo kubectl apply -f k8s/deployment.yaml
                    sudo kubectl apply -f k8s/service.yaml
                    sudo kubectl rollout restart deployment/bike-showroom
                    sudo kubectl rollout status deployment/bike-showroom --timeout=120s
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                echo '✅ Verifying deployment...'
                sh '''
                    echo "--- Pods ---"
                    sudo kubectl get pods -l app=bike-showroom
                    echo ""
                    echo "--- Service ---"
                    sudo kubectl get svc bike-showroom-service
                    echo ""
                    echo "--- Access URL ---"
                    sudo minikube service bike-showroom-service --url
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

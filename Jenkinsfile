pipeline {
    agent any

    environment {
        IMAGE_NAME  = 'bike-showroom'
        IMAGE_TAG   = 'latest'
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
                    if sudo minikube status 2>/dev/null | grep -q "Running"; then
                        echo "✅ Minikube is already running"
                    else
                        echo "Starting Minikube..."
                        sudo minikube start --driver=none
                        sleep 10
                    fi
                    sudo minikube status
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                echo '🐳 Building Docker image...'
                sh """
                    sudo docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .
                    echo '✅ Image built successfully'
                    sudo docker images | grep ${IMAGE_NAME}
                """
            }
        }

        stage('Deploy to Minikube') {
            steps {
                echo '🚀 Deploying to Minikube...'
                sh '''
                    sudo kubectl apply -f k8s/deployment.yaml
                    sudo kubectl apply -f k8s/service.yaml
                    sleep 5
                    sudo kubectl rollout restart deployment/bike-showroom
                    sudo kubectl rollout status deployment/bike-showroom --timeout=120s
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                echo '✅ Verifying deployment...'
                sh '''
                    echo "========== Pods =========="
                    sudo kubectl get pods -l app=bike-showroom -o wide
                    echo ""
                    echo "========== Service =========="
                    sudo kubectl get svc bike-showroom-service
                    echo ""
                    echo "========== Access URL =========="
                    NODE_IP=$(sudo kubectl get nodes -o jsonpath='{.items[0].status.addresses[?(@.type=="InternalIP")].address}')
                    NODE_PORT=$(sudo kubectl get svc bike-showroom-service -o jsonpath='{.spec.ports[0].nodePort}')
                    echo "🌐 App is live at: http://${NODE_IP}:${NODE_PORT}"
                '''
            }
        }
    }

    post {
        success {
            echo '🎉 Bike Showroom deployed successfully on Minikube!'
        }
        failure {
            echo '❌ Pipeline failed. Check the logs above.'
        }
    }
}

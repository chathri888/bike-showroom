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
                    echo '✅ Docker image built'
                    sudo docker save ${IMAGE_NAME}:${IMAGE_TAG} | sudo ctr -n=k8s.io images import -
                    echo '✅ Image loaded into containerd for Kubernetes'
                """
            }
        }

        stage('Deploy to Minikube') {
            steps {
                echo '🚀 Deploying to Minikube...'
                sh '''
                    sudo kubectl delete deployment bike-showroom --ignore-not-found=true
                    sudo kubectl delete service bike-showroom-service --ignore-not-found=true
                    sleep 3
                    sudo kubectl apply -f k8s/deployment.yaml
                    sudo kubectl apply -f k8s/service.yaml
                    echo "Waiting for pods to be ready..."
                    sleep 10
                    sudo kubectl get pods -l app=bike-showroom
                    sudo kubectl rollout status deployment/bike-showroom --timeout=180s
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
            echo '❌ Pipeline failed. Showing pod diagnostics...'
            sh '''
                echo "========== Pod Status =========="
                sudo kubectl get pods -l app=bike-showroom -o wide 2>/dev/null || true
                echo ""
                echo "========== Pod Details =========="
                sudo kubectl describe pods -l app=bike-showroom 2>/dev/null || true
                echo ""
                echo "========== Pod Logs =========="
                sudo kubectl logs -l app=bike-showroom --tail=20 2>/dev/null || true
            '''
        }
    }
}

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

        stage('Build Docker Image') {
            steps {
                echo '🐳 Building Docker image...'
                script {
                    // Point Docker CLI to Minikube's Docker daemon
                    // On Windows, use: minikube -p minikube docker-env --shell powershell | Invoke-Expression
                    // On Linux/Mac, use: eval $(minikube docker-env)
                    if (isUnix()) {
                        sh 'eval $(minikube docker-env) && docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .'
                    } else {
                        bat 'minikube -p minikube docker-env --shell cmd > tmp_env.cmd && call tmp_env.cmd && docker build -t %IMAGE_NAME%:%IMAGE_TAG% . && del tmp_env.cmd'
                    }
                }
            }
        }

        stage('Deploy to Minikube') {
            steps {
                echo '🚀 Deploying to Minikube...'
                script {
                    if (isUnix()) {
                        sh '''
                            kubectl apply -f k8s/deployment.yaml
                            kubectl apply -f k8s/service.yaml
                            kubectl rollout restart deployment/bike-showroom
                            kubectl rollout status deployment/bike-showroom --timeout=120s
                        '''
                    } else {
                        bat '''
                            kubectl apply -f k8s/deployment.yaml
                            kubectl apply -f k8s/service.yaml
                            kubectl rollout restart deployment/bike-showroom
                            kubectl rollout status deployment/bike-showroom --timeout=120s
                        '''
                    }
                }
            }
        }

        stage('Verify Deployment') {
            steps {
                echo '✅ Verifying deployment...'
                script {
                    if (isUnix()) {
                        sh '''
                            echo "--- Pods ---"
                            kubectl get pods -l app=bike-showroom
                            echo "--- Service ---"
                            kubectl get svc bike-showroom-service
                            echo "--- Access URL ---"
                            minikube service bike-showroom-service --url
                        '''
                    } else {
                        bat '''
                            echo --- Pods ---
                            kubectl get pods -l app=bike-showroom
                            echo --- Service ---
                            kubectl get svc bike-showroom-service
                            echo --- Access URL ---
                            minikube service bike-showroom-service --url
                        '''
                    }
                }
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

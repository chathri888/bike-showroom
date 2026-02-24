# 🏍️ MotoVault – Premium Bike Showroom

A professional motorcycle showroom website containerized with Docker and deployed to Minikube via Jenkins CI/CD.

## Tech Stack
- **Frontend** – HTML5, CSS3, Vanilla JS
- **Backend** – Node.js + Express
- **Container** – Docker (Node 18 Alpine)
- **Orchestration** – Kubernetes (Minikube)
- **CI/CD** – Jenkins (Declarative Pipeline)

## Quick Start (Local)
```bash
npm install
npm start
# → http://localhost:3000
```

## Deploy to Minikube (Manual)
```powershell
# 1. Start Minikube
minikube start

# 2. Point Docker to Minikube's daemon
minikube -p minikube docker-env --shell powershell | Invoke-Expression

# 3. Build the image
docker build -t bike-showroom:latest .

# 4. Deploy
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml

# 5. Open in browser
minikube service bike-showroom-service
```

## Jenkins Pipeline
1. Create a **Pipeline** job in Jenkins.
2. Point **Pipeline → Definition** to **Pipeline script from SCM** and enter your repo URL.
3. Jenkins will pick up the `Jenkinsfile` and run: **Checkout → Build Image → Deploy → Verify**.

## Project Structure
```
Bike-Showroom/
├── public/
│   ├── index.html       # Main page
│   ├── styles.css       # Premium dark theme
│   └── script.js        # Interactivity
├── k8s/
│   ├── deployment.yaml  # K8s Deployment (2 replicas)
│   └── service.yaml     # NodePort Service (:30080)
├── server.js            # Express server
├── Dockerfile           # Container image
├── Jenkinsfile          # CI/CD pipeline
└── package.json
```

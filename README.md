# react-todo-list
Simple react todo-list using the following concepts

1. React hooks
2. Docker
3. Helm Charts
4. Kubernetes

We need the following minimum setup available in your machine to deploy this App

1. Docker daemon (Docker Desktop or Podman Desktop)
2. Docker Hub Account
3. Helm 
4. Minikube (to know more refer to this link https://minikube.sigs.k8s.io/docs/start/)

Once the above-mentioned setup will be completed, execute the following commands to run the project

1. > npm install

2. > npm run build

3. > docker login

4. > docker build -t {your docker username}/react-todo-list:latest .

5. > docker push {your docker username}/react-todo-list:latest

6. > helm install example-chart ./charts/example-chart

7. > kubectl expose deployment example-chart --type=LoadBalancer --port=8080

8. > kubectl get services

9. > minikube service example-chart

During the final command execution the react project output loaded in a browser



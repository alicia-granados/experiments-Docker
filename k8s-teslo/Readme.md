minikube pause
minikube unpause
minikube stop
minikube delete --all

Comandos para desplegar la base de datos  en el cluster

1. kubectl version
2. kubectl get all
   kubectl get pod
3. kubectl apply -f postgres-config.yml
4. kubectl apply -f postgres-secrets.yml
5. kubectl apply -f postgres.yml
6. kubectl get all

7. Verificar si algo salio mal 
    kubectl describe deployment.app/postgres-deployment (NAME)
8. Ver los logs del pod
    kubectl logs pod/postgres-deployment-b85dc5449-fvr58

Comandos  para desplegar PG-ADMIN al cluster
1. kubectl apply -f pg-admin-secrets.yml
2. kubectl apply -f pg-admin.yml
3. kubectl get all
4. kubectl describe deployment.apps/pg-admin-deployment
5. Ver los logs del pod
    kubectl logs pod/pg-admin-deployment-6d688cf9d7-zx9t4

minikube service pg-admin-service

Comandos  para desplegar BACKEND al cluster
1. kubectl apply -f backend-secrets.yml
2. kubectl apply -f backend.yml
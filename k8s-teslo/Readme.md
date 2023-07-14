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


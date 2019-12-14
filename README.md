# Qnever
Wait no more with Qnever
--------------------------------------------------------------------------------------------------------------------------
Our application is written with express, node. Runs dependent on postgresql database written with the seqeulize orm, passport-jwt for authorization, memory-cache for caching entity routes. 
---------------------------------------------------------------------------------------------------------------------------
Our config file is an external one designed to be safe from being accessed. It consists of the db connection URI and the secret key for the jwt-token and the ports that the application runs on.
---------------------------------------------------------------------------------------------------------------------------
To run Docker, we have a docker file describing our backend as a docker image and another docker file describing the frontend image. We execute "$docker build -t qnever-app ."
---------------------------------------------------------------------------------------------------------------------------
The Docker-Compose describes the backing service dependencies between the all docker images with each other. Each image is run in a container. We execute "$docker-compose up" and then you will see logs of executed files 
---------------------------------------------------------------------------------------------------------------------------
To run the composed file we simply "$docker run qnever-app".
---------------------------------------------------------------------------------------------------------------------------

# app-MERN-stack

## Step by Step on how to run this project

1. Clone repository in local repo

    `gh repo clone dnik4ov97/app-MERN-stack`

2. Run each Dockerfile in app-backend & app-frontend

    In ~/app-backend
    `docker build -t app-backend .`

    In ~/app-frontend
    `docker build -t app-frontend .`

3. Run Docker compose
    
    In the root file
    `docker-compose up`
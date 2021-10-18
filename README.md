## Step by Step on how to run this project

1. Clone repository in local repo

    `gh repo clone dnik4ov97/app-MERN-stack`

2. Run each Dockerfile in app-backend & app-frontend

    In ~/app-MERN-stack/app-backend
    `docker build -t app-backend .`

    In ~/app-MERN-stack/app-frontend
    `docker build -t app-frontend .`

3. Run Docker compose
    
    In ~/app-MERN-stack/Docker
    `docker-compose up`

**You should see the frontend on localhost:3000 & backend on localhost:5001**

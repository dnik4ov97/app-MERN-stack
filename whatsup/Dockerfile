# Dockerfile for React client

# Build react client
FROM node:latest

# Working directory be app
WORKDIR /app

COPY package.json ./

### Installing dependencies
RUN npm install --silent

#copy local files to app folder
COPY . .

CMD ["npm", "start"]
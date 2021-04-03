FROM node:13.12.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm i --unsafe-perm
COPY . .

RUN npm run build:dev


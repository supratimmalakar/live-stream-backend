FROM node:18

WORKDIR /usr/src/app

RUN npm i -g nodemon

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

USER node

ENV PORT=8080

EXPOSE 8080
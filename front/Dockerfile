FROM node:latest

WORKDIR /src/app
COPY package*.json ./ 

RUN npm install --silent
COPY . .
EXPOSE 8080

CMD [ "npm", "run", "serve" ]
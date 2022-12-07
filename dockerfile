FROM node:lts-alpine
ENV NODE_ENV=production

WORKDIR /user/src/app
RUN mkdir /backend/
WORKDIR /user/src/app/backend
RUN mkdir /src/
WORKDIR /user/src/app/backend/src
COPY backend/src/app.js /user/src/app/backend/src
COPY backend/src/server.js /user/src/app/backend/src
RUN ls  /user/src/app/backend/src

WORKDIR /user/src/app/backend/src
RUN mkdir /controller/
WORKDIR /user/src/app/backend/src/controller
COPY backend/src/controller/AdministracaoController.js  /user/src/app/backend/src/controller 
RUN ls /user/src/app/backend/src/controller


WORKDIR /user/src/app/backend/src
RUN mkdir /routes/
WORKDIR /user/src/app/backend/src/routes
COPY  backend/src/routes/adminstration.js  /user/src/app/backend/src/routes
RUN ls /user/src/app/backend/src/routes

WORKDIR /user/src/app/backend/src
RUN mkdir /services/
WORKDIR /user/src/app/backend/src/services
COPY  backend/src/services/ServicosAdm.js  /user/src/app/backend/src/services
RUN ls /user/src/app/backend/src/services


WORKDIR /user/src/app/
RUN mkdir /node_modules/
WORKDIR /user/src/app/node_modules
COPY  node_modules/  /user/src/app/node_modules
WORKDIR /user/src/app/node_modules
RUN mkdir /express/
COPY node_modules/express/index.js /user/src/app/node_modules
COPY node_modules/express/package.json /user/src/app/node_modules
RUN ls /user/src/app/node_modules/express/lib

WORKDIR /user/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN ls -la /user/src/app

WORKDIR /user/src/app/
RUN npm install 
RUN npm install express
RUN npm install nodemon
COPY . .
EXPOSE 3000
RUN chown -R node /user/src/app
WORKDIR /user/src/app/
CMD ["npm", "run","dev"]

ANDRESSA_D@cloudshell:~ (sa-saopaulo-1)$ 

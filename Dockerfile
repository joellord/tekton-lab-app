FROM node:14
EXPOSE 3000
WORKDIR /opt/tekton-lab-app
COPY package.json .
RUN npm install --only=prod
COPY *.js ./
CMD npm start
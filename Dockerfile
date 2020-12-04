FROM node:14
WORKDIR /opt/tekton-lab-app
COPY . .
CMD node .
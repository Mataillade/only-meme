ARG NODE_VERSION="20.5.1"

# Node
FROM node:${NODE_VERSION}-alpine

ARG WORK_DIR="/app"

# Working directory
WORKDIR ${WORK_DIR}
COPY . .

# Setup system
RUN apk update
RUN apk upgrade
RUN apk cache clean

EXPOSE 4200

# Setup NPM
RUN npm install -g npm@latest
RUN npm install
RUN npm cache clean -f

ENTRYPOINT ["npx", "ng", "serve", "--host", "0.0.0.0"]

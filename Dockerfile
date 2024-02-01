FROM node:20

RUN apt update -y &&\
    apt install -y yarn &&\
    mkdir /app &&\
    chown -R node /app
    
USER node

WORKDIR /app
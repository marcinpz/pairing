# Docker config file for pairing

# Build: docker build -t marcinpz/pairing .
# Run (blocking): docker run --rm -p 3000:3000 marcinpz/pairing
# Run (as daemon): docker run -d --rm -p 3000:3000 marcinpz/pairing
# Test (with curl): curl $(docker-machine ip):3000

FROM node:latest

MAINTAINER Marcin Zborek

WORKDIR /var/www

COPY . /var/www

RUN npm install

ENTRYPOINT ["node", "app.js"]

EXPOSE 3000

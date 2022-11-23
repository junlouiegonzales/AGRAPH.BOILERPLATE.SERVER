FROM node:16.14.2
ENV NODE_ENV production

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --production

COPY ./dist/* .
EXPOSE 8080

CMD [ "node", "index.js", "--port=8080", "--max-old-space-size=8192" ]
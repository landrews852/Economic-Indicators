FROM node:16.15.1-alpine3.15

WORKDIR /app/server

COPY . .

ENV PORT=3001

RUN npm install

EXPOSE $PORT

ENTRYPOINT ["npm", "run", "start-dev"]

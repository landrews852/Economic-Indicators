FROM node:16.15.1-alpine3.15

WORKDIR /app/client

COPY . .

ENV PORT=3000

RUN npm install

EXPOSE $PORT

ENTRYPOINT ["npm", "run", "dev"]

FROM node:22-alpine
WORKDIR /app
COPY package.json server.js ./
COPY src ./src
EXPOSE 3000
CMD ["node", "server.js"]

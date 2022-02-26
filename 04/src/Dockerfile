FROM node:alpine
WORKDIR /app
COPY server.js ./
RUN npm install redis
EXPOSE 8080
CMD ["node", "server.js"]

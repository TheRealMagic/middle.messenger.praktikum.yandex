
FROM node:17-alpine3.14

WORKDIR /www

COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

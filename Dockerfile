
FROM alpine:3.15

WORKDIR /www

RUN apk add --update npm

COPY package-lock.json ./
COPY package.json ./
RUN npm ci

COPY . .

EXPOSE 3000

CMD npm run start

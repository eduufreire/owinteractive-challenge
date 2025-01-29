FROM node:20-alpine

WORKDIR /app

COPY . /app

RUN npm install
RUN npx prisma generate
RUN npm run build 

EXPOSE 8080

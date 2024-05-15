FROM node:18-alpine

WORKDIR /tourism/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]

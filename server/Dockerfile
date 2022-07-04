FROM node:16

WORKDIR /server

ENV NODE_ENV=production

COPY  ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

CMD ["node", "index.js"]

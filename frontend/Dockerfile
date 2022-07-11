FROM node:16

ENV NODE_ENV production

WORKDIR /app

COPY  ["package.json", "package-lock.json", "./"]

RUN npm install --production=false

COPY . .

RUN npm run build

EXPOSE  3000

CMD npm run start

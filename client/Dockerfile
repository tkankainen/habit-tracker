FROM node:lts

WORKDIR /app/client

COPY package* ./

RUN npm install

COPY . ./

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
FROM node:lts

WORKDIR /app/server

COPY package* ./

RUN npm install

COPY . ./

EXPOSE 3001

CMD [ "npm", "start" ]
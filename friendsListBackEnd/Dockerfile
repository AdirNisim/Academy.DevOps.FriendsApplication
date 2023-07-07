FROM node:18

WORKDIR /usr/src/app/backend

COPY package*.json ./

RUN npm install 

COPY . .

RUN npm run build

EXPOSE 3001

CMD ["node", "dist/main.js"]
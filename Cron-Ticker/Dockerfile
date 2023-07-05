#/app/usr/lib
FROM node:18.16.1-alpine3.18

#CD APP
WORKDIR /app

# dest /app
COPY package.json ./

#instalar las dependenciass
RUN npm install

# dest /app
#COPY app.js ./
COPY . . 

#realizar testing
RUN npm run test

# comando run de la imagen 
CMD ["node", "app.js"]
#/app/usr/lib
FROM node:18.16.1-alpine3.18

#CD APP
WORKDIR /app

# dest /app
COPY app.js package.json ./

#instalar las dependenciass
RUN npm install

# comando run de la imagen 
CMD ["node", "app.js"]
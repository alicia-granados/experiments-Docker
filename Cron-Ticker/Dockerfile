#/app/usr/lib
FROM --platform=$BUILDPLATFORM   node:18.16.1-alpine3.18

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

#eliminar archivos y directorios no necesarios en prod.
RUN rm -rf test && rm -rf node_modules

#unicamente las dependencias de produccion
RUN npm install --prod

# comando run de la imagen 
CMD ["node", "app.js"]